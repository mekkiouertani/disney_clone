<template>
    <section id="show-card">
        <!-- IMG BACKGROUND -->
        <div class="box-hero-image position-relative">
            <img class="images" :src="getImage"
                :alt="store.IdInfoCard.name ? store.IdInfoCard.title : store.IdInfoCard.name">
            <div class="bg-shades position-absolute top-0 "></div>
        </div>
        <!-- SECTION POSITION ABSOLUTE SOPRA L'IMMAGINE -->
        <section id="top-info-sections" class="position-absolute container-fluid top-0 ">
            <span @click="store.showCardWrapper = true"><i
                    class="cp fs-1 fa-solid fa-left-long border px-2 rounded rounded-2"
                    @click="store.showCard = false"></i></span>
            <h1 class="mt-5">{{ store.SlideInfo.name || store.SlideInfo.title }}</h1>
            <h6>| {{ store.IdInfoCard.genres[0].name }}</h6>
            <img id="flag" :src="getFlagApi" :alt="store.IdInfoCard.original_language">
            <div id="star">
                <i v-for="n in 5" :key="n" class="fa-star" :class="n <= getRate ? 'fa-solid' : 'fa-regular'"></i>
                <span> su {{ store.SlideInfo.vote_count }} voti.</span>
            </div>
            <p class="mt-3 fs-5 w-50 overview">{{ store.SlideInfo.overview }}</p>
        </section>
        <!-- IMG BACKGROUND BOTTOM -->
        <div class="box-hero-image bottom position-relative">
            <img class="images" :src="getImage"
                :alt="store.IdInfoCard.name ? store.IdInfoCard.title : store.IdInfoCard.name">
            <div class="bg-shades position-absolute top-0 "></div>
        </div>
        <!-- COMPONENTE HORIZONTAL CARD -->
        <HorizontalCard id="horizontal-card" class="position-absolute" title="Raccomandati per te"
            :resultList="store.PopularmovieArr" />
    </section>
    <FooterComponent/>

</template>
<script>
import { store } from '../../data/store.js';
import HorizontalCard from '../DynamicComponent/HorizontalCard.vue';
import FooterComponent from '../partials/FooterComponent.vue';

export default {
    name: 'ShowCard',

    components: {
    HorizontalCard,
    FooterComponent
},

    data() {
        return {
            store,
        };
    },
    methods: {
    },
    mounted() {
    },
    computed: {
        getImage() {
            return this.store.imgOriginalPath + this.store.IdInfoCard.backdrop_path ? this.store.imgOriginalPath + this.store.SlideInfo.backdrop_path : this.store.imgOriginalPath + this.store.IdInfoCard.backdrop_path
        },
        getFlagApi() {
            let apiFlag = this.store.IdInfoCard.original_language.toLocaleUpperCase().substring(0, 2);
            if (apiFlag === "EN") {
                apiFlag = "GB";
            } else if (apiFlag === "JA") {
                apiFlag = "JP";
            } else if (apiFlag === "DA") {
                apiFlag = "CA";
            } else if (apiFlag === "ZH") {
                apiFlag = "ES";
            } else if (apiFlag === "HI ") {
                apiFlag = "CL";
            }
            console.log(`hello`, apiFlag);
            return "https://flagsapi.com/" + apiFlag + "/flat/64.png";
        },
        getRate: function () {
            return Math.ceil(this.store.IdInfoCard.vote_average / 2);
        },
    }

}


</script>

<style lang="scss" scoped>
@use '../../../src/assets/style/partials/variables' as *;

#show-card {


    .box-hero-image {
        height: 40vh;

    }

    #top-info-sections {
        margin-top: 100px;
    }

    .bg-shades {
        background: rgb(21, 28, 43);
        background: linear-gradient(90deg, rgba(21, 28, 43, 0.9220063025210083) 29%, rgba(118, 208, 192, 0) 56%);
        height: 100%;
        width: 100%;
    }

    h1 {
        font-size: 60px;
        font-weight: 800;
    }

    i {
        transition: 0.2s ease-in-out;

        &:hover {
            transform: scale(1.1);
        }
    }

    #flag {
        width: 50px;
        border-radius: 100%;
    }

    .overview {
        max-height: 240px;
        overflow-y: auto;
    }

    .box-hero-image.bottom {
        filter: opacity(0.1);
        overflow: hidden;

        img {
            width: 110%;
            height: 110%;

        }
    }

    #horizontal-card {
        top: 62.5%;

    }

    @media screen and (min-width:1140px) {
        .box-hero-image {
            height: 70vh;

        }


    }
}
</style>