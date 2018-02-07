import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Routes from './routes/routes'

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
    routes: Routes,
    mode: 'history' //removes the # (hash mode) and activates history mode
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
