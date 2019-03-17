<template>
  <div class="container">
    <div class="adview" v-if="ad">
      <carousel class="adview__carousel"
                ref="carousel"
                :navigationEnabled="coverConfig.nav"
                :perPage="coverConfig.perPage"
                :paginationEnabled="coverConfig.pag"
                :navigationNextLabel="coverConfig.nextLabel"
                :navigationPrevLabel="coverConfig.prevLabel"
                :autoplay="coverConfig.autoplay"
                :loop="coverConfig.loop"
                :autoplayTimeout="coverConfig.autoplayTimeout"
      >
        <slide v-for="item in ad.images" :key="item.id">
          <FSCoverImage class="cover" :image-url="item.url"></FSCoverImage>
        </slide>
      </carousel>
      <div class="adview__content">
        <h1 class="adview__content__title">{{ad.title}}</h1>
        <h2 class="adview__content__price">{{ad.price}}</h2>
        <h3 class="adview__content__description_title">Descripción</h3>
        <p class="adview__content__description_content">{{ad.description}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {Carousel, Slide} from 'vue-carousel';
  import FSCoverImage from '@/components/FSCoverImage.vue';
  import {AdService} from '@/services/AdService';

  interface IAdViewParams {
    id: string;
    title: string;
    location: string;
  }

  const nextLabel = document.createElement('img');
  const previousLabel = document.createElement('img');
  nextLabel.setAttribute('src', '/chevrons/next.png');
  previousLabel.setAttribute('src', '/chevrons/previous.png');
  const COVER_CONFIG = {
    nav: true,
    pag: true,
    perPage: 1,
    nextLabel: nextLabel.outerHTML,
    prevLabel: previousLabel.outerHTML,
    autoplay: true,
    loop: true,
    autoplayTimeout: 6000,
  };
  @Component({
    components: {
      Carousel,
      Slide,
      FSCoverImage,
    },
    data: () => ({
      coverConfig: COVER_CONFIG,
    }),
  })
  export default class AdView extends Vue {
    private adId!: number;
    private ad: any = null;

    public created() {
      const params: IAdViewParams = (this.$route.params as unknown as IAdViewParams);
      this.adId = parseInt(params.id, 0);
      const adService = new AdService();
      adService.getAd(this.adId)
        .then((response) => {
          this.ad = response;
        })
        .catch((error) => {
          throw error;
        });
    }
  }
</script>

<style lang="scss">
  .container {
    max-width: 100%;
    width: 100%;
    display: flex;
    flex-flow: row;
    justify-content: center;

    .adview {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-flow: row wrap;
      min-height: 100%;
      width: 100%;
      background: rgb(238, 238, 238);
      height: 100%;

      &__carousel {
        width: 100%;
        max-width: 100%;
        height: 100vw;
        max-height: 100vw;

        .VueCarousel {
          height: 100%;
        }

        .VueCarousel-wrapper {
          height: 100%;
        }

        .VueCarousel-navigation {
          font-size: 70px;

          .VueCarousel-navigation-prev {
            left: 46px;
          }

          .VueCarousel-navigation-next {
            right: 46px;
          }
        }

        .VueCarousel-pagination {
          position: relative;
          top: -4rem;
          z-index: 100;
        }

      }

      &__content {
        text-align: start;
        margin: 0.5rem;
        padding: 0.5rem;
        background-color: white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        width: 100%;

        &__title {
          font-size: 1.2rem;
        }

        &__price {
          font-size: 1rem;
        }
      }
    }
  }

</style>
