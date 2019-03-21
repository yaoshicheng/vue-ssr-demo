// router.js
import Vue from 'vue'
import Router from 'vue-router'

import My from "./components/My.vue";
import Home from "./components/Home.vue";

Vue.use(Router);

export default function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      // { path: '/foo', component: () => import('./components/My.vue') },
      // { path: '/test', component:()=>import("./components/Home.vue")},
      { path: '/home', component: Home },
      { path: '/my', component: My },
    ]
  })
}