import Vue from "vue";
import Router from "vue-router";
import {store} from "../store/store";
import Home from "../components/Home.vue";
import Schedule from "../components/Schedule.vue";
import Resources from "../components/Resources.vue";
import SponsorProposal from "../components/SponsorProposal.vue";
import FAQ from "../components/FAQ.vue";
import Team from "../components/Team.vue";
import Registration from "../components/Registration.vue";
import Login from "../components/Login.vue";
import Dashboard from "../components/Dashboard.vue";

Vue.use(Router);

const user = store.getters.getUser;
console.log(user);

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
      path: "/become-a-sponsor",
      name: "become-a-sponsor",
      meta: {
        title: "HackIDC 2019 | Sponsors"
      },
      component: SponsorProposal
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
      component: Registration,
      beforeEnter: (to, from, next) => {
        let status = store.getters.isRegistrationOpen;
        if (status == 'opened') {
          next();
        }
        else if (!status || status == 'closed') {
          alert("HackIDC 2019 registration is currently closed.");
          next({name: 'home'});
        }
        else {
          alert("HackIDC 2019 registration isn't open yet...");
          next({name: 'home'});
        }
      }
    },
    {
      path: "/login",
      name: "login",
      meta: {
        title: "HackIDC 2019 | Login"
      },
      component: Login
    },
    {
      path: "/dashboard",
      name: "dashboard",
      meta: {
        title: user.name + " | Dashboard"
      },
      component: Dashboard,
      children: [
        {
          path: "profile",
          meta: {
            title: user.name + " | Dashboard"
          },
          component: Dashboard
        },
        {
          path: "team",
          meta: {
            title: user.name + " | Dashboard"
          },
          component: Dashboard
        }
      ]
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
