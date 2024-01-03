<template>
  <NavbarHeader />
  <ShowCard v-if="store.showCard" />

  <ShowLogosCard v-if="!store.showCard" />
  <CardWrapper v-if="!store.showCard" />
</template>

<script>
import NavbarHeader from "./components/NavbarHeader.vue";
import CardWrapper from "./components/CardWrapper.vue";

import { store } from './data/store.js'
import axios from 'axios'
import ShowCard from "./components/Pages/ShowCard.vue";
import ShowLogosCard from "./components/Pages/ShowLogosCard.vue";

export default {
  name: "App",
  data() {
    return { store };
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
        )
    },
    checkInfoPopulated() {
      if (store.IdInfoCard.id !== null) {
        return true;
      }
      return false;
    },
    getPopularOfWeek() {
      axios
        .get(store.BaseAPI + store.endPoint.popularOfWeek, { params: store.params })
        .then((response) => {
          //populate the array  store.WeekmovieArr  for request
          store.WeekmovieArr = response.data.results;
          console.log(store.WeekmovieArr);
        }
        )
    },
    getPopularMovie() {
      axios
        .get(store.BaseAPI + store.endPoint.popularMovie, { params: store.params })
        .then((response) => {
          //populate the array  store.PopularmovieArr  for request
          store.PopularmovieArr = response.data.results;
          console.log(store.PopularmovieArr);
        }
        )
    },
    getCredits() {
      axios
        .get(store.BaseAPI + store.endPoint.creditsTV + store.movieID + store.endPoint.endCreditsTV, { params: store.params })
        .then((response) => {
          //populate the array  store.CreditsArr  for request
          store.CreditsArr = response.data.crew;
          console.log(store.CreditsArr);
        }
        )
    },
  },
  created() {
    this.getPopularOfWeek(),
      this.getCredits(),
      this.getPopularMovie();
    this.getShowLogosCard();
  },

  components: { NavbarHeader, CardWrapper, ShowCard, ShowLogosCard },
};
</script>

<style lang="scss" scoped></style>
