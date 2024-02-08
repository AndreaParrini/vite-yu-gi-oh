<script>
import axios from 'axios';
import SectionFilters from './SectionFilters.vue';
import SectionCards from './SectionCards.vue';
import AppLoader from './AppLoader.vue'

export default {

    name: 'AppMain',
    components: {
        SectionFilters,
        SectionCards,
        AppLoader
    },
    data() {
        return {
            cards: []
        }
    },
    mounted() {
        setTimeout(() => {
            axios
                .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=15&offset=0')
                .then((response) => {
                    this.cards = response.data.data
                })
                .catch((error) => {
                    console.error(error)
                })
        }, 3000)

    }
}
</script>

<template>
    <main>
        <div class="container">
            <div v-if="cards.length > 0">
                <SectionFilters></SectionFilters>
                <SectionCards :cards="cards"></SectionCards>
            </div>
            <div class="section_loader" v-else>
                <AppLoader></AppLoader>
            </div>


        </div>
    </main>
</template>

<style scoped>
main {
    background-color: var(--yu-gi-oh-primary);
    padding-bottom: 2rem;

    & .section_loader {
        margin-top: 10rem;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>