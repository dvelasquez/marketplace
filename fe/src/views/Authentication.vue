<template>
  <div class="auth">
    <div class="auth__form">
      <h1>{{message}}</h1>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="email">Correo Electrónico</label>
          <input type="email" name="email" id="email" v-model="user.email">
        </div>
        <div>
          <label for="password">Contraseña</label>
          <input type="password" name="password" id="password" v-model="user.password">
        </div>
        <div v-if="isRegisterMode">
          <label for="rePassword">Ingrese contraseña nuevamente</label>
          <input type="password" name="rePassword" id="rePassword" v-model="user.rePassword">
        </div>
        <button
            class="mktpl-btn__primary__fullwidth"
            type="submit" v-if="!isRegisterMode">
          Iniciar Sesión
        </button>
        <button
            class="mktpl-btn__success__fullwidth"
            type="button" v-if="!isRegisterMode"
            @click="isRegisterMode=true">
          Registrar
        </button>
        <button
            class="mktpl-btn__success__fullwidth"
            type="submit" v-if="isRegisterMode">
          Crear Cuenta
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Model} from 'vue-property-decorator';
  import {ImageService} from '@/services/ImageService';
  import {AuthService} from '@/services/AuthService';
  import {IUserModel} from '@/entities/IUserModel';
  import Swal from 'sweetalert2';
  import {RawLocation} from 'vue-router';

  const imgService = new ImageService('marketplace-pt');
  @Component({
    components: {},
    data: () => ({
      user: {email: '', password: '', rePassword: ''},
    }),
  })
  export default class Authentication extends Vue {
    private isRegisterMode: boolean = false;
    private user?: IUserModel = {email: '', password: ''};
    private fromUrl?: RawLocation = '';
    private toUrl?: RawLocation = '';
    private message = 'Debe iniciar sesión.';

    private created() {
      this.fromUrl = (this.$route.query as any).from;
      this.toUrl = (this.$route.query as any).to;
    }

    private handleSubmit() {
      const authService = new AuthService();
      if (this.user) {
        if (this.isRegisterMode) {
          try {
            const result = authService.register(this.user);
            Swal.fire({
              title: 'Exito',
              text: 'Cuenta creada exitosamente, por favor inicie sesión con las nuevas credenciales',
              type: 'success',
              confirmButtonText: '¡Genial!',
            }).then(() => {
              this.isRegisterMode = false;
            });
          } catch (error) {
            Swal.fire({
              title: 'Error',
              text: error,
              type: 'error',
              confirmButtonText: 'Entiendo',
            });
          }

        } else {
          const result = authService.login(this.user);
          if (!result) {
            Swal.fire({
              title: 'Error',
              text: 'El usuario o contraseña entregado no son válidos.',
              type: 'error',
              confirmButtonText: 'Entiendo',
            });
          } else {
            Swal.fire({
              title: 'Exito',
              text: 'Ha iniciado sesión correctamente',
              type: 'success',
              confirmButtonText: '¡Genial!',
            })
              .then(() => {
                this.$router.push(this.toUrl || '');
              });
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .auth {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    background-color: #d3d3d361;

    &__form {
      width:100%;
      text-align: start;
      margin: 0.5rem;
      padding: 0.5rem;
      background-color: white;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      transition: 0.3s;
    }
  }
</style>
