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
    <div>
        <input type="text" v-model="store.searchFilm">
        <button type="submit" @click.prevent="$emit('search')">Search</button>
    </div>
    <section>
        <div class="container"> <!-- to add d-flex % flex wrap -->
            <div class="row" v-for="film in store.movieList" :key="film.id">
                <SingleFilmVue :info="film" />
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@use "../styles/partials/variables.scss" as *;
</style>