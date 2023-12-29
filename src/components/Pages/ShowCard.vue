<template>
    <div>
        <section id="show-card">
            <button @click="store.showCard = false">back</button>
            <h1>Hello</h1>
            <!-- <div v-for="el in store.idInfoCard"> -->
            <div>
                <!-- <h1>{{ info.id }}</h1> -->
            </div>
            {{ store.IdInfoCard.id }}
        </section>
    </div>
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
    }
}


</script>

<style lang="scss" scoped>
@use '../../../src/assets/style/partials/variables' as *;

#show-card {
    margin-top: 100px;
}
</style>