import Vue from 'vue';
import axios from 'axios';
import Vuex from 'vuex';

Vue.use(Vuex);

export default function createStore() {
  return new Vuex.Store({
    state: {
      article: {title:"1214"}
    },
    actions: {
      async GET_ARTICLE({commit}) {
        // const {data} = await axios.get('https://www.86886.wang/')
        commit('SET_ARTICLE',{title:'saef'})
      }
    },
    mutations: {
      SET_ARTICLE(state, data) {
        state.article = data
        // console.log(state.article)
      }
    }
  })
}