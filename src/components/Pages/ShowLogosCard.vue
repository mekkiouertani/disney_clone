<template>
    <!-- DISNEY -->
    <Transition name="slide-fade">
        <section id="show-disney-card" v-if="store.selectedLogosCard === 'disney-card-logos'" class="section-card ">
            <div class="py-5 container-fluid">
                <!-- BUTTON -->
                <div @click="store.selectedLogosCard = null" class="back-button">
                    <span v-if="store.showLogosCard" @click="store.showCardWrapper = true">
                        <i class="cp fs-1 fa-solid fa-left-long border px-2 rounded rounded-2"
                            @click="store.showLogosCard = false"></i>
                    </span>
                </div>
                <!--  -->
            </div>
            <div class="component-wrapper">
                <HorizontalCard title="Film Disney" :resultList="store.disneyMoviesArr" />
                <HorizontalCard title="Series Disney" :resultList="store.disneySeriesArr" />
                <HorizontalCard title="Raccomandati per te" :resultList="store.PopularmovieArr" />
            </div>
            <FooterComponent />

        </section>
    </Transition>
    <!-- PIXAR -->
    <Transition name="slide-fade">
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
            <div class="component-wrapper">
                <HorizontalCard title="Film Pixar" :resultList="store.pixarMoviesArr" />
                <HorizontalCard title="Series Pixar" :resultList="store.pixarSeriesArr" />
                <HorizontalCard title="Raccomandati per te" :resultList="store.PopularmovieArr" />
            </div>
            <FooterComponent />
        </section>
    </Transition>
    <!-- MARVEL -->
    <Transition name="slide-fade">
        <section id="show-marvel-card" v-if="store.selectedLogosCard === 'marvel-card-logos'" class="section-card">
            <div class="py-5 container-fluid">
                <!-- BUTTON -->
                <div @click="store.selectedLogosCard = null" class="back-button">
                    <span v-if="store.showLogosCard" @click="store.showCardWrapper = true">
                        <i class="cp fs-1 fa-solid fa-left-long border px-2 rounded rounded-2"
                            @click="store.showLogosCard = false"></i>
                    </span>
                </div>
                <!--  -->
            </div>
            <div class="component-wrapper">
                <HorizontalCard title="Film Marvel" :resultList="store.marvelMoviesArr" />
                <HorizontalCard title="Series Marvel" :resultList="store.marvelSeriesArr" />
                <HorizontalCard title="Raccomandati per te" :resultList="store.PopularmovieArr" />
            </div>
            <FooterComponent />
        </section>
    </Transition>
    <!-- STAR WARS -->
    <Transition name="slide-fade">
        <section id="show-starwars-card" v-if="store.selectedLogosCard === 'starwars-card-logos'" class="section-card">
            <div class="py-5 container-fluid">
                <!-- BUTTON -->
                <div @click="store.selectedLogosCard = null" class="back-button">
                    <span v-if="store.showLogosCard" @click="store.showCardWrapper = true">
                        <i class="cp fs-1 fa-solid fa-left-long border px-2 rounded rounded-2"
                            @click="store.showLogosCard = false"></i>
                    </span>
                </div>
                <!--  -->
            </div>
            <div class="component-wrapper">
                <HorizontalCard title="Film Star Wars" :resultList="store.starwarsMoviesArr" />
                <HorizontalCard title="Series Star Wars" :resultList="store.starwarsSeriesArr" />
                <HorizontalCard title="Raccomandati per te" :resultList="store.PopularmovieArr" />
            </div>
            <FooterComponent />
        </section>
    </Transition>
    <!-- NATIONAL GEOGRAPHIC -->
    <Transition name="slide-fade">
        <section id="show-national-card" v-if="store.selectedLogosCard === 'national-card-logos'" class="section-card">
            <div class="py-5 container-fluid">
                <!-- BUTTON -->
                <div @click="store.selectedLogosCard = null" class="back-button">
                    <span v-if="store.showLogosCard" @click="store.showCardWrapper = true">
                        <i class="cp fs-1 fa-solid fa-left-long border px-2 rounded rounded-2"
                            @click="store.showLogosCard = false"></i>
                    </span>
                </div>
                <!--  -->
            </div>
            <div class="component-wrapper">
                <HorizontalCard title="Film National Geographic" :resultList="store.nationalMoviesArr" />
                <HorizontalCard title="Series National Geographic" :resultList="store.nationalSeriesArr" />
                <HorizontalCard title="Raccomandati per te" :resultList="store.PopularmovieArr" />
            </div>
            <FooterComponent />
        </section>
    </Transition>
    <!-- STAR -->
    <Transition name="slide-fade">
        <section id="show-star-card" v-if="store.selectedLogosCard === 'star-card-logos'" class="section-card">
            <div class="py-5 container-fluid">
                <!-- BUTTON -->
                <div @click="store.selectedLogosCard = null" class="back-button">
                    <span v-if="store.showLogosCard" @click="store.showCardWrapper = true">
                        <i class="cp fs-1 fa-solid fa-left-long border px-2 rounded rounded-2"
                            @click="store.showLogosCard = false"></i>
                    </span>
                </div>
                <!--  -->
            </div>
            <div class="component-wrapper">
                <HorizontalCard title="Film Star Original" :resultList="store.starMoviesArr" />
                <HorizontalCard title="Series Star Original" :resultList="store.starSeriesArr" />
                <HorizontalCard title="Raccomandati per te" :resultList="store.PopularmovieArr" />
            </div>
            <FooterComponent />
        </section>
    </Transition>
