<template>
  <header class="fs-header">
    <i class="fs-header__logo material-icons">layers</i>
    <div class="fs-header__items">
      <button class="fs-header__items__buttons">
        <i class="material-icons">search</i>
        <span class="fs-header__items__buttons__text">buscar</span>
      </button>
      <button class="fs-header__items__buttons">
        <i class="material-icons">account_circle</i>
        <span class="fs-header__items__buttons__text">login</span>
      </button>
      <button class="fs-header__items__buttons">
        <i class="material-icons">chat</i>
        <span class="fs-header__items__buttons__text">publicar</span>
      </button>
    </div>
  </header>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component({
    components: {},
  })
  export default class FSHeader extends Vue {
  }
</script>

<style scoped lang="scss">
  .fs-header {
    width: 100%;
    border: blue dotted;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0.3rem;

    &__logo {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;
    }

    &__items {
      display: flex;
      flex-flow: row wrap;
      flex-grow: 1;
      justify-content: flex-end;
      align-items: center;

      &__buttons {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        align-items: center;

        &__text {
          display: none;
        }
      }
    }

    @media (min-width: 600px) {
      .fs-header {
        &__items {
          &__buttons {
            &__text {
              display: flex;
            }
          }
        }
      }
    }
  }
</style>
