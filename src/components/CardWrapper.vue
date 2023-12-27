<template>
    <HeroSlider />
    <LogosCard />
    <HorizontalCard />
    <HorizontalCard />
    <PosterCard />
    <HorizontalCard />
    <HorizontalCard />
</template>

<script>
import HeroSlider from './CardsComponent/HeroSlider.vue';
import LogosCard from './CardsComponent/LogosCard.vue';
import HorizontalCard from './CardsComponent/HorizontalCard.vue';
import PosterCard from './CardsComponent/PosterCard.vue';
export default {
    name: "CardWrapper",
    data() {
        return {};
    },
    components: {
        HeroSlider,
        LogosCard,
        HorizontalCard,
        PosterCard
    },
}
</script>

<style lang="scss" scoped></style>