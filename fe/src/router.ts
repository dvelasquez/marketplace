import Vue from 'vue';
import Router from 'vue-router';
import Listing from '@/views/Listing.vue';
import AdView from '@/views/AdView.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/listing',
    },
    {
      path: '/listing',
      name: 'listing',
      component: Listing,
    },
    {
      path: '/adview/:region/:category/:title/:id',
      name: 'adview',
      component: AdView,
    },
  ],
});
