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
import HeroSlider from './DynamicComponent/HeroSlider.vue';
import LogosCard from './DynamicComponent/LogosCard.vue';
import HorizontalCard from './DynamicComponent/HorizontalCard.vue';
import PosterCard from './DynamicComponent/PosterCard.vue';
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