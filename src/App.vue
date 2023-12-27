<template>
  <NavbarHeader />
  <CardWrapper />
</template>

<script>
import NavbarHeader from "./components/NavbarHeader.vue";
import CardWrapper from "./components/CardWrapper.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: { NavbarHeader, CardWrapper },
};
</script>

<style lang="scss" scoped></style>
