import Vue from "vue";
import Router from "vue-router";
import { store } from "../store/store";
import Home from "../components/Home.vue";
import Terms from "../components/Terms.vue";
import Schedule from "../components/Schedule.vue";
import Resources from "../components/Resources.vue";
import SponsorProposal from "../components/SponsorProposal.vue";
import MentorsProposal from "../components/MentorsProposal.vue";
import FAQ from "../components/FAQ.vue";
import Team from "../components/Team.vue";
import Exhibition from "../components/Exhibition.vue";
import Gallery from "../components/Gallery.vue";
import Registration from "../components/Registration.vue";
import RegistrationInfo from "../components/RegistrationInfo.vue";
import Login from "../components/Login.vue";
import JudgesLogin from "../components/JudgesLogin.vue";
import MentorsLogin from "../components/MentorsLogin.vue";
import UserDashboard from "../components/UserDashboard.vue";
import TeamDashboard from "../components/TeamDashboard.vue";
import TeamPage from "../components/TeamPage.vue";
import UserPage from "../components/UserPage.vue";
import JudgingLandingPage from "../components/JudgesLandingPage.vue";
import JudgingPageWrapper from "../components/JudgingPageWrapper.vue";
import FinalJudgingPage from "../components/FinalJudgingPage.vue";
import ThankYouJudge from "../components/ThankYouJudge.vue";
import StatusMessage from "../components/StatusMessage.vue";
import PageNotFound from "../components/PageNotFound.vue";
import ErrorPage from "../components/ErrorPage.vue";

Vue.use(Router);

const navigateRegistration = (to, from, next) => {
  const status = store.getters.isRegistrationOpen;
  const userStatus = store.getters.getUser.registerStatus;
  const userAuth = store.getters.isAuthenticated;
  if (status === "opened") {
    if (!userAuth || userStatus === "pending") {
      next();
    } else if (userStatus === "approved") {
      next({ name: "user-dashboard" });
    } else if (userStatus === "rejected" || userStatus === "review") {
      next({ name: "status" });
    }
  } else if (!status || status === "closed") {
    alert("HackIDC 2019 registration is currently closed.");
    next({ name: "home" });
  } else {
    alert("HackIDC 2019 registration isn't open yet...");
    next({ name: "home" });
  }
};

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
      path: "/terms",
      name: "terms",
      meta: {
        title: "HackIDC 2019 | Terms & Conditions"
      },
      component: Terms
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
      path: "/digital-art-exhibition",
      name: "exhibition",
      meta: {
        title: "HackIDC 2019 | Digital Art Exhibition"
      },
      component: Exhibition
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
      path: "/gallery",
      name: "gallery",
      meta: {
        title: "HackIDC 2019 | Gallery"
      },
      component: Gallery
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
      path: "/mentors-and-judges",
      name: "mentors-and-judges",
      meta: {
        title: "HackIDC 2019 | Mentors & Judges"
      },
      component: MentorsProposal
    },
    {
      path: "/faq",
      name: "faq",
      meta: {
        title: "HackIDC 2019 | FAQ"
      },
      component: FAQ
    },
    // {
    //   path: "/signup-info",
    //   name: "signup-info",
    //   meta: {
    //     title: "HackIDC 2019 | Registration"
    //   },
    //   component: RegistrationInfo
    // },
    // {
    //   path: "/signup",
    //   name: "signup",
    //   meta: {
    //     title: "HackIDC 2019 | Registration"
    //   },
    //   component: Registration,
    //   beforeEnter: navigateRegistration
    // },
    {
      path: "/login",
      name: "login",
      meta: {
        title: "HackIDC 2019 | Login"
      },
      component: Login
    },
    {
      path: "/judges-login",
      name: "judges-login",
      meta: {
        title: "HackIDC 2019 | Judges Login"
      },
      component: JudgesLogin,
      beforeEnter(to, from, next) {
        if (
          store.getters.getCurrentJudgingRound >= 1 &&
          store.getters.getCurrentJudgingRound <= 2
        ) {
          next();
        } else {
          next({ name: "home" });
        }
      }
    },
    {
      path: "/mentors-login",
      name: "mentors-login",
      meta: {
        title: "HackIDC 2019 | Mentor Login"
      },
      component: MentorsLogin
    },
    {
      path: "/status-message",
      name: "status",
      meta: {
        title: "HackIDC 2019 | Your Status"
      },
      component: StatusMessage
    },
    {
      path: "/dashboard/users/profile",
      name: "user-dashboard",
      meta: {
        title: "HackIDC 2019 | Dashboard"
      },
      component: UserDashboard,
      beforeEnter: (to, from, next) => {
        store.getters.isAuthenticated ? next() : next({ name: "home" });
      }
    },
    {
      path: "/dashboard/teams/:codeNumber",
      name: "team-dashboard",
      meta: {
        title: "HackIDC 2019 | Dashboard"
      },
      component: TeamDashboard,
      beforeEnter: (to, from, next) => {
        store.getters.isAuthenticated ? next() : next({ name: "home" });
      }
    },
    {
      path: "/judging-landing",
      name: "judging-landing",
      meta: {
        title: "HackIDC 2019 | Welcome, Judge!"
      },
      component: JudgingLandingPage,
      beforeEnter: (to, from, next) => {
        store.getters.isAuthenticated ? next() : next({ name: "home" });
      }
    },
    {
      path: "/judging/:challengeName",
      name: "judging-page",
      meta: {
        title: "HackIDC 2019 | Team Scoring"
      },
      component: JudgingPageWrapper,
      beforeEnter: (to, from, next) => {
        const challenges = ["general", "elbit", "palantir", "mizrahi"];
        if (challenges.includes(to.params.challengeName) && store.getters.isAuthenticated) {
          next();
        } else {
          next({ name: "home" });
        }
      }
    },
    {
      path: "/judging/general/final",
      name: "judging-final",
      meta: {
        title: "HackIDC 2019 | Final"
      },
      component: FinalJudgingPage,
      beforeEnter(to, from, next) {
        if (store.getters.isAuthenticated && store.getters.getCurrentJudgingRound === 2) {
          next();
        } else {
          next({ name: "home" });
        }
      }
    },
    {
      path: "/judging/final/thank-you",
      name: "thank-you-judge",
      meta: {
        title: "HackIDC 2019 | Thank You!"
      },
      component: ThankYouJudge,
      beforeEnter(to, from, next) {
        store.getters.isAuthenticated ? next() : next({ name: "home" });
      }
    },
    // public routes
    {
      path: "/teams/:codeNumber",
      name: "team-page",
      meta: {
        title: "HackIDC 2019 | Teams"
      },
      component: TeamPage
    },
    {
      path: "/users/:id",
      name: "user-page",
      meta: {
        title: "HackIDC 2019 | Users"
      },
      component: UserPage
    },
    {
      path: "/error-page",
      name: "error-page",
      meta: {
        title: "Oops!"
      },
      component: ErrorPage
    },
    {
      path: "/page-not-found",
      name: "404",
      meta: {
        title: "Page Not Found"
      },
      component: PageNotFound
    },
    {
      path: "*",
      redirect: { name: "home" }
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
