<script>
export default {
    name: 'SingleFilm',
    props: ['info'],
    data() {
        return {
            hover: false,
            // Array of flags
            flags: [
                {
                    img: 'img/france.png',
                    lang: "fr"
                },
                {
                    img: 'img/german-flag.png',
                    lang: "de"
                },
                {
                    img: 'img/italy.png',
                    lang: "it"
                },
                {
                    img: 'img/united-kingdom.png',
                    lang: "en"
                },
                {
                    img: 'img/spain.png',
                    lang: "es"
                },
                {
                    img: 'img/rainbow.png',
                    lang: ""
                },
            ]
        }
    },
    computed: {
        flagEmoji() {

            for (let i = 0; i < this.flags.length; i++) {
                if (this.flags[i].lang.includes(this.info.original_language)) {
                    return this.flags[i].img
                }
            }
            return this.flags[this.flags.length - 1].img
        },
        rateFilm() {
            return Math.round(this.info.vote_average / 2);
        }
    }
}   
</script>

<template>
    <div @mouseover="true" @mouseleave="false">
        <!-- Cards -->
        <div class="cards">
            <img :src="`https://image.tmdb.org/t/p/w200/${info.poster_path}`" alt="">
        </div>

        <!-- Details of card -->
        <div class="details" v-if="hover">
            <!-- template di card singola -->
            <div>Titolo: {{ info.title }}</div>
            <div>Titolo Originale: {{ info.original_title }}</div>

            <!-- Flags -->
            <!-- se nel loop, il flag nell'array include original_langue allora RETURN l'array immagine in base al lang (PS. il lang dell'array deve essere uguale al lang dell'API) -->
            <div class="flags">
                <span> Language:</span>
                <img :src="flagEmoji" alt="">
            </div>

            <!-- Stars [ star in rateFilm ( nella quale il voto da 10 diventa 5)] -->
            <div class="stars">
                <span>Voto:</span>

                <div v-for="star in rateFilm">
                    <font-awesome-icon icon="fa-solid fa-star" />
                </div>

                <div v-for="star in 5 - rateFilm">
                    <font-awesome-icon icon="fa-solid fa-star" />
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss">
@use "../styles/partials/variables.scss" as *;

.cards {
    width: 200px;
}

.flags {
    img {
        width: 50px;
    }
}
</style>