<template>
  <div class="ad-insert">
    This is the Ad Insert
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {ImageService} from '@/services/ImageService';

  const imgService = new ImageService('marketplace-pt');

  @Component({
    components: {},
  })
  export default class AdInsert extends Vue {
  }
</script>

<style lang="scss" scoped>
  .ad-insert {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    background-color: #d3d3d361;
  }
</style>
