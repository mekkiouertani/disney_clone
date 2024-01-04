<template>
    <section id="intro-component" class="d-flex align-items-center justify-content-center">
        <img src="../../images/intro-castle.gif" class="images" alt="castle-disney" />
    </section>
</template>

<script>
export default {
    name: 'IntroComponent',
}
</script>

<style lang="scss" scoped>
@use '../../../src/assets/style/partials/variables' as *;

#intro-component {
    background-color: $secondary-blue;
    height: 100vh;


}
</style>