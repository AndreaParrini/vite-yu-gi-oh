<script >
import axios from 'axios';
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'App',
  components: {
    AppHeader
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
  <AppHeader></AppHeader>
  <main>
    <div class="container">
      <section class="section_filters">
        <select name="" id="">
          <option value="alien"> Alien</option>
        </select>
      </section>
      <section class="section_cards">
        <div class="result">Found {{ cards.length }} cards</div>
        <div class="row">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl" v-for="card in cards" :key="card.id + '_card'">
            <div class="card">
              <img :src="'https://images.ygoprodeck.com/images/cards_small/' + card.id + '.jpg'" alt="">
              <div class="name">{{ card.name }}</div>
              <div>{{ card.archetype }}</div>
            </div>

          </div>
        </div>
      </section>
    </div>

  </main>
</template>

<style>
main {
  background-color: var(--yu-gi-oh-primary);

  & .section_filters {
    padding: 2rem;
  }

  & .section_cards {
    background-color: var(--yu-gi-oh-light);
    padding: 1rem 2rem;

    & .result {
      background-color: var(--yu-gi-oh-dark);
      color: var(--yu-gi-oh-light);
      padding: 1rem 1.5rem;
      margin-bottom: -1rem;

    }

    & .card {
      background-color: var(--yu-gi-oh-primary);
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      & div {
        padding: 1rem;
        text-align: center;

        &.name {
          text-transform: uppercase;
          color: var(--yu-gi-oh-light);
        }
      }

      &:hover {
        filter: drop-shadow(0 0 15px var(--yu-gi-oh-dark));
        scale: 1.05;
      }
    }
  }
}
</style>
