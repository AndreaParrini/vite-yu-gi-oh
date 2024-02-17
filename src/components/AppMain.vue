<script>
import axios from 'axios';
import SectionFilters from './SectionFilters.vue';
import SectionCards from './SectionCards.vue';
import SectionLoader from './SectionLoader.vue';
import { store } from '../store.js';

export default {

    name: 'AppMain',
    components: {
        SectionFilters,
        SectionCards,
        SectionLoader
    },
    data() {
        return {
            store
        }
    },
    methods: {
        filteredCards(data) {
            store.loader = true;

            if (data === 'all') {
                store.getAllCards(store.base_api_url);
            } else {
                const url = `${store.base_api_url}&archetype=${data}`;
                store.getAllCards(url);
            }

        }
    },
    created() {
        store.getAllCards(store.base_api_url)
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div>
                <SectionFilters @selected-card="filteredCards"></SectionFilters>
                <SectionCards v-if="!store.loader"></SectionCards>
                <SectionLoader v-else></SectionLoader>
            </div>



        </div>
    </main>
</template>

<style scoped>
main {
    background-color: var(--yu-gi-oh-primary);
    padding-bottom: 2rem;
}
</style>