<script>
import axios from 'axios';
import CardItem from './CardItem.vue';

export default {
    name: 'SectionCards',
    components: {
        CardItem
    },
    data() {
        return {
            cards: []
        }
    },
    mounted() {
        axios
            .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
            .then((response) => {
                this.cards = response.data.data;
            })
    }
}
</script>

<template>
    <section class="section_cards">
        <div class="result">Found {{ cards.length }} cards</div>
        <div class="row">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl" v-for="card in cards">
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
        margin-bottom: -1rem;

    }
}
</style>