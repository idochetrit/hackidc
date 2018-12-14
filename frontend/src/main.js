// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueScrollTo from "vue-scrollto";
import Vuelidate from "vuelidate";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import { store } from "./store/store";

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(VueScrollTo, {
  duration: 650,
  easing: [0.645, 0.045, 0.355, 1],
  offset: -150
});

const token = localStorage.getItem("user-token");
if (token) {
  axios.defaults.headers.common['Authorization'] = token;
}

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  store.dispatch("loadingStart");
  next();
});

router.afterEach((to, from, next) => {
  setTimeout(() => {
    store.dispatch("loadingEnd");
  }, 1600);
});
