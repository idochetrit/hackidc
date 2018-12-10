<template>
    <div class="container-fluid">
        <div class="container">
            <div v-if="status === 'review'" class="row">
                <span class="fas fa-envelope-open-text fa-4x"></span>
                <br>
                <h2>Your application is being reviewed</h2>
                <h4>We're currently reviewing all applicants registration forms.
                    <br>The process shouldn't take too long. Hang on!</h4>
                <hr>
                <h5><strong>HackIDC 2019 Team</strong></h5>
                <br>
                <div class="controls">
                    <button @click="toHome" class="btn btn-lg btn-secondary"><strong>Back Home</strong></button>
                    <button @click="toProfile" class="btn btn-lg btn-info"><strong>See your Profile</strong></button>
                </div>
            </div>
            <div v-else-if="status === 'rejected'" class="row">
                <span class="far fa-frown-open fa-4x"></span>
                <br>
                <h2>We're sorry!</h2>
                <h4>Thank you very much for taking the time to register this year's competition.
                    <br>
                    <br>Unfortunately, we have selected the candidates whom we believe most
                    <br>closely matches the requirements.</h4>
                <br>
                <h5>Hope to see you next year!</h5>
                <hr>
                <h5><strong>HackIDC 2019 Team</strong></h5>
                <br>
                <div class="controls">
                    <button @click="toHome" class="btn btn-lg btn-info"><strong>Back Home</strong></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import linkedInIntegration from '../assets/linkedInIntegration'

export default {
  mixins: [linkedInIntegration],
  computed: {
    user() { return this.$store.getters.getUser; },
    status() { return this.user.registerStatus; }
  },
  methods: {
    toHome() { this.$router.push({ name: "home" }); },
    toProfile() { this.$router.push({ name: "user-dashboard" }); }
  },
  created() {
    this.authRequest();
  }
}
</script>

<style scoped>
    .container-fluid {
        margin-top: 3rem;
        padding: 8rem 0;
        min-height: 1000px;
        background-color: #f7f7f7;
    }
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .row {
        background-color: #eee;
        border-radius: 15px;
        border: 1px solid #ddd;
        padding: 2rem 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .row > * {
        text-align: center;
    }
    button {margin: 0 .3rem; flex-basis: 25%;}
    .controls {
        margin: 1rem 0;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: 1440px) and (min-width: 1201px) {
        .container {width: 75%;}
        h5 {font-size: 1.1rem;}
        .row h4 {font-size: 1.2rem;}
        .row h2 {font-size: 1.5rem; margin-bottom: 1rem;}
        button {font-size: .9rem; }
    }
    @media screen and (max-width: 1200px) {
        .row {padding: 2rem 1rem;}
        .fas {font-size: 4rem;}
    }

    @media screen and (max-width: 767px) {
        .container-fluid { padding: 6rem 0; }
        .row {padding: 2rem .8rem;}
        .row h4 {font-size: 1rem;}
        .row h2 {font-size: 1.2rem; margin-bottom: 1rem;}
        .fas { font-size: 3rem; }
        button {font-size: .9rem;}
    }

    @media screen and (max-width: 380px) {
        h5 {font-size: 1rem;}
        .row h4 {font-size: 1rem;}
        .row h2 {font-size: 1.2rem; margin-bottom: 1rem;}
        .row { padding: 2rem .8rem; }
        .fas { font-size: 2.5rem; }
        button {font-size: .9rem;}
        .controls { margin: 0; }
    }
</style>