</template>

<script>
import axios from 'axios'
import HorizontalCard from '../DynamicComponent/HorizontalCard.vue';
import { store } from '../../data/store.js';
import FooterComponent from '../partials/FooterComponent.vue';
export default {
    name: "ShowLogosCard",
    data() {
        return {
            store,
        };
    },
    methods: {
        getShowLogosCard() {
            /* disney */
            axios
                .get(store.BaseAPI + store.endPoint.searchMovies + "?api_key=2685b6a8f123b29cd4c75c4bd228e18e&language=it-IT&query=disney")
                .then((response) => {
                    for (let i = 0; i < response.data.results.length; i++) {
                        const el = response.data.results[i];
                        if (el.backdrop_path !== null) {
                            store.disneyMoviesArr.push(el)
                        }
                    }
                }
                );
            axios
                .get(store.BaseAPI + store.endPoint.searchSeries + "?api_key=2685b6a8f123b29cd4c75c4bd228e18e&language=it-IT&query=disney")
                .then((response) => {
                    for (let i = 0; i < response.data.results.length; i++) {
                        const el = response.data.results[i];
                        if (el.backdrop_path !== null) {
                            store.disneySeriesArr.push(el)
                        }
                    }
                }
                ),
                /* pixar */
                axios
                    .get(store.BaseAPI + store.endPoint.searchMovies + "?api_key=2685b6a8f123b29cd4c75c4bd228e18e&language=it-IT&query=pixar")
                    .then((response) => {
                        for (let i = 0; i < response.data.results.length; i++) {
                            const el = response.data.results[i];
                            if (el.backdrop_path !== null) {
                                store.pixarMoviesArr.push(el)
                            }
                        }
                    }
                    );
            axios
                .get(store.BaseAPI + store.endPoint.searchSeries + "?api_key=2685b6a8f123b29cd4c75c4bd228e18e&language=it-IT&query=pixar")
                .then((response) => {
                    for (let i = 0; i < response.data.results.length; i++) {
                        const el = response.data.results[i];
                        if (el.backdrop_path !== null) {
                            store.pixarSeriesArr.push(el)
                        }
                    }
                }
                );
            /* marvel */
            axios
                .get(store.BaseAPI + store.endPoint.searchMovies + "?api_key=2685b6a8f123b29cd4c75c4bd228e18e&language=it-IT&query=marvel")
                .then((response) => {
                    for (let i = 0; i < response.data.results.length; i++) {
                        const el = response.data.results[i];
                        if (el.backdrop_path !== null) {
                            store.marvelMoviesArr.push(el)
                        }
                    }
                }
                );
            axios
                .get(store.BaseAPI + store.endPoint.searchSeries + "?api_key=2685b6a8f123b29cd4c75c4bd228e18e&language=it-IT&query=marvel")
                .then((response) => {
                    for (let i = 0; i < response.data.results.length; i++) {
                        const el = response.data.results[i];
                        if (el.backdrop_path !== null) {
                            store.marvelSeriesArr.push(el)
                        }
                    }
                }
                );
            /* starwars */
            axios
                .get(store.BaseAPI + store.endPoint.searchMovies + "?api_key=2685b6a8f123b29cd4c75c4bd228e18e&language=it-IT&query=star wars")
                .then((response) => {
                    for (let i = 0; i < response.data.results.length; i++) {
                        const el = response.data.results[i];
                        if (el.backdrop_path !== null) {
                            store.starwarsMoviesArr.push(el)
                        }
                    }
                }
                );
            axios
                .get(store.BaseAPI + store.endPoint.searchSeries + "?api_key=2685b6a8f123b29cd4c75c4bd228e18e&language=it-IT&query=star wars")
                .then((response) => {
                    for (let i = 0; i < response.data.results.length; i++) {
                        const el = response.data.results[i];
                        if (el.backdrop_path !== null) {
                            store.starwarsSeriesArr.push(el)
                        }
                    }
                }
                );
            /* national */
            axios
                .get(store.BaseAPI + store.endPoint.searchMovies + "?api_key=2685b6a8f123b29cd4c75c4bd228e18e&language=it-IT&query=national geographic")
                .then((response) => {
                    for (let i = 0; i < response.data.results.length; i++) {
                        const el = response.data.results[i];
                        if (el.backdrop_path !== null) {
                            store.nationalMoviesArr.push(el)
                        }
                    }
                }
                );
            axios
                .get(store.BaseAPI + store.endPoint.searchSeries + "?api_key=2685b6a8f123b29cd4c75c4bd228e18e&language=it-IT&query=national geographic")
                .then((response) => {
                    for (let i = 0; i < response.data.results.length; i++) {
                        const el = response.data.results[i];
                        if (el.backdrop_path !== null) {
                            store.nationalSeriesArr.push(el)
                        }
                    }
                }
                );
            /* star */
            axios
                .get(store.BaseAPI + store.endPoint.searchMovies + "?api_key=2685b6a8f123b29cd4c75c4bd228e18e&language=it-IT&query=star")
                .then((response) => {
                    for (let i = 0; i < response.data.results.length; i++) {
                        const el = response.data.results[i];
                        if (el.backdrop_path !== null) {
                            store.starMoviesArr.push(el)
                        }
                    }
                }
                );
            axios
                .get(store.BaseAPI + store.endPoint.searchSeries + "?api_key=2685b6a8f123b29cd4c75c4bd228e18e&language=it-IT&query=star")
                .then((response) => {
                    for (let i = 0; i < response.data.results.length; i++) {
                        const el = response.data.results[i];
                        if (el.backdrop_path !== null) {
                            store.starSeriesArr.push(el)
                        }
                    }
                }
                );
        },
    },
    created() {
        this.getShowLogosCard();
    },
    components: { HorizontalCard, FooterComponent }
}
</script>

