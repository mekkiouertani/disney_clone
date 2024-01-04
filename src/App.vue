<template>
  <IntroComponent v-if="introisHidden === true" />
  <section v-else-if="!introisHidden">
    <NavbarHeader />
    <LoaderComponent v-if="store.PopularmovieArr.length <= 0" />
    <div v-else-if="store.PopularmovieArr.length >= 0">
      <ShowCard v-if="store.showCard" />
      <ShowSearch v-if="store.showSearch" />
      <ShowLogosCard v-if="!store.showCard" />
      <CardWrapper v-if="!store.showCard && !store.showSearch" />
    </div>
  </section>
</template>

<script>
import IntroComponent from "./components/partials/IntroComponent.vue";
import LoaderComponent from "./components/partials/LoaderComponent.vue";
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
    return {
      store,
      introisHidden: true,
    }
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
  mounted() {
    setTimeout(() => {
      this.introisHidden = false;
    }, 1500);
  },
  created() {
    this.getPopularOfWeek(),
      this.getCredits(),
      this.getPopularMovie();

  },

  components: { IntroComponent, NavbarHeader, CardWrapper, ShowCard, ShowLogosCard, ShowSearch, LoaderComponent },
};
</script>

<style lang="scss" scoped></style>
