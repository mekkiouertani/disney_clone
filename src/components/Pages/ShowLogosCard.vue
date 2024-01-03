<template>
    <!-- BUTTON -->
    <div @click="store.selectedLogosCard = null">
        <span v-if="store.showLogosCard" @click="store.showCardWrapper = true">
            <i class="cp fs-1 fa-solid fa-left-long border px-2 rounded rounded-2 mt-5 p-5"
                @click="store.showLogosCard = false"></i>
        </span>
    </div>
    <!--  -->
    <!-- DISNEY -->
    <section id="show-disney-card" v-if="store.selectedLogosCard === 'disney-card-logos'">
        <h1>disney</h1>
        <p>lorem200</p>
        <HorizontalCard title="Raccomandati per te" :resultList="store.PopularmovieArr" />
    </section>
    <!-- PIXAR -->
    <section id="show-pixar-card" v-if="store.selectedLogosCard === 'pixar-card-logos'">
        <h1>PIXAR</h1>
    </section>
    <!-- MARVEL -->
    <section id="show-marvel-card" v-if="store.selectedLogosCard === 'marvel-card-logos'">
        <h1>MARVEL</h1>
    </section>
    <!-- STAR WARS -->
    <section id="show-starwars-card" v-if="store.selectedLogosCard === 'starwars-card-logos'">
        <h1>star wars</h1>
    </section>
    <!-- NATIONAL GEOGRAPHIC -->
    <section id="show-national-card" v-if="store.selectedLogosCard === 'national-card-logos'">
        <h1>national</h1>
    </section>
    <!-- STAR -->
    <section id="show-star-card" v-if="store.selectedLogosCard === 'star-card-logos'">
        <h1>star original</h1>
    </section>
</template>

<script>
import HorizontalCard from '../DynamicComponent/HorizontalCard.vue';
import { store } from '../../data/store.js';
export default {
    name: "ShowLogosCard",
    data() {
        return {
            store,
        };
    },

    components: { HorizontalCard }
}
</script>

<style lang="scss" scoped>
#show-logo-card {
    margin-top: 100px;

}

h1 {
    margin-top: 150px;
    font-size: 300px;
}
</style>