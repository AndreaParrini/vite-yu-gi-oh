<script>
import SectionFilters from './SectionFilters.vue';
import SectionCards from './SectionCards.vue';

export default {

    name: 'AppMain',
    components: {
        SectionFilters,
        SectionCards
    }
}
</script>

<template>
    <main>
        <div class="container">
            <SectionFilters></SectionFilters>
            <SectionCards></SectionCards>
        </div>
    </main>
</template>

<style scoped>
main {
    background-color: var(--yu-gi-oh-primary);
}
</style>