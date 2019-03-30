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
          <select class="mktpl-select__primary" name="category" id="category" v-model.number="ad.categoryId" required>
            <option value="">Seleccione una categoria</option>
            <option :value="item.id" v-for="item in metadata.categories" :key="item.id">{{item.name}}</option>
          </select>
        </div>
        <div class="ad-insert__form__group">
          <label for="region">Región</label>
          <select class="mktpl-select__primary" name="region" id="region" v-model.number="ad.regionId" required>
            <option value="">Seleccione una región</option>
            <option :value="item.id" v-for="item in metadata.regions" :key="item.id">{{item.name}}</option>
          </select>
        </div>
        <div class="ad-insert__form__group">
          <label for="region">Comuna</label>
          <select class="mktpl-select__primary" name="commune" id="commune" v-model.number="ad.communeId" required>
            <option value="">Seleccione una comuna</option>
            <option :value="item.id" v-for="item in filteredCommunes(ad.regionId)" :key="item.id">{{item.name}}</option>
          </select>
        </div>
        <div class="ad-insert__form__group">
          <label for="description">Descripcion</label>
          <textarea name="description" id="description" v-model="ad.description" required rows="4"></textarea>
        </div>
        <div class="ad-insert__form__group">
          <label for="upload">Subir imagen</label>
          <input type="file" name="upload" multiple accept="image/*" id="upload" @change="handleUpload">
          <FSCarousel :images="images"></FSCarousel>
        </div>
        <div v-if="errors.length">
          <b>Se han encontrado los siguiente(s) error(es):</b>
          <ul>
            <li v-for="error in errors">{{ error }}</li>
          </ul>
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
  import {IMetadata} from '@/entities/Metadata';
  import {MetadataService} from '@/services/MetadataService';
  import FSCarousel from '@/components/FSCarousel.vue';
  import {IAdModel} from '@/entities/IAdModel';
  import {IAdImageModel} from '@/entities/IAdImageModel';
  import {AdService} from '@/services/AdService';
  import Swal from 'sweetalert2';
  import {AD_INSERT_ERROR, AD_INSERT_SUCCESS} from '@/messages/Dialogs';

  const imgService = new ImageService('marketplace-pt');

  @Component({
    components: {
      FSCarousel,
    },
    data: () => ({
      ad: {title: '', price: '', description: '', images: [], regionId: null, communeId: null, categoryId: null},
    }),
  })
  export default class AdInsert extends Vue {
    private metadata: IMetadata = {
      categories: [],
      regions: [],
      communes: [],
    };
    private images = [];
    private errors: string[] = [];
    private ad!: IAdModel;

    public created() {
      const metadataService = new MetadataService();
      metadataService.get()
        .then((metadata) => {
          this.metadata = metadata;
        })
        .catch((e) => {
          // TODO: Mostrar mensaje de error
        });
    }

    private handleSubmit(e: MouseEvent) {
      e.preventDefault();
      const isValid = this.checkForm(this.ad);
      if (isValid) {
        this.ad.images = this.images.map((image: any): IAdImageModel => {
          return {url: image.url};
        });
        const adService = new AdService();
        adService.saveAd(this.ad)
          .then((response) => {
            Swal.fire(AD_INSERT_SUCCESS)
              .then((result) => {
                this.$router.push('/listing');
              });
          })
          .catch((e) => {
            // TODO: Mostrar mensaje de error
            const errorDialog = AD_INSERT_ERROR;
            errorDialog.text = e;
            Swal.fire(errorDialog);
          });
      }
    }

    private checkForm(ad: IAdModel) {
      if (ad && ad.title && ad.price && ad.description && ad.communeId && ad.categoryId) {
        return true;
      }
      this.errors = [];
      if (!ad.title && ad.title.length === 0) {
        this.errors.push('Título inválido.');
      }
      if (!ad.price) {
        this.errors.push('Precio inválido.');
      }
      if (this.ad.description) {
        this.errors.push('Descripción inválida.');
      }
      if (this.ad.communeId) {
        this.errors.push('Debe selecionar una comuna.');
      }
      if (ad.categoryId) {
        this.errors.push('Debe seleccionar una categoria.');
      }
    }

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

    private filteredCommunes(regionId: number) {
      return this.metadata.communes.filter((commune) => commune.regionId === regionId);
    }
  }
</script>

<style lang="scss" scoped>
  .ad-insert {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    background-color: #d3d3d361;
    padding: 0.5rem;

    &__form {
      width: 100%;
      text-align: start;
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
