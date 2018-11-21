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
                <button @click="toHome" class="btn btn-lg btn-info"><strong>Back Home</strong></button>
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
                <button @click="toHome" class="btn btn-lg btn-info"><strong>Back Home</strong></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  computed: {
    status() {
      return this.$store.getters.getUser.registerStatus;
    }
  },
  methods: {
    toHome() {
      this.$router.push({name: 'home'});
    }
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

    @media screen and (max-width: 1440px) and (min-width: 1201px) {
        .container {width: 75%;}
    }
    @media screen and (max-width: 1200px) {
        .progress-bar {width: 95%;}
        .row {padding: 2rem 1rem;}
        h5 {font-size: 1.1rem;}
        .form-row {padding: 0;}
        .form-col {flex-basis: 100%; padding: 0 1rem;}
        h1 {font-size: 2rem;}
        .row h3 {font-size: 1.4rem;}
        .row h2 {font-size: 1.7rem;}
        .fas {font-size: 4rem;}
    }

    @media screen and (max-width: 767px) {
        .alert {width: 100%;}
        .herzel {width: 20%;}
        .row {padding: 2rem 1rem;}
        .form-col {flex-basis: 100%; padding: 0;}
    }

    @media screen and (max-width: 360px) {
        .alert {width: 100%;}
        .progress-inside {font-size: .8rem;}
        h2 {font-size: 1.5rem; margin-bottom: 2rem;}
        h5 {font-size: 1rem;}
        .linkedinBtn {padding-right: 1rem; padding-left: 1rem;}
        .row {padding: 2rem 1rem;}
        .fas {font-size: 4rem;}
    }
</style>