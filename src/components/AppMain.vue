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
            <div class="row">
                <SingleFilmVue />
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@use "../styles/partials/variables.scss" as *;
</style>