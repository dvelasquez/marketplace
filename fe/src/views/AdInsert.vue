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
            <option :value="item.id" v-for="item in metadata.categories" :key="item.id">{{item.name}}</option>
          </select>
        </div>
        <div class="ad-insert__form__group">
          <label for="region">Región</label>
          <select class="mktpl-select__primary" name="region" id="region" v-model.number="ad.region" required>
            <option value="">Seleccione una región</option>
            <option :value="item.id" v-for="item in metadata.regions" :key="item.id">{{item.name}}</option>
          </select>
        </div>
        <div class="ad-insert__form__group">
          <label for="region">Comuna</label>
          <select class="mktpl-select__primary" name="commune" id="commune" v-model.number="ad.commune" required>
            <option value="">Seleccione una categoria</option>
            <option :value="item.id" v-for="item in filteredCommunes(ad.region)" :key="item.id">{{item.name}}</option>
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

  const imgService = new ImageService('marketplace-pt');

  @Component({
    components: {
      FSCarousel
    },
    data: () => ({
      ad: {title: '', price: '', description: '', images: [], region: null, commune: null, category: null},
    }),
  })
  export default class AdInsert extends Vue {
    private metadata: IMetadata = {
      categories: [],
      regions: [],
      communes: []
    };
    private images = [];

    created() {
      this.images = [
        {
          'public_id': 'xdxh0pbgjqhdkbkzfxz0',
          'version': 1553383672,
          'signature': '493e8cecf1c16cb8e2a0e55791119f376788e37c',
          'width': 400,
          'height': 400,
          'format': 'jpg',
          'resource_type': 'image',
          'created_at': '2019-03-23T23:27:52Z',
          'tags': ['browser_upload'],
          'bytes': 24203,
          'type': 'upload',
          'etag': '89c35e3e6808a016f43727c38c7e60c9',
          'placeholder': false,
          'url': 'http://res.cloudinary.com/marketplace-pt/image/upload/v1553383672/xdxh0pbgjqhdkbkzfxz0.jpg',
          'secure_url': 'https://res.cloudinary.com/marketplace-pt/image/upload/v1553383672/xdxh0pbgjqhdkbkzfxz0.jpg',
          'access_mode': 'public',
          'original_filename': 'profile'
        },
        {
          'public_id': 'jsomehznne3xqxejtekc',
          'version': 1553383673,
          'signature': '315922b08adc671fcef8bf1554c90332753bfd8a',
          'width': 967,
          'height': 1153,
          'format': 'jpg',
          'resource_type': 'image',
          'created_at': '2019-03-23T23:27:53Z',
          'tags': ['browser_upload'],
          'bytes': 295381,
          'type': 'upload',
          'etag': '74f5e18132cbc53a076e52eb47f4af5e',
          'placeholder': false,
          'url': 'http://res.cloudinary.com/marketplace-pt/image/upload/v1553383673/jsomehznne3xqxejtekc.jpg',
          'secure_url': 'https://res.cloudinary.com/marketplace-pt/image/upload/v1553383673/jsomehznne3xqxejtekc.jpg',
          'access_mode': 'public',
          'original_filename': 'its me'
        },
        {
          'public_id': 'xdxh0pbgjqhdkbkzfxz0',
          'version': 1553383672,
          'signature': '493e8cecf1c16cb8e2a0e55791119f376788e37c',
          'width': 400,
          'height': 400,
          'format': 'jpg',
          'resource_type': 'image',
          'created_at': '2019-03-23T23:27:52Z',
          'tags': ['browser_upload'],
          'bytes': 24203,
          'type': 'upload',
          'etag': '89c35e3e6808a016f43727c38c7e60c9',
          'placeholder': false,
          'url': 'http://res.cloudinary.com/marketplace-pt/image/upload/v1553383672/xdxh0pbgjqhdkbkzfxz0.jpg',
          'secure_url': 'https://res.cloudinary.com/marketplace-pt/image/upload/v1553383672/xdxh0pbgjqhdkbkzfxz0.jpg',
          'access_mode': 'public',
          'original_filename': 'profile'
        }
      ];
      const metadataService = new MetadataService();
      metadataService.get()
        .then((metadata) => {
          this.metadata = metadata;
        })
        .catch((e) => {
          // TODO: Mostrar mensaje de error
        });
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
      return this.metadata.communes.filter(commune => commune.regionId === regionId);
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
