import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/layout/Home.vue';

// export const URLS = {
//   getSide: '/getsidebar',
//   getGoodsList:'/getGoodsList',
// };

// const baseURL = 'https://mallapi.duyiedu.com/goods/';
// export default baseURL;

Vue.use(VueRouter);
// const ayncRouterMap = [{

// }];

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName:"about" */'../views/About.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
