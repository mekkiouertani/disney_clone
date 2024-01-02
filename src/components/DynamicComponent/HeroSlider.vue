<template>
    <section id="hero-slider">
        <Carousel :autoplay="4000" :items-to-show="1.1" :wrapAround="true" :transition="500" pauseAutoplayOnHover="true"
            id="main-slide" @click="store.showCard = true">
            <Slide v-for="slide in  store.WeekmovieArr " :key="slide" class="slide" @click="getInfoSlide(slide)">
                <div class="carousel-slide  cp" @click="getCardId(slide.id)">
                    <div class="box-image"><img :src="store.imgOriginalPath + slide.backdrop_path" :alt="slide.name"></div>
                </div>
            </Slide>
            <template #addons>
                <pagination class="pagination" />
            </template>
        </Carousel>
    </section>
</template>
<script>
import axios from 'axios';
import { store } from '../../data/store.js';
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css';
export default {
    name: 'HeroSlider',
    props: {
        img: String,
    },
    components: {
        Carousel,
        Slide,
        Navigation,
        Pagination,
    },
    data() {
        return {
            store,
        };
    },
    methods: {
        getCardId(id) {
            axios
                .get(store.BaseAPI + "movie/" + id, { params: this.store.params })
                .then((res) => {
                    // console.log(`movie id`, res.data);
                    this.store.IdInfoCard = res.data;
                    console.log('movie');
                    console.log(this.store.IdInfoCard);

                    // Verifica se l'array è ancora vuoto
                    //if (this.store.IdInfoCard.success === false) {
                    // Se è vuoto, effettua la seconda chiamata

                    //}
                    this.getCastById(this.store.IdInfoCard.id, true);

                })
                .catch((error) => {
                    //console.error("Errore nella richiesta del film:", error);
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
                    // this.store.showCard = true;
                })

        },
        /**
         * dato un movie o una seri, fa unaa chaimata axios e prende gli attori che hanno partecipato a tale filem e li 
         * carica nello store 
         * @param {int} id 
         * @param {boolean} ismovie 
         */
        getCastById(id, ismovie) {
            let midquery = ismovie ? store.endPoint.creditsMovie : store.endPoint.creditsTV;
            let url = store.BaseAPI + midquery + id + '/credits'
            axios
                .get(url, { params: this.store.params })
                .then((res) => {
                    this.store.IdInfoCard.cast = res.data.cast;
                })

        },
        getInfoSlide(slide) {
            this.store.SlideInfo = slide;
        }
    },
}


</script>

<style lang="scss" scoped>
@use '../../../src/assets/style/partials/variables' as *;

#hero-slider {

    .carousel-slide {
        width: 98%;
        max-height: 400px;
        border-radius: 10px;
        overflow: hidden;
        margin: 0 0.4% 0 0.4%;
        box-shadow: $shadow-box;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
        }

    }

    .pagination {
        position: absolute;
        z-index: 5;
        bottom: 30px;
        right: 170px;
        filter: invert(1);
    }
}

@media screen and (max-width: 1140px) {
    .pagination {
        right: 100px !important;
    }
}

@media screen and (max-width: 600px) {
    .pagination {
        right: 50px !important;
    }
}
</style>