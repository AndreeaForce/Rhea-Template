<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
import MainLayout from './components/main/MainLayout.vue';
import PortofolioPage from './components/pages/PortofolioPage.vue';
import BlogPage from './components/pages/BlogPage.vue';

export default {
    components: {
        'main-layout': MainLayout,
        'portofolio-page': PortofolioPage,
        'blog-page': BlogPage
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
        background-color: #252839;
    }
    section {
        font-family: 'Anton', sans-serif;
        letter-spacing: 4px;
        color: #b5b5b7;
        max-width: 100%;
        overflow: hidden;
    }
    .section--padding {
        padding-top: 100px;
    }
</style>
