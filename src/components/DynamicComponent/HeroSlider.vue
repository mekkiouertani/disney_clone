<template>
    <section id="hero-slider">
        <Carousel :autoplay="4000" :items-to-show="1.1" :wrapAround="true" :transition="500" pauseAutoplayOnHover="true"
            id="main-slide">
            <Slide v-for="slide in  store.WeekmovieArr " :key="slide" id="slide">
                <div class="carousel-slide  cp">
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
        Pagination
    },
    data() {
        return {
            store,
        };
    }
}

</script>

<style lang="scss" scoped>
@use '../../../src/assets/style/partials/variables' as *;

#hero-slider {
    height: 300px;

    .carousel-slide {
        width: 100%;
        max-height: 600px;
        border-radius: 10px;
        overflow: hidden;
        margin: 0 20px;
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
</style>