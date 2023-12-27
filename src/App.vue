<template>
  <NavbarHeader />
  <CardWrapper />
</template>

<script>
import NavbarHeader from "./components/NavbarHeader.vue";
import CardWrapper from "./components/CardWrapper.vue";

import { store } from './store.js'
import axios from 'axios'

export default {
  name: "App",
  data() {
    return {store};
  },
  methods:{
    getPopularOfWeek() {
      axios
        .get( store.BaseAPI + store.endPoint.popularOfWeek , { params: store.params })
        .then((response) => {
          //populate the array  store.WeekmovieArr  fpor request
          store.WeekmovieArr = response.data.results;
          console.log(store.WeekmovieArr);
        }
        )
    },
  },
  created(){
    this.getPopularOfWeek();
  },
  
  components: { NavbarHeader, CardWrapper },
};
</script>

<style lang="scss" scoped></style>
