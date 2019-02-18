<template>
  <div class="profile">
    This is the fucking Profile
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {ImageService} from '@/services/ImageService';

  const imgService = new ImageService('marketplace-pt');

  @Component({
    components: {},
  })
  export default class Profile extends Vue {
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
