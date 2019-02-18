import Vue from 'vue';
import Router from 'vue-router';
import Listing from '@/views/Listing.vue';
import AdView from '@/views/AdView.vue';
import AdInsert from '@/views/AdInsert.vue';
import Search from '@/views/Search.vue';
import Profile from '@/views/Profile.vue';
import Authentication from '@/views/Authentication.vue';
import {AuthService} from '@/services/AuthService';

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
    {
      path: '/adinsert',
      name: 'adinsert',
      component: AdInsert,
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      beforeEnter: (to, from, next) => {
        const authService = new AuthService();
        if (authService.isAuthenticated()) {
          next();
        } else {
          next('/auth');
        }
      },
    },
    {
      path: '/auth',
      name: 'auth',
      component: Authentication,
    },
  ],
});
