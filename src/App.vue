<template>

  <Transition name="slide-fade">
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
  </Transition>

</template>

<script>
import IntroComponent from "./components/partials/IntroComponent.vue";
import LoaderComponent from "./components/partials/LoaderComponent.vue";
import ShowSearch from "./components/Pages/ShowSearch.vue";
import NavbarHeader from "./components/NavbarHeader.vue";
import CardWrapper from "./components/CardWrapper.vue";

import { store } from './data/store.js';
import axios from 'axios';
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

    /* -------------- */
    getPopularOfWeek() {
      axios
        .get(store.BaseAPI + store.endPoint.popularOfWeek, { params: store.params })
        .then((response) => {
          //populate the array  store.WeekmovieArr  for request
          store.WeekmovieArr = response.data.results;
          console.log(`week`, store.WeekmovieArr);
          
        })
      /* ------------ */

    },
    /**
     * funzione che, dato l'id della slide corrente, 
     * popola un nuovo array associatico chon degli oggetti contenenti il path del logo del network e l'id del film/serie tv
     */
    getIdSlide() {
      store.WeekmovieArr.forEach((movie) => {
        
        axios
          .get(store.BaseAPI + "movie/" + movie.id, { params: store.params })
          .then((res) => {
            console.log("response id", res.data);
            //building the data that I want to visualize
            if(res.data.networks){
              let arrayAndLogo = {
                id: res.data.id,
                logo_path: res.data.networks.logo_path
              }

              store.mainArr.push(arrayAndLogo);
            } else {
              console.log('not available');
            }
           
          })
          .catch((error) => {
            axios
              .get(store.BaseAPI + "tv/" + movie.id, { params: this.store.params })
              .then((tvRes) => {
                // console.log(`tv id`, tvRes.data);
                if(tvRes.data.networks){
                  let arrayAndLogo = {
                    id: tvRes.data.id,
                    logo_path: tvRes.data.networks[0].logo_path
                  }
                  
                  store.mainArr.push(arrayAndLogo);
                } else {
                  console.log('not available');
                }
                //this.store.mainArr.push(tvRes.data.networks)
                //console.log(`series`, this.store.mainArr);
              })
              .catch((tvError) => {
                console.error("Errore nella richiesta della serie TV:", tvError);
              });
          })
      });


      
    },
    
    
    /* ------------------ */
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
    /**
     * aggiunge informazioni della crew al credits del movie o della serie tv 
     */
    getCredits() {
      axios
        .get(store.BaseAPI + store.endPoint.creditsTV + store.movieID + store.endPoint.endCreditsTV, { params: store.params })
        .then((response) => {
          //populate the array  store.CreditsArr  for request
          store.CreditsArr = response.data.crew
          console.log(store.CreditsArr);
        }
        )
    },

    
  },
  mounted() {

    setTimeout(() => {
      this.introisHidden = false;
    }, 1500);
    setTimeout(() => {
      this.getIdSlide();
      console.log(`mainArr`, store.mainArr);
    }, 1000);
    // this.getIdSlide();
  },
  created() {
    this.getPopularOfWeek(),
      this.getCredits(),
      this.getPopularMovie();
      

  },


  components: { IntroComponent, NavbarHeader, CardWrapper, ShowCard, ShowLogosCard, ShowSearch, LoaderComponent },

};
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
</style>

