<script>
export default {
    name: 'AppLoader'
}
</script>

<template>
    <div>
        <h3 class="title_loading">Attendi qualche secondo, stiamo recuperando i dati dal server</h3>
        <div class="load">
            <div class="loading">Loading</div>
            <i class="loader fas fa-circle-notch" style="color: black;"></i>
        </div>
    </div>
</template>

<style scoped>
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