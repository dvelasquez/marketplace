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

function loadView(view: string) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);
}

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
      component: loadView('Listing'),
    },
    {
      path: '/adview/:region/:category/:title/:id',
      name: 'adview',
      component: loadView('AdView'),
    },
    {
      path: '/adinsert',
      name: 'adinsert',
      component: loadView('AdInsert'),
    },
    {
      path: '/search',
      name: 'search',
      component: loadView('Search'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: loadView('Profile'),
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
      component: loadView('Authentication'),
    },
  ],
});
