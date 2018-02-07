import MainLayout from '../components/main/MainLayout.vue';
import PortofolioPage from '../components/pages/PortofolioPage.vue';
import BlogPage from '../components/pages/BlogPage.vue';

export default [
    { path: '/', component: MainLayout },
    { path: '/portofolio', component: PortofolioPage },
    { path: '/blog', component: BlogPage }
]