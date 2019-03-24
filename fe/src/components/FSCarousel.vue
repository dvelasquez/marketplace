<template>
  <div class="fs-carousel">
    <div class="fs-carousel--item" v-for="image in images">
      <img class="fs-carousel--item--image" :src="image.url" alt="">
      <div class="fs-carousel--item--actions">
        <button>x eliminar</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component({
    components: {},
  })
  export default class FSCarousel extends Vue {
    @Prop({
      default: []
    })
    public images?: any[];
  }
</script>

<style scoped lang="scss">
  .fs-carousel {
    flex-flow: row;
    width: 100%;
    justify-content: start;
    align-content: center;
    display: inline-flex;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 1px;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;

    &--item {
      margin: 0.3em;
      padding: 0.3em;
      width: 10.6em;
      display: flex;
      flex-flow: row wrap;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      transition: 0.3s;

      &--image {
        height: 10em;
        width: 10em;
        object-fit: cover;
      }

      & span{
        width: 100%;
      }
    }
  }
</style>
