<template>
  <NavbarHeader />
  <ShowCard v-if="store.showCard" />
  <ShowSearch v-if="store.showSearch" />
  <ShowLogosCard v-if="!store.showCard" />
  <CardWrapper v-if="!store.showCard && !store.showSearch" />
</template>

<script>
import ShowSearch from "./components/Pages/ShowSearch.vue";
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

  },

  components: { NavbarHeader, CardWrapper, ShowCard, ShowLogosCard, ShowSearch },
};
</script>

<style lang="scss" scoped></style>
