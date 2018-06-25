import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Routes from './routes/routes'
import vueSmoothScroll from 'vue-smooth-scroll'
import VueImg from 'v-img'
import Scrollspy from 'vue2-scrollspy'
import { store } from './store/store'

const vueImgConfig = {
    // Use `alt` attribute as gallery slide title
    altAsTitle: true,
    // Display 'download' button near 'close' that opens source image in new tab
    sourceButton: false,
    // Event listener to open gallery will be applied to <img> element
    openOn: 'click',
    // Show thumbnails for all groups with more than 1 image
    thumbnails: false,
  }
Vue.use(VueImg, vueImgConfig);
Vue.use(vueSmoothScroll);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Scrollspy);

// Filters
Vue.filter('to-uppercase', function(value) {
    return value.toUpperCase();
});
Vue.filter('excerpt', function(value) {
    return value.slice(0, 100) + '...';
});

const router = new VueRouter({
    routes: Routes,
    mode: 'history' //removes the # (hash mode) and activates history mode
});


new Vue({
  el: '#app',
  store: store,
  render: h => h(App),
  router: router
})
