<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <router-link to="/" v-scroll-to="'#app'">
      <a class="navbar-brand">
        <img src="https://s3.amazonaws.com/bizzabo.users.files/BBBur1GrQ2f5CxkoDWjH_%D7%94%D7%A8%D7%A6%D7%9C%20%D7%9C%D7%91%D7%9F-01.png" width="30" height="30" class="d-inline-block align-top" alt="">
        HackIDC 2019
      </a>
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link tag="li" class="nav-item" active-class="active" to="/" exact><a class="nav-link">home</a></router-link>
        <router-link tag="li" class="nav-item" active-class="active" to="/schedule" exact><a class="nav-link">schedule</a></router-link>
        <router-link tag="li" class="nav-item" active-class="active" to="/resources" exact><a class="nav-link">resources</a></router-link>
        <router-link tag="li" class="nav-item" active-class="active" to="/team" exact><a class="nav-link">the team</a></router-link>
        <router-link tag="li" class="nav-item" active-class="active" to="/faq" exact><a class="nav-link">FAQ</a></router-link>
      </ul>
      <ul class="navbar-nav">
        <button v-if="registration === 'closed'" @click="toLogin" class="btn btn-sm btn-info">Sign in</button>
        <li><a class="social" href="https://www.facebook.com/HackIDC/" target="_blank"><span class="fab fa-facebook fa-2x"></span></a></li>
        <li><a class="social" href="https://www.instagram.com/hackidc2019/" target="_blank"><span class="fab fa-instagram fa-2x"></span></a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    toLogin() {
      this.$router.push({name: 'login'});
    }
  },
  computed: {
    registration() {return this.$store.getters.isRegistrationOpen;}
  }
}
</script>

<style scoped>
  nav {
    padding: 1rem 3rem;
    background-color: #212426 !important;
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
  button {padding: 0 1rem; font-size: 1rem;}
  .nav-item:hover > .nav-link , .social:hover {color: #ccc;}
  .active {font-weight: bold;}
  .social {
    padding: 0 .7rem;
    color: #fff;
    transition: all .2s ease-out;
  }

  @media screen and (min-width: 990px) {
    .active {background-color: #333;}
  }
</style>
