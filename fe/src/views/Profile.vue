<template>
  <div class="profile">
    <button
        class="delta-btn__error delta-btn__medium delta-btn__fullwidth delta-btn__rounded"
        v-if="this.isAuthenticated"
        @click="this.logout"
    >Cerrar sesión
    </button>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {AuthService} from '@/services/AuthService';

const authService = new AuthService();
@Component({
  components: {},
})
export default class Profile extends Vue {
  private isAuthenticated: boolean = false;

  public created() {
    this.isAuthenticated = authService.isAuthenticated();
  }

  public logout() {
    authService.logout();
    this.isAuthenticated = authService.isAuthenticated();
    this.$router.push('auth');
  }
}
</script>

<style lang="scss" scoped>
  .profile {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    background-color: #d3d3d361;
  }
</style>
