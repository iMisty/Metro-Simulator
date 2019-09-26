import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    chThisStation: '芝士橙',
    enThisStation: 'Sino-Singapore Guangzhou Knowledge City',
    chNextStation: '枫下',
    enNextStation: 'Fengxia',
    Line: '14',
    nowStation: '40',
    platform: '4',
    color: 'line14',
    htmlUrl: '',
    isAPM: false,
  },
  mutations: {

  },
  actions: {

  },
});
