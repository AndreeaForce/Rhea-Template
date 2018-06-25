import MainLayout from '../components/main/MainLayout.vue';
import PortofolioPage from '../components/pages/PortofolioPage.vue';
import BlogPage from '../components/pages/BlogPage.vue';
import BlogPost from '../components/main/layout/BlogPost.vue';

export default [
    { path: '/', component: MainLayout },
    { path: '/portofolio', component: PortofolioPage },
    { path: '/blog', name: 'feed', component: BlogPage },
    { path: '/blog/by/:author', name: 'author', component: BlogPage },
    { path: '/blog/:id', name: 'post', component: BlogPost, props: true }

]