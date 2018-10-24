<template>
  <div class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="offset-lg-1 col-lg-10">
          <img class="logo" src="../../static/logo_white.png">
          <h1>2019</h1>
          <div class="buttons">
            <button @click="toRegistrationForm" v-if="registration === 'opened'" class="btn btn-info btn-lg">SIGN UP!</button>
            <button v-scroll-to="'#about'" class="btn btn-outline-light btn-lg">READ MORE</button>
          </div>
          <hr>
          <h4>April 11th - April 12th</h4>
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
        this.$router.push({name: 'sign-up'})
      }
    }
  }
</script>

<style scoped>
  .container-fluid {
    margin-top: 3rem;
    padding: 8rem 0;
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
  /*button.btn-info {background-color: #599ef4 !important;}*/
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

  @media screen and (max-width: 1200px) {
    .container-fluid {padding: 6rem 0;}
  }

  @media screen and (max-width: 767px) {
    .container-fluid {padding: 6rem 0;}
    .logo {max-width: 70%;}
  }
</style>
