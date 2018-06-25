<template>
    <div>
        <!--<vue-video-background :source="VideoSource" img="../../../assets/tolle.jpg" :options="videoOptions">
        </vue-video-background>-->
        <app-header v-bind:navLinks="navLinks"></app-header>
        <div v-scroll-spy>
            <intro></intro>
            <about></about>
            <services></services>
            <portofolio></portofolio>
            <blog></blog>
            <contact></contact>
        </div> 
        <app-footer></app-footer>
        <scroll></scroll>
        <dot-nav v-bind:navLinks="navLinks"></dot-nav>
        
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
import VueVideoBackground from './main.vue'
import Scroll from './../aside/Scroll.vue'
import DotNav from './../aside/DotNavigation.vue'


export default {
    components: {
        'app-header': Header,
        about: About,
        blog: Blog,
        contact: Contact,
        intro: Intro,
        portofolio: Portofolio,
        services: Services,
        'app-footer': Footer,
        'vue-video-background': VueVideoBackground, 
        scroll: Scroll,
        'dot-nav': DotNav
    },
    data() {
        return {
            VideoSource: {
                mp4: 'https://ak9.picdn.net/shutterstock/videos/18681329/preview/stock-footage-space-background-camera-is-flying-through-the-blue-and-magenta-coloured-nebula-the-stars-are-every.mp4'
            },
            videoOptions: {
                autoplay: true,
                controls: false,
                muted: true,
                loop: true
            },
            navLinks: [
                {'name': 'Intro', 'href': 'intro'},
                {'name': 'About', 'href': 'about'},
                {'name': 'Services', 'href': 'services'},
                {'name': 'Portofolio', 'href': 'portofolio'},
                {'name': 'Blog', 'href': 'blog'},
                {'name': 'Contact', 'href': 'contact'}
            ]
        }
    }
}
</script>

<style>

</style>
