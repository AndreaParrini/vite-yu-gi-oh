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
      <div class="row">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl" v-for="card in cards" :key="card.id + '_card'">
          <div>{{ card.name }}</div>
          <div>{{ card.archetype }}</div>
          <img :src="'https://images.ygoprodeck.com/images/cards_small/' + card.id + '.jpg'" alt="">
        </div>
      </div>
    </div>
  </main>
</template>

<style>
main {
  background-color: var(--yu-gi-oh-primary);
}
</style>
