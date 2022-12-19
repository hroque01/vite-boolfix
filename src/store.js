import { reactive } from 'vue';

export const store = reactive({
    movieList: [],
    apiUrlPopular: 'https://api.themoviedb.org/3/movie/popular?api_key=522861649f05e7c665d948d440bca0ff'
})