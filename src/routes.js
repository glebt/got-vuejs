import Home from './components/Home.vue';
import Episodes from './components/Episodes.vue';
import Characters from './components/Characters.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/episodes', component: Episodes },
    { path: '/characters', component: Characters },
];

export default routes;