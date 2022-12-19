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
  methods: {
    getFilm() {

      let myApi = store.apiUrl;

      if (store.searchFilm !== "") {
        myApi = `${store.SearchMovieUrl}&query=${store.searchFilm}`
      }

      axios
        .get(myApi)
        .then(res => {
          store.movieList = res.data.results
        })
        .catch(err => {
          console.log('errore', err)
        })
    }
  },
  mounted() {
    this.getFilm();
  }
}
</script>

<template>
  <AppHeaderVue title="Boolfix" />
  <main>
    <AppMainVue @search="getFilm" />
  </main>

</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
