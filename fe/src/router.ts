import Vue from 'vue';
import Router, {RawLocation, Route} from 'vue-router';
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

function checkAuthentication(to: Route,
                             from: Route,
                             next: (to?: RawLocation | false | ((vm: any) => any) | void) => void) {
  const authService = new AuthService();
  if (authService.isAuthenticated()) {
    next();
  } else {
    next(`/auth?from=${from.name}&to=${to.name}`);
  }
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
      beforeEnter: checkAuthentication,
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
      beforeEnter: checkAuthentication,
    },
    {
      path: '/auth',
      name: 'auth',
      component: Authentication,
    },
  ],
});
