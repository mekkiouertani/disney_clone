<template>
    <!-- contenitore sfondo  -->
    <div class=" outer_container position-relative ">
        <div class="background-image position-absolute ">
            <img src="https://image.tmdb.org/t/p/w1280/2hMt6zKQsvYvH3ZRe8T6RzAD2XB.jpg" alt="" class="w-100">
        </div>
        <!-- classe per aggiungere il gradiente -->
        <div class="gradient-top z-hight"></div>
        <div class="content w-100 d-flex flex-row justify-content-center py-5 gradient-container">
            <div class="poster-left d-flex flex-column justify-content-center align-items-center ">
                <div class="title z-hight">
                    <img class="logo " src="../../images/indiana_jones_logo.png" alt="logo">
                </div>
                <div class="btn btn-secondary z-hight">
                    VISUALIZZA DI PIU
                </div>
            </div>
            <div class="poster-right  z-hight">
                <div class="row d-flex flex-row align-items-center ">
                    <div class=" col-4  h-100 ">
                        <img class="w-100" src="https://image.tmdb.org/t/p/w300/uK8ZR0PkZqf9Zrsg9AYvcoUxWI8.jpg" alt="il quadrante del destino">
                    </div>
                    <div class=" col-4  h-100 ">
                        <img class="w-100" src="https://image.tmdb.org/t/p/w300/c9gGqc5j3eZwodO6vPjVpHI2Mlj.jpg" alt="I predatori dell\'arca perduta">
                    </div>
                    <div class=" col-4  h-100 " >
                        <img class="w-100" src="https://image.tmdb.org/t/p/w300/gKhdyWTHCv4hLQRjdL2e9m3fJBU.jpg" alt="il tempio maledetto">
                    </div>
                </div>
            </div>
            <!-- classe per aggiungere il gradiente -->
            <div class="gradient-bottom z-hight"></div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "Poster",
    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
    
    .gradient-top{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 50px;
        z-index: 3000;
        background: rgb(255,255,255);
        background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgb(21, 28, 43) 100%);
    }

    .gradient-bottom{
        position: absolute;
        top: 0;
        width: 100%;
        height: 50px;
        z-index: 3000;
        background: rgb(255,255,255);
        background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgb(21, 28, 43) 100%);
    }
    .outer_container{
        width: 100%;
        max-height: 800px;
    }
    .background-image{
        z-index: 100;
        min-width: 100%;
        max-width: 200%;
        height: 100%;
        overflow: hidden;
    }
    .content{
        height: 100%;
    }
    .z-hight{
        z-index: 2000;
    }

    .poster-left{
        max-height: 100%;
        width: 40%;
    }
    .title{
        height: auto;
        width: 70%;
        padding-bottom: 80px;
    }
    .logo{
        height: 100%;
        width: 100%;
    }
    .poster-right{
        width: 50%;
    }
</style>