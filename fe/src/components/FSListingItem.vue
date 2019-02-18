<template>
  <router-link
      class="fs-listing-item"
      :to="`/adview/${this.urlifyText(location)}/${this.urlifyText(category)}/${this.urlifyText(title)}/${id}`">
    <img class="fs-listing-item__image" :src="img" alt="">
    <div class="fs-listing-item__content">
      <h4 class="fs-listing-item__content__item ellipsis">{{title}}</h4>
      <h5 class="fs-listing-item__content__item">{{price}}</h5>
      <span class="fs-listing-item__content__item">{{category}}</span>
      <span class="fs-listing-item__content__item">{{location}}</span>
      <span class="fs-listing-item__content__item">{{date}}</span>
    </div>
  </router-link>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component({
  components: {},
})
export default class FSListingItem extends Vue {
  @Prop({required: true})
  public id!: number;
  @Prop()
  public img!: string;
  @Prop({required: true})
  public title!: string;
  @Prop()
  public category!: string;
  @Prop()
  public price!: string;
  @Prop()
  public location!: string;
  @Prop({required: true})
  public date!: string;

  public urlifyText(text: string): string {
    const a = 'àáäâãåèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;';
    const b = 'aaaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------';
    const p = new RegExp(a.split('').join('|'), 'g');
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with
      .replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
      .replace(/&/g, '-and-') // Replace & with ‘and’
      .replace(/[^\w\-]+/g, '') // Remove all non-word characters
      .replace(/\-\-+/g, '-') // Replace multiple — with single -
      .replace(/^-+/, ''); // Trim — from start of text .replace(/-+$/, '') // Trim — from end of text
  }
}
</script>

<style scoped lang="scss">
  .fs-listing-item {
    border: #fff medium;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    max-height: 9rem;
    min-height: 9rem;
    height: 9rem;
    margin: 0.5rem;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;

    &:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    &__image {
      max-height: 9rem;
      min-height: 9rem;
      min-width: 9rem;
      max-width: 9rem;
    }

    &__content {
      display: flex;
      max-height: 9rem;
      min-height: 9rem;
      flex: 1;
      flex-flow: column;
      justify-content: space-around;
      align-items: center;
      padding: 0.5rem;

      &__item {
        text-align: start;
        width: 100%;
        margin-block-start: 0;
        margin-block-end: 0;
      }
    }
  }

  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 1.1rem; /* fallback */
    max-height: 2.2rem; /* fallback */
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
  }
</style>
