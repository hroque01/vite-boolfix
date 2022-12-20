<script>
import { store } from '../store.js'

export default {
    name: "AppHeader",
    props: ["title"],
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <!-- header: bootstrap class -->
    <header class="d-flex justify-content-between">
        <div class="header-nav">
            <h1 class="netflix-font">
                {{ title }}
            </h1>
            <nav>
                <a href="">Home</a>
                <a href="">Serie Tv</a>
                <a href="">Film</a>
                <a href="">Nuovi e Popolari</a>
                <a href="">La mia lista</a>
                <a href="">Sfoglia per la lingue</a>
            </nav>
        </div>
        <div class="search-bar">
            <input type="text" v-model="store.searchFilm" @keyUp.enter="$emit('search')">
            <button class="button-search" type="submit">
                <font-awesome-icon icon="fas fa-search" />
            </button>
        </div>
    </header>

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;
@use '../styles/general.scss' as *;

header {

    .header-nav {
        width: 70%;
        gap: 1.25rem;
        display: flex;
        margin: 1.25rem;
        align-items: center;

        nav {
            display: flex;
            gap: 1.25rem;
            align-items: center;
        }
    }

    .netflix-font {
        color: #e50914;
        font-family: "Bebas Neue";
        cursor: pointer;
    }

    .search-bar {
        display: flex;
        gap: 1.25rem;
        align-items: center;
        margin: 1.25rem
    }

    .button-search {
        border: none;
        color: white;
        background: none;
    }

}
</style>