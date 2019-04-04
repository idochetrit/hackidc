<template>
    <div class="container-fluid">
        <div class="container" v-if="currentJudgingRound === 1">
            <img class="herzel" src="../../static/herzel_black.png">
            <h2>Judges Area</h2>
            <h5>Welcome! Please choose below the competition you're taking part in</h5>
            <hr>
            <div class="alert alert-info alert-block">
                <h5><strong>Round #1</strong></h5>
            </div>
            <div class="row">
                <router-link v-for="(competition, i) in competitions" :key="i"
                        tag="button" :to="competition.path"
                        class="btn btn-light col-lg-3 col-md-6 col-sm-12 challenge-button">
                    <div class="col-12">
                        <img class="company_logo" :src="competition.logo">
                    </div>
                    
                    <div class="w-100 d-none d-md-block"></div>

                    <div class="col-12">
                        <h5><strong>{{ competition.name }}</strong></h5>
                        <span><strong>{{ competition.subCaption }}</strong></span>
                    </div>
                </router-link>
            </div>
        </div><div class="container" v-if="currentJudgingRound === 2">
        <img class="herzel" src="../../static/herzel_black.png">
        <h2>Judges Area</h2>
        <h5>Welcome! Please choose below the competition you're taking part in</h5>
        <hr>
        <div class="alert alert-danger alert-block">
            <h5><strong>Round #2</strong></h5>
        </div>
        <div class="row">
            <router-link v-for="(competition, i) in round2Competitions" :key="i"
                         tag="button" :to="competition.path"
                         class="btn btn-light col-lg-3 col-md-6 col-sm-12 challenge-button">
                <img class="company_logo" :src="competition.logo">
                <h5 class="text-danger"><strong>{{ competition.name }}</strong></h5>
            </router-link>
        </div>
    </div>
    </div>
</template>

<script>
  import axios from "axios";
  export default {
    data() {
      return {
        competitions: [
          {
            name: "General Competition",
            logo: require("../../static/logo_black.png"),
            path: "/judging/general"
          },
          {
            name: "Elbit Challenge",
            logo: require("../../static/elbit_logo.png"),
            path: "/judging/elbit"
          },
          {
            name: "Mizrahi Challenge",
            logo: require("../../static/mizrahi_tefahot_logo.png"),
            path: "/judging/mizrahi"
          },
          {
            name: "Fake News Challenge",
            subCaption: "by myPart (sponsored by Palantir)",
            logo: require("../../static/palantir_logo.png"),
            path: "/judging/palantir"
          }
        ],
        round2Competitions: [
          {
            name: "General Competition - Final",
            logo: require("../../static/logo_black.png"),
            path: "/judging/general/final"
          },
        ]
      };
    },
    computed: {
        currentJudgingRound() {
          return this.$store.getters.getCurrentJudgingRound;
        }
    },
    beforeCreate() {
        if (this.$store.getters.getJudgeObject) return;
        return axios.get("/api/judges/self/teams", { withCredentials: true })
            .then(res => res.data)
            .then(data => {
                const { teamsByChallenge: teams, user, summary } = data;
                this.$store.dispatch("updateJudgeObject", { id: user.id, teams, summary });
        });
    }
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

    .alert-block {
        padding: 1rem 5rem;
    }

    .alert-block h5 {
        margin: 0;
        padding: 0;
    }

    .challenge-button {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .company_logo {
        width: 100%;
        margin-bottom: 1rem;
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
        align-items: center;
        justify-content: center;
    }

    @media screen and (max-width: 1440px) {
        .container-fluid {
            min-height: 1200px;
        }

        .box {
            padding: 2rem 0 1rem 0;
            width: 400px;
            height: 450px;
        }

        .herzel {
            margin-bottom: 1rem;
        }

        .challenge-button {
            margin: 1rem 0;
        }

        h5 {
            font-size: 1.1rem;
        }

        hr {
            margin: 1.5rem;
            width: 80%;
        }
    }

    @media screen and (max-width: 767px) {
        .container-fluid {
            min-height: 0;
        }

        .herzel {
            margin-bottom: 1rem;
        }

        .challenge-button {
            margin: 1.5rem 0;
        }

        h5 {
            font-size: 1.1rem;
        }

        hr {
            margin: 1.5rem;
            width: 80%;
        }
    }

    @media screen and (max-width: 380px) {
        .container-fluid {
            min-height: 0;
        }

        .herzel {
            margin-bottom: .5rem;
        }

        h2 {
            font-size: 1.6rem;
        }

        h5 {
            font-size: 1rem;
        }

        hr {
            margin: 1.5rem;
            width: 80%;
        }
    }

</style>