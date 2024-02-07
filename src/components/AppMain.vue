<script>
import axios from 'axios';
import SectionFilters from './SectionFilters.vue';
import SectionCards from './SectionCards.vue';

export default {

    name: 'AppMain',
    components: {
        SectionFilters,
        SectionCards
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

                for (let i = 0; i < response.data.data.length; i++) {
                    const element = response.data.data[i];
                    this.cards.push(element)
                }
                console.log(response.data.data);
            })
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div v-if="cards.length > 200">
                <SectionFilters></SectionFilters>
                <SectionCards :cards="cards"></SectionCards>
            </div>
            <div class="section_loader" v-else>
                <div>
                    <h3 class="title_loading">Attendi qualche secondo, stiamo recuperando i dati dal server</h3>
                    <div class="load">
                        <div class="loading">Loading</div>
                        <i class="loader fas fa-circle-notch" style="color: black;"></i>
                    </div>
                </div>
            </div>


        </div>
    </main>
</template>

<style scoped>
main {
    background-color: var(--yu-gi-oh-primary);

    & .section_loader {
        margin-top: 10rem;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

.title_loading {
    text-align: center;
}

.load {
    display: flex;
    justify-content: center;
    align-items: center;
}

.loading {
    font-size: larger;
    font-weight: 600;
    padding: 0.5rem;
}

.loader {
    font-size: 40px;
    animation: rotate 1s linear infinite;
}


@keyframes rotate {
    100% {
        transform: rotate(360deg);
    }
}
</style>