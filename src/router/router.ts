import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
const routes = [
  { path: '/', redirect: '/login' },
  { path: '/home', component: Home },
  { path: '/login', component: Login },
];

export { routes };