<style lang="scss" scoped>
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

.container-fluid {
    padding-top: 100px !important;
}

/* .back-button {
    position: fixed;
} */

#show-disney-card {
    background-image: url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXV4b2Zvb2M3Z2hhcHJ6M2FyYzBpenlhcndoOWswbDN1NHQxMGk0NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d8SMqAtm3D9bYfOtcs/giphy.gif');
}

#show-pixar-card {
    background-image: url('https://i.gifer.com/DRR3.gif');
}

#show-marvel-card {
    background-image: url(../../../public/images/marvel-logos-card.gif);
}

#show-starwars-card {
    background-image: url(../../../public/images//starwars-logos-card.gif);
}

#show-national-card {
    background-image: url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGJ5Z214ZmJsZm0xMTU5d2MzMXA5N2hndnJocWU5ZGFod21nbDh4biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KXtCdH18u5Z7B3ERL8/giphy.gif');
}

#show-star-card {
    background-image: url('https://media1.tenor.com/m/xY-zQHFRpaAAAAAC/star-original-production-star-original.gif');
}

.section-card {
    background-repeat: no-repeat;
    background-size: 100%;
    background-size: cover;
    background-position: bottom;
    height: 90vh;
}

.component-wrapper {
    margin-top: 450px;
}
</style>