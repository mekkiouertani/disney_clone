<template>

    <Transition name="slide-fade">
        <section id="card-wrapper" v-if="store.showCardWrapper">
            <HeroSlider />
            <LogosCard />
            <HorizontalCard title="Raccomandati per te" :resultList="store.PopularmovieArr" />
            <HorizontalCard title="Raccomandati per te" :resultList="store.starMoviesArr" />
            <PosterCard />
            <HorizontalCard title="Raccomandati per te" :resultList="store.starMoviesArr" />
            <HorizontalCard title="Raccomandati per te" :resultList="store.starSeriesArr" />
            <FooterComponent />
        </section>
    </Transition>

</template>

<script>
import { store } from "./../data/store.js";
import HeroSlider from './DynamicComponent/HeroSlider.vue';
import LogosCard from './DynamicComponent/LogosCard.vue';
import HorizontalCard from './DynamicComponent/HorizontalCard.vue';
import PosterCard from './DynamicComponent/PosterCard.vue';
import FooterComponent from "./partials/FooterComponent.vue";
export default {
    name: "CardWrapper",
    data() {
        return {
            store,
        };
    },
    components: {

        HeroSlider,
        LogosCard,
        HorizontalCard,
        PosterCard,
        FooterComponent
    },

}

</script>

<style lang="scss" scoped>
#card-wrapper {
    margin-top: 100px;
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(20px);
    opacity: 0;
}
</style>