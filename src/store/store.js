import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        chThisStation: '知识城',
        enThisStation: 'Sino-Singapore Guangzhou Knowledge City',
        chNextStation: '枫下',
        enNextStation: 'Fengxia',
        Line: '14',
        StationNumber: '40',
        platform: '4',
        color: 'line14',
        barrier: '4'
    },
    mutations: {

    },
    actions: {

    }
})