<template>
    <section id="hero-slider" class="container-fluid">
        <Carousel :items-to-show="2.5" :wrap-around="true" class="mt-5">
            <Slide v-for="slide in 10" :key="slide">
                <div class="carousel__item">{{ slide }}</div>
            </Slide>
            <template #addons>
                <Navigation />
            </template>
        </Carousel>
    </section>
</template>
<script>
import { store } from '../../data/store.js';
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css';
export default {
    name: 'HeroSlider',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data() {
        return {
            store,
        };
    }
}

</script>

<style lang="scss" scoped>
#hero-slider {
    color: white;
}
</style>