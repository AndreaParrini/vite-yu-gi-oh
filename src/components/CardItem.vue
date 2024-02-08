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
        <!-- 'https://images.ygoprodeck.com/images/cards_small/' + card.id + '.jpg' -->
        <img :src="card.card_images[0].image_url" alt="">
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
            font-weight: 700;
            color: var(--yu-gi-oh-light);
        }
    }

    &:hover {
        filter: drop-shadow(0 0 15px var(--yu-gi-oh-dark));
        scale: 1.05;
    }
}
</style>