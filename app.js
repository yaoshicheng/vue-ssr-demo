import Vue from 'vue';
import App from './App.vue';
import createStore from './store/index.js';
import createRouter from './router.js';

export default function createApp() {
  const store = createStore();
  const router = createRouter();
  const app = new Vue({
    store,
    router,
    render: h => h(App)
  });
  return {app, store ,router}
}