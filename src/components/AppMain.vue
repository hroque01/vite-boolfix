<script>
import SingleFilmVue from './SingleFilm.vue';

import { store } from '../store.js'

export default {
    name: 'AppMain',
    components: {
        SingleFilmVue,
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <section>
        <div class="container -cards "> <!-- to add d-flex % flex wrap -->
            <div class="row" v-for="film in store.movieList" :key="film.id">
                <SingleFilmVue :info="film" />
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@use "../styles/partials/variables.scss" as *;
@use "../styles/general.scss" as *;

.-cards {
    display: flex;
    justify-content: center;
    gap: 1.25rem;
    width: calc(100% / 6 - 20px);
    flex-wrap: wrap;
    height: 90vh;
    overflow: auto;
}
</style>