<template>
    <div class="container-fluid">
        <div class="container">
            <img class="herzel" src="../../static/herzel_black.png">
            <h2>General Competition Scoring</h2>
            <h3>Select the team number down below and vote by the given parameters</h3>
            <div class="alert alert-warning">
                <h5>For sponsors' challenges scoring:</h5>
                <div class="challengesButtons">
                    <router-link tag="button" to="/judging/elbit-_scoring" class="btn btn-lg btn-warning">Elbit</router-link>
                    <router-link tag="button" to="/judging/mizrahi-_scoring" class="btn btn-lg btn-warning">Mizrahi Tefahot</router-link>
                    <router-link tag="button" to="/judging/palantir-_scoring" class="btn btn-lg btn-warning">Palantir</router-link>
                </div>
            </div>
            <div class="row">
                <Scoring :challengeName="challengeName" :judge="mockjudge" />
            </div>
        </div>
    </div>
</template>

<script>
  import mockJudgeObject from "../assets/mockJudge";
  import Scoring from "./Scoring"

  export default {
    data() {
      return {
        challengeName: "general",
        mockjudge: mockJudgeObject
      }
    },
    computed: {
      judge() {return this.$store.getters.getUser;},
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

    h2 {
        text-align: center;
        font-weight: bold;
    }

    h3 {
        font-size: 1.3rem;
        margin-bottom: 2rem;
        text-align: center;
    }

    h5 {
        text-align: center;
    }

    .row {
        width: 100%;
        padding: 1rem;
    }

    .challengesButtons {
        display: flex;
        flex-direction: row;
        margin-bottom: 1rem;
    }

    .challengesButtons button {
        margin: 0 .5rem;
        color: #fff;
        font-weight: bold;
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