<template>
  <div class="container-fluid">
    <div class="container">
      <div class="row topBanners">
        <div class="logo-wrapper"><img class="topBannerLogo" src="../../static/25_idc_logo_english.png"></div>
        <div class="logo-wrapper"><img class="topBannerLogo" src="../../static/student_union_logo.png"></div>
      </div>
      <div class="row">
        <div class="offset-lg-1 col-lg-10">
          <img class="logo" src="../../static/logo_white.png">
          <h1>2019</h1>
          <div class="buttons">
            <button @click="toRegistrationForm" v-if="registration === 'opened' && !this.$store.getters.isAuthenticated" class="btn btn-info btn-lg">SIGN UP!</button>
            <button v-scroll-to="'#about'" class="btn btn-outline-light btn-lg">What's New?</button>
          </div>
          <hr>
          <h4>April 11th-12th</h4>
          <h2>IDC Herzliya</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      registration() {return this.$store.getters.isRegistrationOpen;}
    },
    methods: {
      toRegistrationForm() {
        this.$router.push({name: 'signup-info'})
      }
    }
  }
</script>

<style scoped>
  .container-fluid {
    margin-top: 4rem;
    padding: 2rem 0 8rem 0;
    background-size: cover;
    background: url('../../static/hero.jpg') no-repeat bottom;
    display: flex;
    align-items: center;
  }
  .container {
    opacity: 0;
    animation: fadeIn 2.5s .5s ease-out forwards;
  }
  .container .row > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
  .topBanners {
    margin-top: 1rem;
    padding: 0 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .logo-wrapper:nth-of-type(1) { flex-basis: 20%; }
  .logo-wrapper:nth-of-type(2) { flex-basis: 10%; }
  .topBannerLogo { max-width: 100%; }
  .topBannerLogo:last-of-type { margin-top: .5rem; }
  .logo {
    max-width: 50%;
    animation: pulse 5s 2.5s infinite ease-in-out;

  }
  .buttons {
    display: flex;
    flex-direction: row;
  }
  h1 {
    margin: .5rem 0 2rem 0;
    font-size: 4rem;
    font-weight: bold;
  }
  h2 {
    font-size: 2.5rem;
  }
  button {
    padding-right: 3rem;
    padding-left: 3rem;
    margin: 0 .3rem;
  }
  @keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }
  @keyframes pulse {
    0% {transform: scale(1);}
    25% {transform: scale(1.05);}
    50% {transform: scale(1);}
    100% {transform: scale(1);}
  }

  @media screen and (max-width: 1440px) and (min-width: 1201px) {
    .container {width: 75%;}
  }

  @media screen and (max-width: 1200px) {
    .container-fluid {padding: 3.5rem 0 6rem 0;}
  }

  @media screen and (max-width: 767px) {
    .topBanners { margin-top: 0; }
    .topBannerLogo:last-of-type { margin-top: 0; }
    .container-fluid {padding: 2.5rem 0 6rem 0;}
    .logo-wrapper:nth-of-type(1) { flex-basis: 30%; }
    .logo-wrapper:nth-of-type(2) { flex-basis: 15%; }
    .logo {max-width: 70%;}
    button {
      padding-right: 1.5rem;
      padding-left: 1.5rem;
      margin: 0 .3rem;
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 380px) {
    button {
      padding-right: 1.5rem;
      padding-left: 1.5rem;
      margin: 0 .3rem;
      font-size: 1rem;
    }
  }
</style>
