<template>
  <div class="adview">

  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {ImageService} from '@/services/ImageService';

  const imgService = new ImageService('marketplace-pt');

  @Component({
    components: {
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
  }
</script>

<style lang="scss" scoped>
  .adview {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    background-color: #d3d3d361;
  }
</style>
