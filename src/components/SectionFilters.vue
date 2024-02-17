<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
    name: 'SectionFilters',
    emits: ['selected-card'],
    data() {
        return {
            store
        }
    },
    methods: {
        getSelectedCards() {
            this.$emit('selected-card', store.archetypeSelected)
        }
    },
    mounted() {
        store.getAllArchetypes();
    }
}
</script>

<template>
    <section class="section_filters">
        <select name="" id="" v-model="store.archetypeSelected" @change="getSelectedCards">
            <option disabled selected value="">Please select one</option>
            <option value="all">All</option>
            <option v-for="archetype in store.archetypes" :value="archetype.archetype_name"> {{ archetype.archetype_name }}
            </option>
        </select>
    </section>
</template>

<style scoped>
.section_filters {
    padding: 2rem;

    & select {
        padding: 0.5rem 3rem 0.5rem 0.5rem;
        border-radius: 0.3rem;
        font-size: 1rem;
        text-align: start;
    }
}
</style>