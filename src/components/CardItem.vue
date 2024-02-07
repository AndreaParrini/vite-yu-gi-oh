<script>
export default {
    name: 'CardItem',
    props: {
        card: Object
    }
}
</script>

<template>
    <div class="card">
        <img :src="'https://images.ygoprodeck.com/images/cards_small/' + card.id + '.jpg'" alt="">
        <div class="name">{{ card.name }}</div>
        <div>{{ card.archetype }}</div>
    </div>
</template>

<style scoped>
.card {
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
</style>