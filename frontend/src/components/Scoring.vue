<template>
    <div class="scoring-wrapper">
        <div v-if="!teamsLeftToJudge" class="noTeamsAlertDiv">
            <div class="alert alert-info">
                <strong>You don't have any teams to judge in this challenge</strong>
            </div>
            <router-link tag="button" to="/judging-landing"
                         class="btn btn-md btn-info">
                <strong>Back to Judges Area</strong>
            </router-link>
        </div>
        <div v-else class="scoring-box">
            <div v-if="teamsLeftToJudge.length" class="form-group">
                <label for="teamNumber">Select the team number to judge</label>
                <select name="teamNumber" id="teamNumber"
                        @change="resetRank"
                        class="custom-select" v-model="teamNumber">
                    <option :value="null" selected>Select...</option>
                    <option v-for="(team, i) in teamsLeftToJudge"
                            :value="team" :key="i">{{ team }}
                    </option>
                </select>
                <hr>
                <h4 class="text-info" v-if="teamNumber">
                    {{ `currently scoring team number ${teamNumber}` }}
                </h4>
            </div>
            <div v-else class="noTeamsAlertDiv">
                <div class="alert alert-success">
                    Your'e done for now, thank you!
                </div>
                <router-link v-if="challengeName !== 'general'"
                             tag="button" to="/judging-landing"
                             class="btn btn-md btn-info">
                    <strong>Back to Judging Area</strong>
                </router-link>
            </div>
            <hr>
            <div v-for="(f,i) in fields" :key="i"
                 :class="{dim: !teamNumber}"
                 class="range-input">
                <label class="label" :for="f">{{ f }}</label>
                <div class="input-wrapper">
                    <input :disabled="!teamNumber"
                           :id="f" v-model="rank[f.toLowerCase()]" type="range" min="0" max="10"
                           value="0" step="0.1"
                           class="custom-range" id="customRange1">
                    <span class="value">{{ rank[f.toLowerCase()] }}</span>
                </div>
            </div>
            <button :disabled="!teamNumber"
                    :class="{dim: !teamNumber}"
                    @click="handleRank"
                    class="btn btn-md btn-info">Rank
            </button>
        </div>
    </div>
</template>

<script>
  import axios from "axios";
  export default {
    props: ["judge"],
    data() {
      return {
        fields: ["Creativity", "Usability", "Functionality", "Awesomeness"],
        teamNumber: null,
        rank: {
          creativity: 0,
          usability: 0,
          functionality: 0,
          awesomeness: 0
        }
      };
    },
    computed: {
      userID() {
        return this.judge.id;
      },
      challengeName() {
        return this.$route.params.challengeName;
      },
      teamsLeftToJudge() {
        return this.judge.teams[this.challengeName];
      }
    },
    methods: {
      removeTeamFromJudgeArray(teamNumber) {
        this.$store.dispatch("markTeamAsRanked", {
          challengeName: this.challengeName,
          teamNumber
        });
      },
      resetTeamNumber() {
        this.teamNumber = null;
      },
      resetRank() {
        Object.keys(this.rank).forEach(key => {
          this.rank[key] = 0;
        });
      },
      rankToFloats(rankObject) {
        Object.keys(rankObject).forEach(key => {
          rankObject[key] = eval(rankObject[key]);
        });
        return rankObject;
      },
      handleRank() {
        const rankObject = {
          judgeId: this.userID,
          teamCodeNumber: this.teamNumber,
          challengeName: this.challengeName,
          parameters: {
            ...this.rankToFloats(this.rank)
          }
        };
        this.sendRank(rankObject, this.teamNumber);
      },
      setupForNewRank(teamNumber) {
        this.removeTeamFromJudgeArray(teamNumber);
        if (!this.checkForVotingEnd()) {
          this.resetRank();
          this.resetTeamNumber();
        }
      },
      checkForVotingEnd() {
        if (!this.teamsLeftToJudge || !this.teamsLeftToJudge.length) {
          this.resetTeamNumber();
          this.resetRank();
          return true;
        }
        return false;
      },
      sendRank(rankObject, teamNumber) {
        if (confirm(`Are you done with team number ${this.teamNumber}?
        * Once you send your scoring you can't go back.`)) {
          const {
            judgeId,
            teamCodeNumber,
            challengeName,
            parameters: scoreData
          } = rankObject;

          return axios.post("/api/teams/scores", {
              judgeId,
              teamCodeNumber,
              challengeName,
              scoreData
            }, {withCredentials: true})
            .then(data => {
              setTimeout(function() {
                this.$scrollTo('.scoring-wrapper', 1000);
                this.setupForNewRank(teamNumber);
              }.bind(this), 200);
            });
        }
      }
    }
  };
</script>

<style scoped>
    h4 {
        font-weight: bold;
    }

    .noTeamsAlertDiv {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .scoring-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .scoring-box {
        border-radius: 10px;
        border: 2px solid rgba(0, 0, 0, .05);
        width: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        background-color: #fff;
    }

    .range-input {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: baseline;
        width: 85%;
        margin: .5rem 0;
    }

    .dim {
        filter: grayscale(100%);
        opacity: .5;
        cursor: not-allowed;
    }

    .custom-range {
        flex-basis: 100%;
    }

    .label {
        flex-basis: 20%;
    }

    .value {
        flex-basis: 15%;
        text-align: center;
        font-weight: bold;
    }

    .btn-info {
        padding: .3rem 2rem;
        margin-top: 1rem;
    }

    .input-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }

    @media screen and (max-width: 1440px) and (min-width: 1201px) {
    }

    @media screen and (max-width: 1200px) {
    }

    @media screen and (max-width: 767px) {
        .scoring-box {
            width: 100%;
            padding: 2rem;
        }

        .range-input {
            flex-direction: column;
            width: 100%;
            margin: .5rem 0;
        }

        h3 {
            font-size: 1.2rem;
            padding: 0 .5rem;
        }

        h4 {
            text-align: center;
        }

        .alert {
            width: 100%;
            font-size: .9rem;
            text-align: center;
        }
    }

    @media screen and (max-width: 380px) {
    }
</style>