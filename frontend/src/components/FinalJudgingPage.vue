<template>
    <div class="container-fluid">
        <div class="container" v-if="currentJudgingRound === 2">
            <img class="herzel" src="../../static/herzel_black.png">
            <h2>Judges Area - <span class="text-danger">Final Round</span></h2>
            <br>
            <h5>In HackIDC 2019, there are 7 teams competing in the final round.</h5>
            <h5>Decide which team should reach the 1st, 2nd and 3rd place, in your opinion.</h5>
            <h5><strong>Fill in their team numbers in the correct place</strong></h5>
            <button v-scroll-to="'#form'" class="btn btn-danger btn-small">CHOOSE HERE</button>
            <hr>
            <h4>These teams qualified to the final round:</h4>
            <small>Mobile users: Scroll right to see all team members</small>
            <div class="row">
                <FinalRoundTeamDisplay v-for="(team, i) in finalTeams" :team="team" :key="i"/>
            </div>
            <hr>
            <FinalRoundForm id="form" :teams="finalTeams" :judge="judge"/>
        </div>
    </div>
</template>

<script>
  import FinalRoundTeamDisplay from "./FinalRoundTeamDisplay";
  import FinalRoundForm from "./FinalRoundForm";

  import axios from "axios"

  export default {
    components: {
      FinalRoundTeamDisplay,
      FinalRoundForm
    },
    data() {
      return {
        finalTeams: []
      };
    },
    computed: {
      judge() {
        return this.$store.getters.getJudgeObject;
      },
      currentJudgingRound() {
        return this.$store.getters.getCurrentJudgingRound;
      }
    },
    beforeMount() {
      return axios.get("/api/judges/self/teams/final", { withCredentials: true })
        .then(res => res.data)
        .then(data => {
          this.finalTeams = data.finalRoundTeams;
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

    h2 {
        text-align: center;
        font-weight: bold;
    }

    h3 {
        font-size: 1.3rem;
        margin-bottom: 2rem;
        text-align: center;
    }

    h4 {
        font-size: 1.3rem;
        text-align: center;
    }

    h5 {
        text-align: center;
    }

    .row {
        width: 100%;
        padding: 1rem;
    }

    @media screen and (max-width: 1440px) {
        .container-fluid {
            min-height: 1200px;
        }

        .herzel {
            margin-bottom: 1rem;
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