import Vue from 'vue';
import vuex from 'vuex';

Vue.use(vuex);


const guangzhou = {
  store:{
    chThisStation: '芝士橙',
    enThisStation: 'Sino-Singapore Guangzhou Knowledge City',
    chNextStation: '枫下',
    enNextStation: 'Fengxia',
    Line: '14',
    nowStation: '40',
    platform: '4',
    color: 'line14',
    htmlUrl:'',
    isAPM: false
  },
  mutations: { 

  },
  actions: { 

   },
  getters: { 

  }
}

const store = new.Vuex.store({
  modules:{
    gz: guangzhou
  }
});


export default store;