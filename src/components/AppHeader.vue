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
    <h1>
        {{ title }}
    </h1>
    <div>
        <input type="text" v-model="store.searchFilm">
        <button type="submit" @click.prevent="$emit('search')">Search</button>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;
</style>