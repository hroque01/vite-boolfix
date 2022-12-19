<script>
export default {
    name: 'SingleFilm',
    props: ['info'],
}
</script>

<template>
    <div>
        <!-- template di card singola -->
        <img :src="`https://image.tmdb.org/t/p/w200/${info.poster_path}`" alt="">
        <div>Titolo: {{ info.title }}</div>
        <div>Titolo Originale: {{ info.original_title }}</div>
        <div>Info2</div>
    </div>
</template>

<style lang="scss">
@use "../styles/partials/variables.scss" as *;
</style>