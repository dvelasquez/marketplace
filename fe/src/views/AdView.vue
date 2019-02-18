<template>
  <div class="adview">
    <carousel class="adview__carousel" :per-page="1" :mouse-drag="false" :navigation-enabled="true">
      <slide>
        Slide 1 Content
      </slide>
      <slide>
        Slide 2 Content
      </slide>
    </carousel>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {ImageService} from '@/services/ImageService';
  import {Carousel, Slide} from 'vue-carousel';

  const imgService = new ImageService('marketplace-pt');

  interface IAdViewParams {
    id: string;
    title: string;
    location: string;
  }

  @Component({
    components: {
      Carousel,
      Slide,
    },
    data: () => ({
      ads: [
        {
          id: 1,
          img: imgService.getCroppedImage('samples/food/spices.jpg', 9, 9, 'rem'),
          title: 'Titulo de aviso un poco largo terrible rompiendo todo lo que pasa',
          category: 'Mascotas',
          price: '$97.000',
          location: 'Ñuñoa',
          date: new Date().toLocaleDateString(),
        },
        {
          id: 2,
          img: imgService.getCroppedImage('samples/food/spices.jpg', 9, 9, 'rem'),
          title: 'Titulo de aviso un poco largo terrible rompiendo todo lo que pasa',
          category: 'Mascotas',
          price: '$97.000',
          location: 'Santiago',
          date: new Date().toLocaleDateString(),
        },
        {
          id: 3,
          img: imgService.getCroppedImage('samples/food/spices.jpg', 9, 9, 'rem'),
          title: 'Titulo de aviso un poco largo terrible rompiendo todo lo que pasa',
          category: 'Mascotas',
          price: '$97.000',
          location: 'Santiago',
          date: new Date().toLocaleDateString(),
        },
        {
          id: 4,
          img: imgService.getCroppedImage('samples/food/spices.jpg', 9, 9, 'rem'),
          title: 'Titulo de aviso un poco largo terrible rompiendo todo lo que pasa',
          category: 'Mascotas',
          price: '$97.000',
          location: 'Santiago',
          date: new Date().toLocaleDateString(),
        },
        {
          id: 5,
          img: imgService.getCroppedImage('samples/food/spices.jpg', 9, 9, 'rem'),
          title: 'Titulo de aviso un poco largo terrible rompiendo todo lo que pasa',
          category: 'Mascotas',
          price: '$97.000',
          location: 'Santiago',
          date: new Date().toLocaleDateString(),
        },
      ],
    }),
  })
  export default class AdView extends Vue {
    private adId!: number;

    public created() {
      const params: IAdViewParams = (this.$route.params as unknown as IAdViewParams);
      this.adId = parseInt(params.id, 0);
    }
  }
</script>

<style lang="scss" scoped>
  .adview {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    /*background-color: #d3d3d361;*/
    &__carousel {
      width: 100%;
    }
  }
</style>
