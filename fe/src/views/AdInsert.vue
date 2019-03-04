<template>
  <div class="ad-insert">
    <div class="ad-insert__form">
      <h1>Insercion aviso</h1>
      <form @submit.prevent="handleSubmit">
        <div class="ad-insert__form__group">
          <label for="title">Título</label>
          <input type="text" name="title" id="title" v-model="ad.title" required>
        </div>
        <div class="ad-insert__form__group">
          <label for="price">Precio</label>
          <input type="number" name="price" id="price" v-model.number="ad.price" required>
        </div>
        <div class="ad-insert__form__group">
          <label for="category">Categoria</label>
          <select class="mktpl-select__primary" name="category" id="category" v-model.number="ad.category" required>
            <option value="">Seleccione una categoria</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div class="ad-insert__form__group">
          <label for="region">Región</label>
          <select class="mktpl-select__primary" name="region" id="region" v-model.number="ad.region" required>
            <option value="">Seleccione una región</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div class="ad-insert__form__group">
          <label for="region">Comuna</label>
          <select class="mktpl-select__primary" name="commune" id="commune" v-model.number="ad.commune" required>
            <option value="">Seleccione una categoria</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div class="ad-insert__form__group">
          <label for="description">Descripcion</label>
          <textarea name="description" id="description" v-model="ad.description" required rows="4"></textarea>
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
      ad: {title: '', price: '', description: '', images: [], region: null, commune: null, category: null},
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
