import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    loading: false,
    registration: 'under-construction', //valid values: 'under-construction' ,'opened' or 'closed'
  },
  getters: {
    isLoading: state => state.loading,
    isRegistrationOpen: state => state.registration,
  },
  mutations: {
    setLoading: (state, payload) => state.loading = payload,
    setRegistrationStatus: (state, payload) => state.registration = payload
  },
  actions: {
    loadingStart: (context) => {
      context.commit('setLoading', true);
    },
    loadingEnd: (context) => {
      context.commit('setLoading', false);
    },
    registrationOpened: (context) => {
      context.commit('setRegistrationStatus', 'opened');
    },
    registrationClosed: (context) => {
      context.commit('setRegistrationStatus', 'closed');
    },
  }
});
