<script >
import AppHeaderVue from './components/AppHeader.vue';

// import store js
// import { store } from './store.js';

export default {
  name: "App",
  components: {
    AppHeaderVue,
  },
  // data() {
  //   return {
  //     store,
  //   }
  // }
}
</script>

<template>
  <AppHeaderVue />
</template>

<style lang="scss" scoped>
@use "./styles/general.scss" as *;
</style>
