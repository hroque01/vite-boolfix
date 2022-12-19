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
        <div class="container">
            <div class="row" v-for="film in store.movieList" :key="film.id">
                <SingleFilmVue :info="film" />
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@use "../styles/partials/variables.scss" as *;
</style>