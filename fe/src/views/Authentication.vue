<template>
  <div class="auth">
    <div class="auth__form">
      <span>Para poder ingresar a su perfil debe iniciar sesión</span>
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
            class="delta-btn delta-btn__primary delta-btn__medium delta-btn__rounded delta-btn__fullwidth"
            type="submit" v-if="!isRegisterMode">
          Iniciar Sesion
        </button>
        <button
            class="delta-btn delta-btn__success delta-btn__medium delta-btn__rounded delta-btn__fullwidth"
            type="button" v-if="!isRegisterMode"
            @click="isRegisterMode=true">
          Registrar
        </button>
        <button
            class="delta-btn delta-btn__success delta-btn__medium delta-btn__rounded delta-btn__fullwidth"
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

  public handleSubmit() {
    const authService = new AuthService();
    if (this.user) {
      if (this.isRegisterMode) {
        const result =authService.register(this.user);
      } else {
        const result = authService.login(this.user);
        if(!result){
          alert('El usuario o contraseña entregado no son válidos.')
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
      text-align: start;
      margin: 0.5rem;
      padding: 0.5rem;
      background-color: white;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      transition: 0.3s;
    }
  }
</style>
