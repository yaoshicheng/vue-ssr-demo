// router.js
import Vue from 'vue'
import Router from 'vue-router'

import foo from "./components/Test1";
import test from "./components/Test";

Vue.use(Router);

export default function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/foo', component: foo},
      { path: '/test', component: test},
    ]
  })
}