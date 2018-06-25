<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
import MainLayout from './components/main/MainLayout.vue';
import PortofolioPage from './components/pages/PortofolioPage.vue';

export default {
    components: {
        'main-layout': MainLayout,
        'portofolio-page': PortofolioPage
    },
    data () {
        return {
      
        }
    }
}
</script>

<style lang="scss">
    body {
        font-family: 'Open Sans', sans-serif;
        background-color: #677077;
    }
    .container {
        min-height: 100vh;
    }
    
</style>
