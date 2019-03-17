<template>
  <div class="listing">
    <FSListingItem
        v-for="ad in ads"
        :key="ad.id"
        :id="ad.id"
        :img="ad.images[0].url"
        :title="ad.title"
        :price="ad.price"
        :category="ad.category.name"
        :location="ad.commune.name"
        :date="ad.updatedAt"
    ></FSListingItem>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import FSListingItem from '../components/FSListingItem.vue';
import {AdService} from '@/services/AdService';
import {IAdModel} from '@/entities/IAdModel';

@Component({
  components: {
    FSListingItem,
  },
})
export default class Listing extends Vue {
  public ads: IAdModel[] = [];

  public created() {
    const adService = new AdService();
    adService.getAds()
      .then((data) => {
        this.ads = data;
      })
      .catch((error) => {
        throw error;
      });
  }
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
