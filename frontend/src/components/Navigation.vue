<template>
  <div class="nav-wrapper">
    <nav class="navbar navbar-expand-xl navbar-dark bg-dark sticky-top">
      <router-link to="/" v-scroll-to="'#app'">
        <a class="navbar-brand">
          <img src="https://s3.amazonaws.com/bizzabo.users.files/BBBur1GrQ2f5CxkoDWjH_%D7%94%D7%A8%D7%A6%D7%9C%20%D7%9C%D7%91%D7%9F-01.png" width="30" height="30" class="d-inline-block align-top" alt="">
          HackIDC 2019
        </a>
      </router-link>
      <button id="toggleBtn" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapsedDiv" aria-controls="navbarCollapsedDiv" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarCollapsedDiv">
        <div class="navbar-wrapper">
          <ul class="navbar-nav mr-auto">
            <router-link v-for="(l, i) in navLinks" tag="li" class="nav-item" :data-toggle="collapse"
            data-target="#navbarCollapsedDiv" active-class="active" :to="l.path" :key="i" exact>
              <a class="nav-link">
                {{ l.name }}
              </a>
            </router-link>
            <li><a class="social" :data-toggle="collapse" data-target="#navbarCollapsedDiv" href="https://www.facebook.com/HackIDC/" target="_blank"><span class="fab fa-facebook fa-2x"></span></a></li>
            <li><a class="social" :data-toggle="collapse" data-target="#navbarCollapsedDiv" href="https://www.instagram.com/hackidc2019/" target="_blank"><span class="fab fa-instagram fa-2x"></span></a></li>
          </ul>
          <hr class="user-divider">
          <ul class="navbar-nav" v-if="this.$store.getters.isRegistrationOpen !== 'under-construction'">
            <button v-if="!this.$store.getters.isSignedUp"
                    @click="toLogin" class="btn btn-md btn-info" :data-toggle="collapse" data-target="#navbarCollapsedDiv"><strong>Sign in</strong></button>
            <div v-else class="dropdown">
              <button class="btn btn-link dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div class="thumbnail-wrapper">
                  <img v-if="!user.userPicture" class="img-responsive userThumbnail" src="https://hairo.e.f1v.co/wp-content/themes/romisa/images/placeholder.jpg">
                  <img v-else class="img-responsive userThumbnail" :src="user.userPicture">
                </div>
                <strong>{{ this.$store.getters.getUser.name | firstName }}</strong>
              </button>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu2">
                <router-link  class="dropdown-item" :data-toggle="collapse" data-target="#navbarCollapsedDiv" tag="a" :to="{ name: 'user-dashboard' }" active-class="active" exact>My Profile</router-link>
                <router-link  class="dropdown-item" :data-toggle="collapse" data-target="#navbarCollapsedDiv" tag="a" :to="{ name: 'team-dashboard', params: { codeNumber: user.team.codeNumber } }" active-class="active" exact>My Team</router-link>
                <div class="dropdown-divider"></div>
                <button @click="signout" class="dropdown-item text-danger" :data-toggle="collapse" data-target="#navbarCollapsedDiv"><strong>Sign out</strong></button>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
    <app-navbar-countdown></app-navbar-countdown>
  </div>
</template>

