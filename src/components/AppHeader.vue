<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header>
        <nav>
            <div class="logo">
                <img src="/logo.webp" alt="">
            </div>

            <h1>Yu-Gi-Oh Api</h1>
        </nav>
    </header>
</template>

<style scoped>
nav {
    display: flex;
    align-items: center;
    padding: 1rem;

    & .logo {
        width: 80px;
        margin-right: 2rem;
    }

    & h1 {
        font-size: 3.5rem;
        font-weight: 400;
        margin: 0;
    }
}
</style>