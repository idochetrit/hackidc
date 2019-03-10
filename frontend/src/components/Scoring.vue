<template>
    <div class="scoring-wrapper">
        <div class="scoring-box">
            <div v-if="hasMoreTeamsToJudge" class="form-group">
                <label for="teamNumber">Select the team number to judge</label>
                <select name="teamNumber" id="teamNumber"
                        @change="resetRank"
                        class="custom-select" v-model="teamNumber">
                    <option :value="null" selected>Select...</option>
                    <option v-for="(team, i) in judgeTeams"
                            v-if="!team.isRanked"
                            :value="team.number" :key="i">{{ team.number }}
                    </option>
                </select>
            </div>
            <div v-else class="alert alert-success alert-block">
                Your'e done for now, thank you!
                <br><strong>HackIDC 2019 team</strong>
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
  export default {
    props: ["judge"],
    data() {
      return {
        hasMoreTeamsToJudge: true,
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
      judgeTeams() {
        return [
          ...this.judge.judgeTeamsInChallenges,
          ...this.judge.judgeTeamsInGeneralComp
        ].map(team => ({
          number: team,
          isRanked: false
        }));
      }
    },
    methods: {
      removeTeamFromJudgeArray(teamNumber) {
        this.judgeTeams.forEach(team => {
          if (team.number === teamNumber) team.isRanked = true
        })
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
          teamNumber: this.teamNumber,
          parameters: {
            ...this.rankToFloats(this.rank)
          }
        };
        this.sendRank(rankObject, this.teamNumber);
      },
      setupForNewRank(teamNumber) {
        if (this.checkForVotingEnd()) return;
        this.removeTeamFromJudgeArray(teamNumber);
        this.resetRank();
        this.resetTeamNumber();
      },
      checkForVotingEnd() {
        this.judgeTeams.forEach(team => {
          if (!team.isRanked) {
            return false;
          }
        });
        this.hasMoreTeamsToJudge = false;
        this.resetTeamNumber();
        this.resetRank();
        return true;
      },
      sendRank(rankObject, teamNumber) {
        // TODO: send rank to DB
        console.log(rankObject);
        this.setupForNewRank(teamNumber);
      }
    }
  };
</script>

<style scoped>
    h4 {
        font-weight: bold;
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

        .alert {
            width: 100%;
            font-size: .9rem;
            text-align: center;
        }
    }

    @media screen and (max-width: 380px) {
    }
</style>