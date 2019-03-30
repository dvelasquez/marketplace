<template>
  <div class="profile">
    <div class="profile__form">
      <h1>Datos de Usuario</h1>
      <form @submit.prevent="handleSubmit">
        <div class="profile__form__group">
          <label for="email">Email</label>
          <input type="text" name="email" id="email" v-model="user.email" readonly>
        </div>
        <div class="profile__form__group">
          <label for="username">Nombre</label>
          <input type="text" name="username" id="username" v-model.text="user.username" required>
        </div>
        <div v-if="errors.length">
          <b>Se han encontrado los siguiente(s) error(es):</b>
          <ul>
            <li v-for="error in errors">{{ error }}</li>
          </ul>
        </div>
        <button
            v-if="this.isAuthenticated"
            class="mktpl-btn__success__fullwidth"
            type="submit">
          Guardar datos
        </button>
        <button
            class="delta-btn__error delta-btn__medium delta-btn__fullwidth delta-btn__rounded"
            v-if="this.isAuthenticated"
            @click="this.logout"
        >Cerrar sesión
        </button>
      </form>
    </div>

  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {IUserModel} from '@/entities/IUserModel';
  import {AuthService} from '@/services/AuthService';
  import Swal from 'sweetalert2';
  import {PROFILE_ERROR, PROFILE_SUCCESS} from '@/messages/Dialogs';


  @Component({
    components: {},
    data: () => ({
      user: {email: '', username: ''},
    }),
  })
  export default class Profile extends Vue {
    private isAuthenticated: boolean = false;
    private errors: string[] = [];
    private user!: IUserModel;
    private authService = new AuthService();

    public created() {
      this.isAuthenticated = this.authService.isAuthenticated();
      this.authService.getCurrentUser()
        .then((user) => {
          this.user = user;
        })
        .catch((e) => {
          const errorDialog = PROFILE_ERROR;
          errorDialog.text += e;
          Swal.fire(errorDialog);
        });
    }

    public logout() {
      this.authService.logout();
      this.isAuthenticated = this.authService.isAuthenticated();
      this.$router.push('auth');
    }

    private checkForm(user: IUserModel) {
      if (user && user.email && user.username) {
        return true;
      }
      this.errors = [];
      if (!user.email && user.email.length === 0) {
        this.errors.push('Nombre de usuario inválido.');
      }
    }

    private handleSubmit(e: MouseEvent) {
      e.preventDefault();
      const isValid = this.checkForm(this.user);
      if (isValid) {
        this.authService.saveCurrentUser(this.user)
          .then((response) => {
            Swal.fire(PROFILE_SUCCESS);
          })
          .catch((e) => {
            const errorDialog = PROFILE_ERROR;
            errorDialog.text += e;
            Swal.fire(errorDialog);
          });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .profile {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    background-color: #d3d3d361;

    &__form {
      width: 100%;
      text-align: start;
      padding: 0.5rem;
      background-color: white;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      transition: 0.3s;

      &__group {
        margin-bottom: 1rem;
      }
    }
  }
</style>
