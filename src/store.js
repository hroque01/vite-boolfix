import { reactive } from 'vue';

export const store = reactive({
    movieList: [],
    apiUrl: 'https://api.themoviedb.org/3/movie/550?api_key=522861649f05e7c665d948d440bca0ff'
})