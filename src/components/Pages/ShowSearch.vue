<template>
    <section id="show-search">
        <input type="search" placeholder="Titolo, personaggio o genere" class="new-input fw-semibold shadow"
            v-model="textInput" @keyup.enter="searchResults">
        <h6 class="text-light">Esplora</h6>
        <div class="container-fluid mt-5">
            <div class="row row-cols-sm-4 row-cols-lg-5  row-cols-3 gy-3" @click="">
                <div v-for="item in changeArr" :key="item.id"
                    @click="getInfoSlide(item), store.showCard = true, store.showSearch = false">
                    <div class="search-logos-card" id="disney-card-logos"
                        @click="store.showCardWrapper = false, store.selectedLogosCard = null">
                        <div class="box-logo" @click=" getCardId(slide.id)">
                            <img :src="store.imgOriginalPath + item.poster_path" :alt="item.original_name"
                                class=" inverted-color  w-100     ">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { store } from '@/data/store'
import axios from 'axios';

export default {
    name: "ShowSearch",
    data() {
        return {
            store,
            textInput: '',
            popular: []
        };
    },

    methods: {
        async searchResults() {
            if (this.textInput.replace(' ', '') !== '') {
                this.store.params.query = this.textInput;

                const urlSeries = this.store.BaseAPI + this.store.endPoint.searchSeries;
                const urlMovies = this.store.BaseAPI + this.store.endPoint.searchMovies;

                try {
                    const [searchSeriesArray, searchMoviesArray] = await Promise.all([
                        axios.get(urlSeries, { params: this.store.params }),
                        axios.get(urlMovies, { params: this.store.params })
                    ]);


                    // Concatenati i risultati delle serie TV e dei film
                    this.store.SearchMovieSerie = [...searchSeriesArray.data.results, ...searchMoviesArray.data.results];

                    // Ripristinato il parametro query a vuoto solo se entrambe le richieste sono riuscite
                    this.store.params.query = '';

                } catch (error) {
                    console.error('Errore durante la ricerca:', error);
                }
            } else if (this.textInput === '') {
                this.store.SearchMovieSerie = this.store.PopularmovieArr
            }
        },

        getCardId(id) {
            axios
                .get(store.BaseAPI + "movie/" + id, { params: this.store.params })
                .then((res) => {
                    this.store.IdInfoCard = res.data;
                    console.log('movie');
                    console.log(this.store.IdInfoCard);
                    this.getCastById(this.store.IdInfoCard.id, true);
                })
                .catch((error) => {
                    axios
                        .get(store.BaseAPI + "tv/" + id, { params: this.store.params })
                        .then((tvRes) => {
                            // console.log(`tv id`, tvRes.data);
                            this.store.IdInfoCard = tvRes.data;
                            console.log('series');
                            console.log(this.store.IdInfoCard);
                            this.getCastById(this.store.IdInfoCard.id, false);

                        })
                        .catch((tvError) => {
                            console.error("Errore nella richiesta della serie TV:", tvError);
                        });
                })
                .finally(() => {
                    this.store.showCard = true; //non funge
                })
        },
        /* oltre all'id che prendiamo con la funzione getCardId, passiamo anche l'intero oggetto in un nuovo array
        in modo che alcuni dati possiamo prenderli dall'array generato tramite id specifico del movie, 
        che dall'array che restituisce 20 titoli */
        getInfoSlide(slide) {
            this.store.SlideInfo = slide;
        }

    },
    computed: {
        // Scambia i film popolari solo se si cerca obbietivamente qualcosa
        changeArr() {
            return this.textInput === '' ? store.PopularmovieArr : this.store.SearchMovieSerie
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../../../src/assets/style/partials/variables' as *;
@import 'bootstrap/scss/mixins';



.new-input {
    position: fixed;
    left: 0px;
    top: 0px;
    background: linear-gradient(180deg, rgba(52, 55, 66, 1) 29%, rgba(112, 198, 183, 0) 97%, rgba(118, 208, 192, 0) 97%);
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    outline: none;
    text-overflow: ellipsis;
    z-index: calc(9);
    border: none;
    background-color: rgb(75, 78, 90);
    color: rgb(168, 169, 173);
    height: 60px;
    padding-left: calc(3.5vw + 24px);
    width: 100vw;
    font-size: 32px;
    letter-spacing: .11px;
    line-height: 1.2;
    margin-top: 80px;
    padding-top: 3rem;
    padding-bottom: 3rem;
    padding-top: 2rem;
    padding-bottom: 2rem;

    &:focus {
        background-color: rgb(98, 102, 118);
        border-bottom: none;
        outline: none;
    }

    &:focus::placeholder {
        color: rgb(249, 249, 249);

    }
}

h6 {
    margin-top: 200px;
    padding: 0 5.5%;
}

.search-logos-card {
    // overflow: hidden;
    border-radius: 5px;
    position: relative;
    box-shadow: $shadow-box;
    background-color: $logos-card;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    aspect-ratio: 16/9;

    &:hover {
        transform: scale(1.1);
        border: 5px solid white;
    }

    ;
}

@media screen and (min-width: 600px) {

    .search-logos-card {
        overflow: hidden;
    }

    .new-input {
        padding-top: 3rem !important;
        padding-bottom: 3rem !important;
        font-size: 42px !important;
    }
}
</style>