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

</style>
