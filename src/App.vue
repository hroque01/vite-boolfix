<script>
import axios from 'axios';
import AppHeaderVue from './components/AppHeader.vue';
import AppMainVue from './components/AppMain.vue';

// import store js
import { store } from './store.js';

export default {
  name: "App",
  components: {
    AppHeaderVue,
    AppMainVue,
  },
  data() {
    return {
      store,
    }
  },
  methos: {
    getFilm() {
      axios
        .get(store.apiUrl)
        .then(res => {
          store.movieList = res.data.results
        })
        .catch(err => {
          console.log('errore', err)
        })
    }
  }
}
</script>

<template>
  <AppHeaderVue title="Boolfix" />
  <main>
    <AppMainVue />
  </main>

</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
