// router.js
import Vue from 'vue'
import Router from 'vue-router'

import My from "../components/My.vue";
import Home from "../components/Home.vue";

Vue.use(Router);

export default function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      // { path: '/home', component: () => import ('../components/Home.vue') },
      { path: '/', component: Home },
      { path: '/my', component:My},
      { path: '/home', component: Home },
    ]
  })
}
