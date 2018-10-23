import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Schedule from '../components/Schedule'
import Resources from '../components/Resources'
import FAQ from '../components/FAQ'
import Team from '../components/Team'
import Registration from '../components/Registration'
import Login from '../components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: 'HackIDC 2019 | Home'
      },
      component: Home
    },
    {
      path: '/schedule',
      name: 'schedule',
      meta: {
        title: 'HackIDC 2019 | Schedule'
      },
      component: Schedule
    },
    {
      path: '/team',
      name: 'team',
      meta: {
        title: 'HackIDC 2019 | The Team'
      },
      component: Team
    },
    {
      path: '/resources',
      name: 'resources',
      meta: {
        title: 'HackIDC 2019 | Resources'
      },
      component: Resources
    },
    {
      path: '/faq',
      name: 'faq',
      meta: {
        title: 'HackIDC 2019 | FAQ'
      },
      component: FAQ
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      meta: {
        title: 'HackIDC 2019 | Registration'
      },
      component: Registration
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: 'HackIDC 2019 | Login'
      },
      component: Login
    },
  ],
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (savedPosition) resolve(savedPosition);
        else {
          resolve({ x: 0, y: 0 });
        }
      }, 300);
    })
  },
})
