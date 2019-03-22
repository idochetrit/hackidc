import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    authenticated: false,
    token: localStorage.getItem("user-token") || "",
    user: {
      registerStatus: ""
    },
    loading: false,
    judgeObject: null,
    registration: "closed", // valid values: 'under-construction' ,'opened' or 'closed'
    currentJudgingRound: 0 // 0: closed, 1: round1, 2: round2
  },
  getters: {
    isLoading: state => state.loading,
    isRegistrationOpen: state => state.registration,
    isAuthenticated: state => state.authenticated,
    getUser: state => state.user,
    isSignedUp: state => state.authenticated && state.user.registerStatus !== "pending",
    getJudgeObject: state => state.judgeObject,
    getCurrentJudgingRound: state => state.currentJudgingRound,
  },
  mutations: {
    setLoading: (state, payload) => (state.loading = payload),
    setRegistrationStatus: (state, payload) => (state.registration = payload),
    setCurrentJudgingRound: (state, payload) => (state.currentJudgingRound = payload),
    authenticate: (state, payload) => {
      state.authenticated = true;
      state.token = payload.authToken;
      state.user = { ...payload };
    },
    signout: state => {
      state.user = {};
      state.token = "";
      state.authenticated = false;
    },
    updateUserObject: (state, payload) => {
      state.user = { ...payload };
    },
    setJudgeObject: (state, payload) => (state.judgeObject = payload),
    removeTeamFromJudgeArray: (state, payload) => {
      const index = state.judgeObject.teams[payload.challengeName].indexOf(payload.teamNumber);
      state.judgeObject.teams[payload.challengeName].splice(index, 1);
    }
  },
  actions: {
    loadingStart: context => {
      context.commit("setLoading", true);
    },
    loadingEnd: context => {
      context.commit("setLoading", false);
    },
    registrationOpened: context => {
      context.commit("setRegistrationStatus", "opened");
    },
    registrationClosed: context => {
      context.commit("setRegistrationStatus", "closed");
    },
    setJudgingRound: (context, payload) => {
      context.commit("setCurrentJudgingRound", payload);
    },
    signIn: (context, payload) => {
      context.commit("authenticate", payload);
    },
    signOut: context => {
      context.commit("signout");
      localStorage.removeItem("user-token");
      delete axios.defaults.headers.common.Authorization;
    },
    updateUser: context => {
      axios
        .get("/api/users/self", { withCredentials: true })
        .then(res => {
          context.commit("updateUserObject", res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    updateJudgeObject: (context, payload) => {
      context.commit("setJudgeObject", payload);
    },
    markTeamAsRanked: (context, payload) => {
      context.commit("removeTeamFromJudgeArray", payload);
    }
  }
});
