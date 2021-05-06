import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Classify from '../views/Classify.vue';
import Shopping from '../views/Shopping.vue';
import Search from '../views/Search.vue';
import HomePage from '../views/HomePage.vue';
import User from '../views/User.vue';
import Order from '../views/Order.vue';
import Location from '../views/Location.vue';
import Money from '../views/Money.vue';
import Coupon from '../components/Coupon.vue';
import Step from '../components/Step.vue';
import Loading from '../components/Loading.vue';

VueRouter.prototype.back = false;
VueRouter.prototype.goBack = function goBack() {
  this.back = true;
  this.go(-1);
};
Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: 'classify',
        name: 'classify',
        component: Classify,
      },
      {
        path: 'shopping',
        component: Shopping,
      },
      {
        path: 'homePage',
        component: HomePage,
        name: 'homePage',
      },
      {
        path: 'user',
        component: User,
        name: 'user',
      },
    ],
  },
  {
    path: '/search',
    name: 'search',
    component: Search,
  },
  {
    path: '/location',
    name: 'location',
    component: Location,
  },
  {
    path: '/coupon',
    name: 'coupon',
    component: Coupon,
  },
  {
    path: '/step',
    name: 'step',
    component: Step,
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
  },
  {
    path: '/money',
    name: 'money',
    component: Money,
  },
  {
    path: '/loading',
    name: 'loading',
    component: Loading,
  },
  {
    path: '*',
    redirect: '/loading',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
