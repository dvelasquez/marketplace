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
    <button
        v-if="loadMoreButtonEnabled"
        class="delta-btn__primary delta-btn__medium delta-btn__fullwidth delta-btn__rounded"
        @click="loadMore"
    >Cargar mas
    </button>
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
    data: () => ({
      page: 1,
      ads: [],
    }),
  })
  export default class Listing extends Vue {
    public ads!: IAdModel[];
    public page!: number;
    private adService = new AdService();
    private filters: any = null;
    private loadMoreButtonEnabled: boolean = true;

    public mounted() {
      this.loadMore();
    }

    public loadMore() {
      this.filters = JSON.parse(this.$route.params.filters || '{}');
      this.adService.getAds(25, this.page, this.filters)
        .then((data) => {
          if (data.length > 0) {
            this.page += 1;
            this.ads.push(...data);
          } else {
            this.loadMoreButtonEnabled = false;
          }
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
