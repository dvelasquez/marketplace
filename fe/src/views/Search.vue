<template>
  <div class="search">
    This is the fucking Search
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {ImageService} from '@/services/ImageService';

  const imgService = new ImageService('marketplace-pt');

  @Component({
    components: {},
  })
  export default class Search extends Vue {
  }
</script>

<style lang="scss" scoped>
  .search {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    background-color: #d3d3d361;
  }
</style>
