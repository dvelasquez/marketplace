<template>
  <div class="ad-insert">
    <div class="ad-insert__form">
      <h1>Insercion aviso</h1>
      <form @submit.prevent="handleSubmit">
        <div class="ad-insert__form__group">
          <label for="title">Título</label>
          <input type="text" name="title" id="title" v-model="ad.title">
        </div>
        <div class="ad-insert__form__group">
          <label for="price">Precio</label>
          <input type="number" name="price" id="price" v-model="ad.price">
        </div>
        <div class="ad-insert__form__group">
          <label for="description">Descripcion</label>
          <input type="text" name="description" id="description" v-model="ad.description">
        </div>
        <div class="ad-insert__form__group">
          <label for="upload">Subir imagen</label>
          <input type="file" name="upload" multiple accept="image/*" id="upload" @change="handleUpload">
          <p>
            <img v-for="image in images" :src="image.url" alt="">
          </p>
        </div>
        <button
            class="mktpl-btn__success__fullwidth"
            type="submit">
          Insertar Aviso
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {ImageService} from '@/services/ImageService';

  const imgService = new ImageService('marketplace-pt');

  @Component({
    components: {},
    data: () => ({
      ad: {title: '', price: '', description: '', images: []},
    }),
  })
  export default class AdInsert extends Vue {
    private images = [];

    private handleUpload(event: any) {
      const files = event.target.files || event.dataTransfer.files;
      if (!files.length && files.length > 0) {
        return;
      } else {
        imgService.uploadFiles(files)
          .then((response) => {
            this.images = response;
          })
          .catch((e) => {
            // TODO: Mostrar mensaje de error
          });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ad-insert {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    background-color: #d3d3d361;

    &__form {
      width: 100%;
      text-align: start;
      margin: 0.5rem;
      padding: 0.5rem;
      background-color: white;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      transition: 0.3s;

      &__group {
        margin-bottom: 1rem;
      }
    }
  }
</style>
