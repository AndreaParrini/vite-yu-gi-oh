<script>
import axios from 'axios';
export default {
    name: 'SectionFilters',
    emits: ['selected-card'],
    data() {
        return {
            archetypeSelected: '',
            archetypes: []
        }
    },
    methods: {
        getSelectedCards() {
            this.$emit('selected-card', this.archetypeSelected)
        }
    },
    mounted() {
        axios
            .get('https://db.ygoprodeck.com/api/v7/archetypes.php')
            .then((response) => {
                this.archetypes = response.data;

            })
            .catch((error) => {
                console.error(error);
            })
    }
}
</script>

<template>
    <section class="section_filters">
        <select name="" id="" v-model="archetypeSelected" @change="getSelectedCards">
            <option disabled selected value="">Please select one</option>
            <option value="all">All</option>
            <option v-for="archetype in archetypes" :value="archetype.archetype_name"> {{ archetype.archetype_name }}
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