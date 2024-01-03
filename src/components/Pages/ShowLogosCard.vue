<template>
    <!-- DISNEY -->
    <section id="show-disney-card" v-if="store.selectedLogosCard === 'disney-card-logos'" class="section-card">
        <div class="py-5 container-fluid">
            <!-- BUTTON -->
            <div @click="store.selectedLogosCard = null">
                <span v-if="store.showLogosCard" @click="store.showCardWrapper = true">
                    <i class="cp fs-1 fa-solid fa-left-long border px-2 rounded rounded-2"
                        @click="store.showLogosCard = false"></i>
                </span>
            </div>
            <!--  -->
        </div>
        <HorizontalCard title="Film Disney" :resultList="store.disneyMoviesArr" />
        <HorizontalCard title="Seris Disney" :resultList="store.disneySeriesArr" />
        <HorizontalCard title="Raccomandati per te" :resultList="store.PopularmovieArr" />
    </section>
    <!-- PIXAR -->
    <section id="show-pixar-card" v-if="store.selectedLogosCard === 'pixar-card-logos'" class="section-card">
        <div class="py-5 container-fluid">
            <!-- BUTTON -->
            <div @click="store.selectedLogosCard = null">
                <span v-if="store.showLogosCard" @click="store.showCardWrapper = true">
                    <i class="cp fs-1 fa-solid fa-left-long border px-2 rounded rounded-2"
                        @click="store.showLogosCard = false"></i>
                </span>
            </div>
            <!--  -->
        </div>
        <HorizontalCard title="Film Pixar" :resultList="store.pixarMoviesArr" />
        <HorizontalCard title="Seris Pixar" :resultList="store.pixarSeriesArr" />
        <HorizontalCard title="Raccomandati per te" :resultList="store.PopularmovieArr" />
    </section>
    <!-- MARVEL -->
    <section id="show-marvel-card" v-if="store.selectedLogosCard === 'marvel-card-logos'" class="section-card">
        <h1>MARVEL</h1>
    </section>
    <!-- STAR WARS -->
    <section id="show-starwars-card" v-if="store.selectedLogosCard === 'starwars-card-logos'" class="section-card">
        <h1>star wars</h1>
    </section>
    <!-- NATIONAL GEOGRAPHIC -->
    <section id="show-national-card" v-if="store.selectedLogosCard === 'national-card-logos'" class="section-card">
        <h1>national</h1>
    </section>
    <!-- STAR -->
    <section id="show-star-card" v-if="store.selectedLogosCard === 'star-card-logos'" class="section-card">
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
.container-fluid {
    padding-top: 100px !important;
}

#show-disney-card {
    background-image: url(../../../public/images/disney-logos-card.gif);
}

#show-pixar-card {
    background-image: url(../../../public/images/);
}

#show-marvel-card {
    background-image: url(../../../public/images/marvel-logos-card.gif);
}

.section-card {
    background-repeat: no-repeat;
    background-size: 100%;
    background-size: cover;
    background-position: center;
    height: 90vh;
}
</style>