<template>
  <div class="listing">
    <FSListingItem
        v-for="ad in ads"
        :key="ad.id"
        :id="ad.id"
        :img="ad.img"
        :title="ad.title"
        :price="ad.price"
        :category="ad.category"
        :location="ad.location"
        :date="ad.date"
    ></FSListingItem>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import FSListingItem from '../components/FSListingItem.vue';
  import {ImageService} from '@/services/ImageService';

  const imgService = new ImageService('marketplace-pt');

  @Component({
    components: {
      FSListingItem,
    },
    data: () => ({
      ads: [
        {
          id: 1,
          img: 'https://img.yapo.cl/images/44/4449444792.jpg',
          title: 'Excelente Samsung Galaxy S8 Duos',
          category: 'Celulares',
          price: '$250.000',
          location: 'Ñuñoa',
          date: new Date().toLocaleDateString(),
        },
        {
          id: 2,
          img: 'https://img.yapo.cl/images/44/4420405044.jpg',
          title: 'Samsung Galaxy S8+ Pluss',
          category: 'Celulares',
          price: '$220.000',
          location: 'Santiago',
          date: new Date().toLocaleDateString(),
        },
        {
          id: 3,
          img: 'https://img.yapo.cl/images/44/4493199738.jpg',
          title: 'Samsung s8',
          category: 'Celulares',
          price: '$200.000',
          location: 'Santiago',
          date: new Date().toLocaleDateString(),
        },
        {
          id: 4,
          img: 'https://img.yapo.cl/images/44/4471665591.jpg',
          title: 'Samsung s8 64gb',
          category: 'Celulares',
          price: '$210.000',
          location: 'Santiago',
          date: new Date().toLocaleDateString(),
        },
        {
          id: 5,
          img: 'https://img.yapo.cl/images/44/4473580394.jpg',
          title: 'S8+plus 64 gb',
          category: 'Celulares',
          price: '$240.000',
          location: 'Santiago',
          date: new Date().toLocaleDateString(),
        },
      ],
    }),
  })
  export default class Listing extends Vue {
  }
</script>

<style lang="scss" scoped>
  .listing {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    background-color: #d3d3d361;
  }
</style>
