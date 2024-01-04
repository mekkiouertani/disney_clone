<template>
    <header>
        <nav class="nav" :class="{ 'nav': true, 'scrolled': isScrolled }" >
            <section id="left" class="d-flex align-items-center ">
                <!-- LOGO -->
                <div class="box-logo cp brand-logo" >
                    <img class="brand-logo" src="../images/logo-header.png" alt="logo-disney+" />
                </div>
                <!-- LIST NAVBAR -->
                <ul class="d-flex list-unstyled fw-bold mt-4 " >
                    <li class="mx-3 cp">
                        <i class="fa-solid fa-house px-2"></i>
                        <span class="d-none d-lg-inline bor">HOME</span>
                    </li>
                    <li class="mx-3 cp">
                        <i class="fa-solid fa-magnifying-glass px-2" @click="toggleSearch"></i>
                        <span class="d-none d-lg-inline">
                            <input type="text" placeholder="CERCA" v-model="textInput" @keyup.enter="searchResults">
                        </span>
                    </li>
                    <li class="mx-3 cp">
                        <i class="fa-solid fa-plus px-2"></i>
                        <span class="d-none d-lg-inline bor">LA TUA LISTA</span>
                    </li>
                    <li class="mx-3 cp">
                        <i class="fa-solid fa-star px-2"></i>
                        <span class="d-none d-lg-inline bor">ORIGINALS</span>
                    </li>
                </ul>
                <!-- SEARCHBAR SMALL QUERY -->
                
               
                <!-- nascondo momentaneamente questo perche la showSearch sarà diversa da questo
                <div id="small-input" class="mx-3 cp mt-2 fs-4 w-100 d-flex align-items-center " v-if="!showSearch">
                    <i class="fa-solid fa-arrow-left" @click="toggleSearch"></i>
                    <input type="text" placeholder="CERCA ..." class="w-50 mx-5" v-model="textInput"
                        @keyup.enter="searchResults">
                </div> -->

            </section>
             
            <!-- PROFILE USER -->
            <div class="end-navbar d-flex align-items-center" >
                <span class="mx-3 mt-2 d-none d-lg-inline">Topolino</span>
                <div class="box-logo-circle cp">
                    <img src="../images/topolino-avatar-profile.png" alt="avatar-di-topolino">
                </div>
            </div>
        </nav>
        
    </header>
    <div v-if="!store.showSearch">
                    <ShowSearch/>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../data/store.js';
import ShowSearch from './Pages/ShowSearch.vue';
export default {
    name: "NavbarHeader",
    data() {
        return {
            showSearch: store.showSearch,
            isScrolled: false,
            textInput: '',
            store,
        };
    },
    methods: {
        /**
         * searching results of the query in movie db and populating the array
         */
        searchResults() {
            if (this.textInput.replace(' ', '') !== '') {
                this.store.params.query = this.textInput;

                let url = this.store.BaseAPI + this.store.endPoint.searchSeries;
                const response = axios
                    .get(url, { params: store.params })
                    .then((response) => {
                        if (response.data.results.length > 0) {
                            store.foundSeries = response.data.results;
                        }
                        //stampo i risultati trovati
                        console.log(store.foundSeries);
                    })
                //searchmovies
                url = this.store.BaseAPI + this.store.endPoint.searchMovies;
                const res = axios
                    .get(url, { params: store.params })
                    .then((response) => {
                        if (response.data.results.length > 0) {
                            store.foundMovies = response.data.results;
                            this.store.params.query = '';
                        }
                        //stampo i risultati trovati
                        console.log(store.foundMovies);
                    })
            }
        },
        toggleSearch() {
            this.store.showSearch = !this.store.showSearch;
        },
        handleScroll() {
            const scrollPosition = window.scrollY;
            this.isScrolled = scrollPosition > 50; // Aggiorna lo stato in base allo scrolling
        },
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    components:{  ShowSearch },
};
</script>

<style lang="scss" scoped>
@use '../../src/assets/style/partials/variables' as *;

.nav {
    background: rgb(0, 0, 0);
    background: linear-gradient(180deg, rgba(0, 0, 0, 1) 29%, rgba(112, 198, 183, 0) 97%, rgba(118, 208, 192, 0) 97%);
    transition: 1s;

    &.scrolled {
        background: $black-color;
        transition: 0.5s ease-in; // Effetto di transizione
    }

    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    padding: 0 3%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .box-logo {
        width: 100px;
        margin-right: 50px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .box-logo-circle {
        height: 50px;
        width: 50px;
        overflow: hidden;
        border-radius: 50%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    input {
        border: none;
        background: transparent;
        outline: none;
        text-transform: capitalize;
        transition: 0.5s;
        color: white;
        font-weight: bold;
        width: 60px;

        &:hover {
            width: 250px;
            border-bottom: 1px solid #39eafd;
        }

        &::placeholder {
            color: white;
        }

    }

    #small-input {
        backface-visibility: 0;
        border-radius: 15px;
        width: 400px;
        padding: 15px 30px;
        transform: blur(0.5);

        input {
            width: 100% !important;
            min-width: 350px !important;
        }
    }


    // #new-input{
    // position: fixed;
    // left: 0px;
    // transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    // outline: none;
    // text-overflow: ellipsis;
    // z-index: calc(9);
    // border: none;
    // background: rgb(75, 78, 90);
    // color: rgb(168, 169, 173);
    // height: 60px;
    // padding-left: calc(3.5vw + 24px);
    // width: 100vw;
    // font-size: 44px;
    // letter-spacing: .11px;
    // line-height: 1.2;
    // }

    li {
        transition: 0.5s;

        &:hover {
            transform: scale(1.2);

        }

        .bor {
            &:hover {
                border-bottom: 1px solid white;
            }
        }
    }

    @media screen and (max-width: 1140px) {
        li {
            &:hover {
                border-bottom: 2px solid white;

            }
        }
    }
}
</style>
