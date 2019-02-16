<template>
  <div id="app">
    <FSHeader></FSHeader>
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/listing">Listing</router-link>
      |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import FSHeader from './components/FSHeader.vue';

  @Component({
    components: {
      FSHeader,
    },
  })
  export default class App extends Vue {
  }
</script>

<style lang="scss">
  body {
    overflow-x: hidden;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    flex-flow: row wrap;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
