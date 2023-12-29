<template>
    <section id="show-card">
        titolo
        <h2>{{ store.InfoCard }} </h2>
    </section>
</template>

<script>
import { store } from '../../data/store.js';

export default {
    name: "ShowCard",
    data() {
        return {
            store,
        }
    },
    computed: {

    },
}
</script>

<style lang="scss" scoped>
#show-card {
    margin-top: 100px;
}
</style>