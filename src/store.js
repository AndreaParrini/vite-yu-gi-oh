import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    // STATE
    base_api_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    cards: [],
    loader: true,
    archetypeSelected: '',
    archetypes: [],

    // ACTIONS
    getAllCards(url) {
        setTimeout(() => {
            axios
                .get(url)
                .then((response) => {
                    this.cards = response.data.data;
                    this.loader = false;
                })
                .catch((error) => {
                    console.error(error)
                })
        }, 3000)
    },
    getAllArchetypes() {
        axios
            .get('https://db.ygoprodeck.com/api/v7/archetypes.php')
            .then((response) => {
                this.archetypes = response.data;

            })
            .catch((error) => {
                console.error(error);
            })
    }
})