<template>
  <div class="search">
    <div class="search__form">
      <h1>Búsqueda</h1>
      <form @submit.prevent="handleSubmit">
        <div class="search__form__group">
          <label for="text">Texto</label>
          <input type="text" name="text" id="text" v-model="search.text">
        </div>
        <button
            class="mktpl-btn__success__fullwidth"
            type="submit">
          Buscar
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component({
    components: {},
    data: () => ({
      search: {text: ''},
    }),
  })
  export default class Search extends Vue {
    search: {
      text: string,
    } = {
      text: ''
    };

    public handleSubmit() {
      const filters = {
        where: {
          or: [
            {
              title: {
                like: encodeURI(`%${this.search.text}%`)
              }
            },
            {
              description: {
                like: encodeURI(`%${this.search.text}%`)
              }
            }
          ]
        }
      };
      this.$router.push({
        name: 'listing',
        params: {
          filters: JSON.stringify(filters)
        }
      });
    }
  }
</script>

<style lang="scss" scoped>
  .search {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    background-color: #d3d3d361;

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
