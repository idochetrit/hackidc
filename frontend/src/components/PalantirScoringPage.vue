<template>
    <div class="container-fluid">
        <div class="container">
            <img class="herzel" src="../../static/herzel_black.png">
            <h2>Palantir Challenge Scoring</h2>
            <img class="company_logo" src="../../static/palantir_logo.png" alt="PalantirLogo">
            <h3>Select the team number down below and vote by the given parameters</h3>
            <div class="alert alert-warning">
                <h6>Want to go to another competition?</h6>
                <router-link tag="button" to="/judging-landing"
                             class="btn btn-warning text-light">
                    <strong>Back to Judging Area</strong>
                </router-link>
            </div>
            <div class="row">
                <Scoring :challengeName="challengeName" :judge="judge" />
            </div>
        </div>
    </div>
</template>

<script>
  import axios from "axios";
  import Scoring from "./Scoring";

  export default {
    computed: {
      judge() {
        return this.$store.getters.getJudgeObject;
      },
      challengeName() {
        return this.$route.params.challengeName;
      }
    },
    components: {
      Scoring
    },
  };
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
        align-items: center;
        justify-content: center;
    }

    .herzel {
        width: 10%;
        margin-bottom: 2rem;
    }

    .company_logo {
        width: 20%;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    .alert {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h2 {
        text-align: center;
        font-weight: bold;
    }

    h3 {
        font-size: 1.3rem;
        margin-bottom: 2rem;
        text-align: center;
    }

    .row {
        width: 100%;
        padding: 1rem;
    }

    @media screen and (max-width: 1440px) and (min-width: 1201px) {
        .container {
            width: 80%;
        }
    }

    @media screen and (max-width: 1200px) {
    }

    @media screen and (max-width: 767px) {
        .container-fluid {
            padding: 8rem 0 4rem 0;
        }

        .row {
            padding: 0 1rem;
        }

        .herzel {
            width: 20%;
        }

        .company_logo {
            width: 50%;
        }

        h3 {
            font-size: 1.2rem;
            padding: 0 .5rem;
        }
    }

    @media screen and (max-width: 380px) {
        .container-fluid {
            padding: 6rem 0 4rem 0;
        }

        h5 {
            font-size: 1rem;
        }

        h4 {
            font-size: 1.2rem;
        }

        h3 {
            font-size: 1.1rem;
            padding: 0 .5rem;
        }

        h2 {
            font-size: 1.3rem;
        }

        p {
            font-size: .9rem;
        }
    }
</style>