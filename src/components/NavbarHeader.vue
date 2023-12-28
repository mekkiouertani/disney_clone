<template>
    <header>
        <nav class="nav" :class="{ 'nav': true, 'scrolled': isScrolled }">
            <section id="left" class="d-flex align-items-center ">
                <!-- LOGO -->
                <div class="box-logo cp brand-logo" v-if="showSearch">
                    <img class="brand-logo" src="../images/logo-header.png" alt="logo-disney+" />
                </div>
                <!-- LIST NAVBAR -->
                <ul class="d-flex list-unstyled fw-bold mt-4 " v-if="showSearch">
                    <li class="mx-3 cp">
                        <i class="fa-solid fa-house px-2"></i>
                        <span class="d-none d-lg-inline">HOME</span>
                    </li>
                    <li class="mx-3 cp">
                        <i class="fa-solid fa-magnifying-glass px-2" @click="toggleSearch"></i>
                        <span class="d-none d-lg-inline"><input type="text" placeholder="CERCA"></span>
                    </li>
                    <li class="mx-3 cp">
                        <i class="fa-solid fa-plus px-2"></i>
                        <span class="d-none d-lg-inline">LA TUA LISTA</span>
                    </li>
                    <li class="mx-3 cp">
                        <i class="fa-solid fa-star px-2"></i>
                        <span class="d-none d-lg-inline">ORIGINALS</span>
                    </li>
                </ul>
                <!-- SEARCHBAR SMALL QUERY -->
                <div id="small-input" class="mx-3 cp mt-2 fs-4 w-100 d-flex align-items-center " v-if="!showSearch">
                    <i class="fa-solid fa-arrow-left" @click="toggleSearch"></i>
                    <input type="text" placeholder="CERCA ..." class="w-50 mx-5">
                </div>
            </section>
            <!-- PROFILE USER -->
            <div class="end-navbar d-flex align-items-center" v-if="showSearch">
                <span class="mx-3 mt-2 d-none d-lg-inline">Topolino</span>
                <div class="box-logo-circle cp">
                    <img src="../images/topolino-avatar-profile.png" alt="avatar-di-topolino">
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: "NavbarHeader",
    data() {
        return {
            showSearch: true,
            isScrolled: false,
        };
    },
    methods: {
        toggleSearch() {
            this.showSearch = !this.showSearch;
        },
        handleScroll() {
            const scrollPosition = window.scrollY;
            this.isScrolled = scrollPosition > 50; // Aggiorna lo stato in base allo scrolling
        },
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
};
</script>

<style lang="scss" scoped>
.nav {
    background: rgb(0, 0, 0);
    background: linear-gradient(180deg, rgba(0, 0, 0, 1) 29%, rgba(112, 198, 183, 0) 97%, rgba(118, 208, 192, 0) 97%);
    transition: 1s;

    &.scrolled {
        background: rgb(0, 0, 0);
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

    @media screen and (max-width: 1140px) {}
}
</style>
