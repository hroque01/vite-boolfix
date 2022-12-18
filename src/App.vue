<script>
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
