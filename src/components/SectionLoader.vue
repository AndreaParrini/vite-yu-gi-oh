<script>
import AppLoader from './AppLoader.vue'

export default {
    name: 'SectionLoader',
    components: {
        AppLoader
    }
}
</script>

<template>
    <div class="section_loader">
        <AppLoader></AppLoader>
    </div>
</template>

<style scoped>
.section_loader {
    margin: 4rem;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>