<script>
import NavbarCountdown from './NavbarCountdown.vue';
import axios from "axios";
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
  data() {
    return {
      navLinks: [
        {name: "home", path: "/"},
        {name: "schedule", path: "/schedule"},
        {name: "challenges", path: "/challenges"},
        {name: "resources", path: "/resources"},
        {name: "exhibition", path: "/digital-art-exhibition"},
        {name: "the team", path: "/team"},
        {name: "gallery", path: "/gallery"},
        {name: "FAQ", path: "/faq"},
      ]
    }
  },
  methods: {
    toLogin() {
      this.$router.push({name: 'login'});
    },
    signout() {
      this.$store.dispatch("signOut")
        .then(() => {
            axios.get('/api/auth/logout')
              .then((res) => {
                console.log("User logged out.", res);
              });
          })
        .then(() => {
          this.$store.dispatch("loadingStart");
          setTimeout(() => {
            this.$store.dispatch("loadingEnd");
          }, 1000);
          this.$router.push({name: 'home'});
        });
    }
  },
  computed: {
    collapse() {
      if (this.view < 990) { return "collapse"; }
      return "";
    },
    registration() {return this.$store.getters.isRegistrationOpen;},
    user() { return this.$store.getters.getUser },
    view() { return document.getElementsByTagName("body")[0].clientWidth; }
  },
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
    font-size: 1.05rem;
    letter-spacing: .03rem;
  }
  .nav-item {
    border-radius: 20px;
    padding: 0 .2rem;
  }
  button {padding: .3rem 1rem; font-size: 1rem;}
  button.btn-link {color: #fff; text-decoration: none;}
  button:focus {outline: none !important;}
  button.dropdown-toggle {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  a.dropdown-item {
    text-transform: capitalize;
    transition: all .2s ease-out;
    font-size: 1.05rem;
    letter-spacing: .02rem;
    color: rgba(255, 255, 255, .5);
  }
  .text-danger { font-size: 1.1rem; }
  .dropdown-item:hover { cursor: pointer; background-color: transparent; color: rgba(255, 255, 255, .8); }
  .dropdown-item:active { background-color: #373737; color: #fff; }
  .dropdown-item.active { color: #fff; font-weight: bold; background-color: transparent; }
  .dropdown-item.text-danger:active { background-color: #f7f7f7; }
  .nav-item:hover > .nav-link , .social:hover { color: #ccc; }
  .active { font-weight: bold; }
  .social {
    font-size: .8rem;
    padding: 0 .7rem;
    color: #fff;
    transition: all .2s ease-out;
  }
  .fas {margin-right: .7rem;}
  .thumbnail-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin-right: .5rem;
  }
  .userThumbnail {
    max-width: 100%;
  }

  /*fix devices navigation alignment*/
  @media screen and (max-width: 1000px) {
    .navbar-nav { align-items: flex-start; }
  }

  @media screen and (min-width: 1441px) {
    nav { padding: .5rem 2rem; }
    .navbar-wrapper { display: flex; flex-direction: row; align-items: center; width: 100%; }
    .dropdown-menu { background-color: rgba(33, 36, 38, 1); }
  }

  @media screen and (max-width: 1440px) {
    nav { padding: .5rem 2rem; }
    .navbar-wrapper { display: flex; flex-direction: row; align-items: center; width: 100%; }
    .dropdown-menu { background-color: rgba(33, 36, 38, 1); }
  }

  @media screen and (max-width: 1200px) {
    .navbar-nav { align-items: flex-start; }
    nav { padding: .5rem 2rem; }
    button.navbar-toggler { padding: .5rem; border: none; }
    button.btn-link { font-size: 1.2rem; margin: 1rem 0 0 0; }
    .nav-item { padding: 0 .3rem; }
    .nav-link { padding: .3rem .2rem; font-size: 1.1rem; }
    .navbar-wrapper { display: flex; flex-direction: column-reverse; align-items: flex-start; }
    .dropdown-menu { background-color: #212426; border: none; }
    .dropdown-divider { display: none; }
    hr.user-divider { border: 1px solid rgba(255,255,255,.1); width: 100%; }
    .social { font-size: .8rem; }
  }

  @media screen and (max-width: 767px) {
    nav { padding: .7rem 2rem; }
    .navbar-nav:nth-of-type(1) { margin-right: 1rem !important; }
    .nav-link { padding: .3rem .2rem; font-size: 1.1rem; }
    .btn-info { margin-top: 1rem; }
    .dropdown-toggle.btn-link { font-size: 1.1rem; }
    .dropdown-item { color: #fff; padding-left: 1rem; }
    button.navbar-toggler { padding: .5rem; border: none; }
  }

  @media screen and (max-width: 380px) {
    nav { padding: .4rem 1rem; }
    button { font-size: .8rem; }
    .nav-link { padding: .2rem .2rem; font-size: .9rem; }
    .social { font-size: .8rem; }
    a.dropdown-item { font-size: .9rem; }
    .text-danger { font-size: .9rem; }
    hr.user-divider { margin: .3rem 0; }
  }
</style>
