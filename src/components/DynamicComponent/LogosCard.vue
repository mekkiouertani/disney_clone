<template>
    <div class="container-fluid mt-5">
        <div class="row gy-2">
            <!-- DISNEY -->
            <div class="col-4 col-lg-2" @click="selectCard('disney-card-logos')">
                <div class="logos-card" id="disney-card-logos" @click="store.showCardWrapper = false">
                    <div class="box-logo">
                        <img src="../../images/logos-card/disney-logo.png" alt="logo" class=" inverted-color">
                    </div>
                </div>
            </div>
            <!-- PIXAR -->
            <div class="col-4 col-lg-2 " @click="selectCard('pixar-card-logos')">
                <div class="logos-card " id="pixar-card-logos" @click="store.showCardWrapper = false">
                    <div class="box-logo">
                        <img src="../../images/logos-card/pixar-logo.png" alt="logo" class=" inverted-color">
                    </div>
                </div>
            </div>
            <!-- MARVEL -->
            <div class="col-4 col-lg-2 " @click="selectCard('marvel-card-logos')">
                <div class="logos-card " id="marvel-card-logos" @click="store.showCardWrapper = false">
                    <div class="box-logo">
                        <img src="../../images/logos-card/marvel-logo.png" alt="logo" class="">
                    </div>
                </div>
            </div>
            <!-- STAR WARS -->
            <div class="col-4 col-lg-2 " @click="selectCard('starwars-card-logos')">
                <div class="logos-card " id="starwars-card-logos" @click="store.showCardWrapper = false">
                    <div class="box-logo">
                        <img src="../../images/logos-card/star-wars-logo.png" alt="logo" class=" inverted-color">
                    </div>
                </div>
            </div>
            <!-- NATIONAL GEOGRAPHIC -->
            <div class="col-4 col-lg-2 " @click="selectCard('national-card-logos')">
                <div class="logos-card  " id="national-card-logos" @click="store.showCardWrapper = false">
                    <div class="box-logo">
                        <img src="../../images/logos-card/national-g-logo.png" alt="logo" class=" ">
                    </div>
                </div>
            </div>
            <!-- STAR -->
            <div class="col-4 col-lg-2 " @click="selectCard('star-card-logos')">
                <div class="logos-card " id="star-card-logos" @click="store.showCardWrapper = false">
                    <div class="box-logo">
                        <img src="../../images/logos-card/star-logo.png" alt="logo" class=" inverted-color">
                    </div>
                </div>
            </div>
            <!--  -->
        </div>
    </div>
</template>

<script>
import { store } from '../../data/store.js';
export default {
    name: "LogosCard",
    data() {
        return {
            store,
        }
    },
    methods: {
        // con il click su una cardLogos passiamo l'id della card 
        // alla funzione che passerà il valore a una variabile nello store
        // in base a quale id della card sarà passato, nel componente show saranno mostrati
        // i risultati inerenti con un v-if === 'nome della card selezionata'
        selectCard(cardId) {
            this.store.selectedLogosCard = cardId;
            this.store.showLogosCard = true;
        },

    },
}
</script>

<style lang="scss" scoped>
@use '../../../src/assets/style/partials/variables' as *;



.logos-card {
    border-radius: 5px;
    position: relative;
    box-shadow: $shadow-box;
    background-color: $logos-card;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    aspect-ratio: 16/9;


    &:hover {
        transform: scale(1.1);
        border: 5px solid white;
    }

    .box-logo {
        width: 70%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);


        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            -webkit-filter: drop-shadow(5px 5px 5px #222);
            filter: drop-shadow(5px 5px 5px #222);
        }

        .inverted-color {
            filter: invert(1);
        }
    }
}

#disney-card-logos {
    &:hover {
        background-color: $secondary-blue;
        background-image: url('../../images/logos-card/gif/disney-gif.gif');
    }
}

#pixar-card-logos {
    &:hover {
        background-color: #B9CBE2;
        background-image: url('../../images/logos-card/gif/pixar-gif.gif');
    }
}

#marvel-card-logos {
    &:hover {
        background-color: red;
        background-image: url('../../images/logos-card/gif/marvel-gif.gif');
    }
}

#starwars-card-logos {
    &:hover {
        background-color: black;
        background-image: url('../../images/logos-card/gif/starwars-gif.gif');
    }
}

#national-card-logos {
    &:hover {
        background-color: #FFD800;
        background-image: url('../../images/logos-card/gif/national-gif.gif');
    }
}

#star-card-logos {
    &:hover {
        background-color: #019ADD;
        background-image: url('../../images/logos-card/gif/star-gif.gif');
    }
}
</style>