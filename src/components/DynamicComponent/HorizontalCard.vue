<template>
    <div class="mt-5">
        <h4 class="container-fluid text-white small-section-title mb-3">{{ title }}</h4>
        <section id="card-slider" class="">
            <Carousel v-bind="settings" :wrapAround="true" :transition="500" pauseAutoplayOnHover="true"
                :breakpoints="breakpoints" id="main-slide">
                <Slide v-for="slide in  resultList " :key="slide" class="slide">
                    <div class="carousel-slide cp">
                        <div class="box-image">
                            <img :src="'https://image.tmdb.org/t/p/w300' + slide.backdrop_path" :alt="slide.name">
                        </div>
                    </div>
                </Slide>
            </Carousel>
        </section>
    </div>
</template>

<script>
import { store } from "../../data/store.js";
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css';

export default {
    name: "HorizontalCard",
    props: {
        title: String,
        resultList: Object
    },
    components: {
        Carousel,
        Slide,
        Navigation,
        Pagination
    },
    data() {
        return {
            store,
            settings: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            breakpoints: {
                1660: {
                    itemsToShow: 5.5,
                    snapAlign: 'center',
                },
                1024: {
                    itemsToShow: 5.5,
                    snapAlign: 'center',
                },
                768: {
                    itemsToShow: 3.3,
                    snapAlign: 'center',
                },
                500: {
                    itemsToShow: 3.3,
                    snapAlign: 'center',
                },
                400: {
                    itemsToShow: 1.05,
                    snapAlign: 'center',
                },
            },
        }
    },
}


</script>

<style lang="scss" scoped>
@use '../../../src/assets/style/partials/variables' as *;

#card-slider {
    .small-section-title {
        margin-bottom: 40px;
        padding-left: 200px;
        font-size: 2em;
    }

    .slide {
        margin-right: 0 19% !important;

    }

    .carousel-slide {
        min-width: 200px;
        border-radius: 10px;
        overflow: hidden;
        // margin: 0 0.4% 0 0.4%;
        box-shadow: $shadow-box;
        aspect-ratio: 16/9;
        max-height: 300px !important;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

    }


}
@media screen and (min-width: 1300px) {
    .carousel-slide{
        min-width: 90% !important;
        margin: 50px;
    }
}

@media screen and (min-width: 1200px) {
    .carousel-slide {
        min-width: 90% !important;
        margin: 20px;
    }
}
@media screen and (min-width: 1024px) {
    .carousel-slide {
        min-width: 90% !important;
        margin: 10px;
    }
}

@media screen and (min-width: 768px) {
    .carousel-slide {
        min-width: 90% !important;
        margin: 7px;
    }
}

@media screen and (min-width: 500px) {
    .carousel-slide {
        min-width: 90% !important;
        margin: 7px;
    }
}

@media screen and (min-width: 400px) {
    .carousel-slide {
        min-width: 90% !important;
        margin: 7px;
    }
}
</style>