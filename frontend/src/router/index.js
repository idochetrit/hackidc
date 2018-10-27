import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home.vue";
import Schedule from "../components/Schedule.vue";
import Resources from "../components/Resources.vue";
import FAQ from "../components/FAQ.vue";
import Team from "../components/Team.vue";
import Registration from "../components/Registration.vue";
import Login from "../components/Login.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        title: "HackIDC 2019 | Home"
      },
      component: Home
    },
    {
      path: "/schedule",
      name: "schedule",
      meta: {
        title: "HackIDC 2019 | Schedule"
      },
      component: Schedule
    },
    {
      path: "/team",
      name: "team",
      meta: {
        title: "HackIDC 2019 | The Team"
      },
      component: Team
    },
    {
      path: "/resources",
      name: "resources",
      meta: {
        title: "HackIDC 2019 | Resources"
      },
      component: Resources
    },
    {
      path: "/faq",
      name: "faq",
      meta: {
        title: "HackIDC 2019 | FAQ"
      },
      component: FAQ
    },
    {
      path: "/signup",
      name: "signup",
      meta: {
        title: "HackIDC 2019 | Registration"
      },
      component: Registration
    },
    {
      path: "/login",
      name: "login",
      meta: {
        title: "HackIDC 2019 | Login"
      },
      component: Login
    }
  ],
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (savedPosition) resolve(savedPosition);
        else {
          resolve({ x: 0, y: 0 });
        }
      }, 300);
    });
  }
});
