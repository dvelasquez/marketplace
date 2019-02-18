<template>
  <div class="cover-image">
    <div class="cover-image">
      <img class="inner-container" :src="imageUrl"/>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component({
    components: {},
  })
  export default class FSCoverImage extends Vue {
    @Prop()
    public imageUrl!: string;
  }
</script>

<style lang="scss">
  .cover-image {
    display: flex;
    flex-flow: row;
    width: 100%;
  }

  .inner-container {
    height: 100vw;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
  }

  @media all and (min-width: 450px) {
    .inner-container {
      height: 50vw;
      max-height: 50vw;
    }
  }

  @media all and (min-width: 800px) {
    .inner-container {
      height: 40vw;
      max-height: 28.5rem;
    }
  }
</style>
