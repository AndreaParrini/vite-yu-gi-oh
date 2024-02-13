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
            base_api_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
            cards: []
        }
    },
    methods: {
        getAllCards(url) {
            /* setTimeout(() => { */
            axios
                .get(url)
                .then((response) => {
                    this.cards = response.data.data
                })
                .catch((error) => {
                    console.error(error)
                })
        }/* , 3000) 
    }*/,
        filteredCards(data) {
            console.log(data);
            if (data === 'all') {
                this.getAllCards(this.base_api_url);
            } else {
                const url = `${this.base_api_url}&archetype=${data}`;
                this.getAllCards(url);
            }

        }
    },
    created() {
        this.getAllCards(this.base_api_url)
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div v-if="cards.length > 0">
                <SectionFilters @selected-card="filteredCards"></SectionFilters>
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