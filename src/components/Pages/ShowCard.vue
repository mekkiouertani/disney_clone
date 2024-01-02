<template>
    <section id="show-card">
        <div class="box-hero-image position-relative">
            <img class="images" :src="store.imgOriginalPath + store.IdInfoCard.backdrop_path"
                :alt="store.IdInfoCard.name ? store.IdInfoCard.title : store.IdInfoCard.name">
            <div class="bg-shades position-absolute top-0 ">hello</div>
        </div>
        <section id="top-info-sections" class="position-absolute container-fluid top-0 ">
            <h1>{{ store.SlideInfo.name || store.SlideInfo.title }}</h1>
            {{ store.IdInfoCard.id }}
            <button @click="store.showCard = false">back</button>
        </section>
    </section>
</template>
<script>
import { store } from '../../data/store.js';
export default {
    name: 'ShowCard',

    components: {

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

}


</script>

<style lang="scss" scoped>
@use '../../../src/assets/style/partials/variables' as *;

#show-card {

    .box-hero-image {
        height: 70vh;
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
}
</style>