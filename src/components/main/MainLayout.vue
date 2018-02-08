<template>
    <div>
        <app-header></app-header>
        <intro></intro>
        <about></about>
        <services></services>
        <portofolio></portofolio>
        <blog></blog>
        <contact></contact>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from './Header.vue';
import About from './layout/About.vue';
import Blog from './layout/Blog.vue';
import Contact from './layout/Contact.vue';
import Intro from './layout/Intro.vue';
import Portofolio from './layout/Portofolio.vue';
import Services from './layout/Services.vue';
import Footer from './Footer.vue';

export default {
    components: {
        'app-header': Header,
        about: About,
        blog: Blog,
        contact: Contact,
        intro: Intro,
        portofolio: Portofolio,
        services: Services,
        'app-footer': Footer
    }
}
</script>

<style>
.container {
    height: 400px;
}
</style>
