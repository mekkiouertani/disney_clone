<template>
    <div class="container-fluid mt-5">
        <div class="text-white small-section-title ">{{ title }}</div>
        <section id="card-slider" class="">
        
            

            <Carousel :items-to-show="itemsToShow"  :wrapAround="false" :transition="500" pauseAutoplayOnHover="true" id="main-slide">
              
                <Slide v-for="slide in  resultList " :key="slide">
                    <div class="carousel-slide  cp">
                        <div class="box-image"><img :src="'https://image.tmdb.org/t/p/w300' + slide.backdrop_path" :alt="slide.name"></div>
                    </div>
                </Slide>
                
                
            </Carousel>
        </section>
    </div>
</template>

<script>
import { store } from "../../data/store.js";
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css';

export default {
    name: "HorizontalCard",
    props:{
        title: String,
        resultList: Object
    },
    components: {
        Carousel,
        Slide,
        Navigation,
        Pagination
    },
    data() {
        
        return {
            store,
            itemsToShow: 5.4
        }
    },
    methods: {
        updateSettingsBasedOnMediaQuery() {
        // Check the media query status and update settings accordingly
            if (window.matchMedia('(min-width: 1024px)').matches) {
                this.itemsToShow = 6;

            } else if (window.matchMedia('(min-width: 700px)').matches) {
                this.itemsToShow = 3.8;

            } else {
                // Default settings for smaller screens
                this.itemsToShow = 2.7;
            }
        }
    },
    created() {
        this.updateSettingsBasedOnMediaQuery();
    }
  
    
}
    

</script>

<style lang="scss" scoped>
@use '../../../src/assets/style/partials/variables' as *;
#card-slider{
    .small-section-title{
        margin-bottom: 40px;
        padding-left: 200px;
        font-size: 2em;
    }
    
    .carousel-slide {
        width: 100%;
        max-height: 600px;
        border-radius: 10px;
        overflow: hidden;
        margin: 0 20px;
        box-shadow: $shadow-box;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
        }

    }

    .pagination {
        position: absolute;
        z-index: 5;
        bottom: 30px;
        right: 170px;
        filter: invert(1);
    }
}

</style>