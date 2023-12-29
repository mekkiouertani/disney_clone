<template>
    <section id="hero-slider">

        <Carousel :autoplay="4000" :items-to-show="1.1" :wrapAround="true" :transition="500" pauseAutoplayOnHover="true"
            id="main-slide">
            <Slide v-for="slide in  store.WeekmovieArr " :key="slide" id="slide">
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


                        })
                        .catch((tvError) => {
                            console.error("Errore nella richiesta della serie TV:", tvError);
                        });
                })
                .finally(() => {
                    this.store.showCard = true;
                })

        }
    },
}


</script>

<style lang="scss" scoped>
@use '../../../src/assets/style/partials/variables' as *;

#hero-slider {


    .carousel-slide {
        width: 100%;
        max-height: 600px;
        border-radius: 10px;
        overflow: hidden;
        margin: 0 1%;
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