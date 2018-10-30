<template>
  <div class="nav-wrapper">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <router-link to="/" v-scroll-to="'#app'">
        <a class="navbar-brand">
          <img src="https://s3.amazonaws.com/bizzabo.users.files/BBBur1GrQ2f5CxkoDWjH_%D7%94%D7%A8%D7%A6%D7%9C%20%D7%9C%D7%91%D7%9F-01.png" width="30" height="30" class="d-inline-block align-top" alt="">
          HackIDC 2019
        </a>
      </router-link>
      <button id="toggleBtn" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link tag="li" class="nav-item mainNav-item" active-class="active" to="/" exact><a class="nav-link">home</a></router-link>
          <router-link tag="li" class="nav-item mainNav-item" active-class="active" to="/schedule" exact><a class="nav-link">schedule</a></router-link>
          <router-link tag="li" class="nav-item mainNav-item" active-class="active" to="/resources" exact><a class="nav-link">resources</a></router-link>
          <router-link tag="li" class="nav-item mainNav-item" active-class="active" to="/team" exact><a class="nav-link">the team</a></router-link>
          <router-link tag="li" class="nav-item mainNav-item" active-class="active" to="/faq" exact><a class="nav-link">FAQ</a></router-link>
          <li><a class="social mainNav-item" href="https://www.facebook.com/HackIDC/" target="_blank"><span class="fab fa-facebook fa-2x"></span></a></li>
          <li><a class="social mainNav-item" href="https://www.instagram.com/hackidc2019/" target="_blank"><span class="fab fa-instagram fa-2x"></span></a></li>
        </ul>
        <ul class="navbar-nav">
          <button v-if="!this.$store.getters.isAuthenticated" @click="toLogin" class="btn btn-md btn-info mainNav-item"><strong>Sign in</strong></button>
          <div v-else class="dropdown">
            <button class="btn btn-link dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span class="fas fa-user fa-lg"></span>Hi, <strong>{{ this.$store.getters.getUser.name | firstName }}</strong>
            </button>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu2">
              <router-link tag="button" to="/dashboard/profile" class="dropdown-item mainNav-item" type="button">My profile</router-link>
              <router-link tag="button" to="/dashboard/team" class="dropdown-item mainNav-item" type="button">My team</router-link>
              <div class="dropdown-divider"></div>
              <button @click="signout" class="dropdown-item text-danger mainNav-item"><strong>Sign out</strong></button>
            </div>
          </div>
        </ul>
      </div>
    </nav>
    <app-navbar-countdown></app-navbar-countdown>
  </div>
</template>

<script>
import NavbarCountdown from './NavbarCountdown.vue';
export default {
  components: {
    'app-navbar-countdown': NavbarCountdown
  },
  filters: {
    firstName(v) {
      let name = v.split(" ")[0];
      return name.substring(0,1).toUpperCase() + name.substring(1);
    }
  },
  methods: {
    toLogin() {
      this.$router.push({name: 'login'});
    },
    signout() {
      // implement sign-out method
    }
  },
  computed: {
    registration() {return this.$store.getters.isRegistrationOpen;}
  },
  mounted() {
    let links = Array.prototype.slice.call(document.getElementsByClassName('mainNav-item'), 0);
    let view = document.getElementsByTagName('body')[0].clientWidth;
    links.map(s => {
      s.addEventListener('click', function () {
        if (view <= 990) {
          document.getElementById('toggleBtn').click();
        }
      });
    })
  }
}
</script>

<style scoped>
  .nav-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
  }
  nav {
    padding: 1rem 3rem;
    width: 100%;
    background-color: #212426 !important;
  }
  .navbar-nav {
    display: flex;
    align-items: center;
  }
  .navbar-brand:hover > img {transform: scale(1.3)}
  .navbar-brand:hover {cursor: pointer;}
  .navbar-brand img {transition: all .2s ease-out;}
  .navbar-brand {font-weight: bold; font-size: 1.4rem; color: #fff !important;}
  .nav-link {
    text-transform: capitalize;
    transition: all .2s ease-out;
    font-size: 1.1rem;
    letter-spacing: .03rem;
  }
  .nav-item {
    border-radius: 20px;
    padding: 0 .3rem;
  }
  button {padding: .3rem 1rem; font-size: 1rem;}
  button.btn-link {color: #fff; text-decoration: none;}
  button:focus {outline: none !important;}
  .dropdown-item:hover {cursor: pointer;}
  .dropdown-item:active {background-color: #1fbed5; color: #fff;}
  .dropdown-item.text-danger:active {background-color: #f7f7f7;}
  .nav-item:hover > .nav-link , .social:hover {color: #ccc;}
  .active {font-weight: bold;}
  .social {
    padding: 0 .7rem;
    color: #fff;
    transition: all .2s ease-out;
  }
  .fas {margin-right: .7rem;}

  @media screen and (min-width: 990px) {
    .active {background-color: #333;}
  }
  /*fix devices navigation alignment*/
  @media screen and (max-width: 1000px) {
    .navbar-nav {align-items: flex-start;}
  }

  @media screen and (max-width: 1440px) {
    nav {padding: .5rem 2rem;}
  }

  @media screen and (max-width: 1200px) {
    nav {padding: .5rem 2rem;}
    button.navbar-toggler {padding: .5rem; border: none;}
    button.btn-link {font-size: 1.2rem; margin: 1rem 0 0 0;}
  }

  @media screen and (max-width: 767px) {
    nav {padding: .7rem 2rem;}
    .navbar-nav:nth-of-type(1) {margin-right: 1rem !important;}
    .nav-link {padding: .3rem .2rem; font-size: 1.2rem;}
    button.navbar-toggler {padding: .5rem; border: none;}
  }

  @media screen and (max-width: 360px) {
    nav {padding: .4rem 1rem;}
  }
</style>
