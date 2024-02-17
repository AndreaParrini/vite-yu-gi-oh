<script>
import CardItem from './CardItem.vue';
import { store } from '../store.js';

export default {
    name: 'SectionCards',
    components: {
        CardItem
    },
    data() {
        return {
            store
        }
    },
    computed: {
        TotalCards() {
            return store.cards.length;
        }
    }
}
</script>

<template>
    <section class="section_cards">
        <div class="result">Found {{ TotalCards }} cards</div>
        <div class="row">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl" v-for="card in store.cards">
                <CardItem :card="card" :key="card.id + '_card'"></CardItem>
            </div>
        </div>
    </section>
</template>

<style scoped>
.section_cards {
    background-color: var(--yu-gi-oh-light);
    padding: 1rem 2rem;

    & .result {
        background-color: var(--yu-gi-oh-dark);
        color: var(--yu-gi-oh-light);
        padding: 1rem 1.5rem;
        margin-bottom: -0.5rem;

    }
}
</style>