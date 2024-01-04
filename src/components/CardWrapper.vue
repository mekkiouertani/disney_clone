<template>
    <section id="card-wrapper">
        <HeroSlider v-if="store.showSearch" />
        <LogosCard  v-if="store.showSearch"/>
        <HorizontalCard title="Raccomandati per te" :resultList="store.PopularmovieArr" v-if="store.showSearch" />
        <HorizontalCard v-if="store.showSearch" />
        <PosterCard  v-if="store.showSearch"/>
        <HorizontalCard v-if="store.showSearch" />
        <HorizontalCard  v-if="store.showSearch"/>
    </section>
</template>

<script>
import { store } from "./../data/store.js";
import HeroSlider from './DynamicComponent/HeroSlider.vue';
import LogosCard from './DynamicComponent/LogosCard.vue';
import HorizontalCard from './DynamicComponent/HorizontalCard.vue';
import PosterCard from './DynamicComponent/PosterCard.vue';
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
        PosterCard
    },
}
</script>

<style lang="scss" scoped>
#card-wrapper {
    margin-top: 100px;
}
</style>