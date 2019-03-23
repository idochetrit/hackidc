<template>
    <div class="formWrapper">
        <h4><strong>Who's your winning team?</strong></h4>
        <h5 class="text-gold place"><strong>1st</strong></h5>
        <div class="row placeWrapper">
            <div v-for="(team, i) in teams" :key="uniqueKey(team, 1)" class="form-check form-check-inline">
                <input v-model="judgeFirstPlace" :value="team.codeNumber"
                       class="form-check-input" type="radio"
                       :disabled="judgeSecondPlace === team.codeNumber || judgeThirdPlace === team.codeNumber"
                       :class="{'dim': judgeSecondPlace === team.codeNumber || judgeThirdPlace === team.codeNumber}"
                       :id="uniqueKey(team, 1)" value="option1" name="1st">
                <label class="form-check-label"
                       :class="{'dim': judgeSecondPlace === team.codeNumber || judgeThirdPlace === team.codeNumber}"
                       :for="uniqueKey(team, 1)">{{ team.codeNumber }}</label>
            </div>
        </div>
        <hr>
        <h5 class="text-silver place"><strong>2nd</strong></h5>
        <div class="row placeWrapper">
            <div v-for="(team, i) in teams" :key="uniqueKey(team, 2)" class="form-check form-check-inline">
                <input v-model="judgeSecondPlace" :value="team.codeNumber"
                       class="form-check-input" type="radio"
                       :disabled="judgeFirstPlace === team.codeNumber || judgeThirdPlace === team.codeNumber"
                       :class="{'dim': judgeFirstPlace === team.codeNumber || judgeThirdPlace === team.codeNumber}"
                       :id="uniqueKey(team, 2)" value="option1" name="2nd">
                <label class="form-check-label"
                       :class="{'dim': judgeFirstPlace === team.codeNumber || judgeThirdPlace === team.codeNumber}"
                       :for="uniqueKey(team, 2)">{{ team.codeNumber }}</label>
            </div>
        </div>
        <hr>
        <h5 class="text-bronze place"><strong>3rd</strong></h5>
        <div class="row placeWrapper">
            <div v-for="(team, i) in teams" :key="uniqueKey(team, 3)" class="form-check form-check-inline">
                <input v-model="judgeThirdPlace" :value="team.codeNumber"
                       class="form-check-input" type="radio"
                       :disabled="judgeFirstPlace === team.codeNumber || judgeSecondPlace === team.codeNumber"
                       :class="{'dim': judgeFirstPlace === team.codeNumber || judgeSecondPlace === team.codeNumber}"
                       :id="uniqueKey(team, 3)" value="option1" name="3rd">
                <label class="form-check-label"
                       :class="{'dim': judgeFirstPlace === team.codeNumber || judgeSecondPlace === team.codeNumber}"
                       :for="uniqueKey(team, 3)">{{ team.codeNumber }}</label>
            </div>
        </div>
        <hr>
        <button @click="sendFinalScore"
                :disabled="!judgeThirdPlace || !judgeSecondPlace || !judgeThirdPlace"
                class="btn btn-danger btn-block btn-small">SEND YOUR SCORE!
        </button>
    </div>
</template>

<script>
  import axios from "axios";

  export default {
    data() {
      return {
        judgeFirstPlace: null,
        judgeSecondPlace: null,
        judgeThirdPlace: null
      };
    },
    props: {
      judge: {
        required: true,
        type: Object
      },
      teams: {
        required: true,
        type: Array
      }
    },
    methods: {
      uniqueKey(team, place) {
        return `${team.codeName}--${team.codeNumber}--${place}`;
      },
      constructFinalScoreObject() {
        return {
          judgeId: this.judge.id,
          challengeName: "general",
          teamCodeNumber: null,
          scoreData: {
            firstPlace: this.judgeFirstPlace,
            secondPlace: this.judgeSecondPlace,
            thirdPlace: this.judgeThirdPlace
          }
        };
      },
      redirectToThankYouJudge() {
        this.$router.push({ name: "thank-you-judge" });
      },
      sendFinalScore() {
        if (confirm("Are you sure these are your 3 winning teams?")) {
          const finalScoreObject = this.constructFinalScoreObject();
          axios.post("/api/teams/scores", finalScoreObject, {withCredentials: true})
            .then(() => {
              this.redirectToThankYouJudge();
            })
            .catch(() => {
              this.$router.push({name: "error-page"})
            });

          // notice: for mock
          console.log(finalScoreObject);
        }
      }
    }
  };
</script>

<style scoped>
    .formWrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .placeWrapper {
        display: flex;
        flex-direction: row;
        align-items: baseline;
        justify-content: space-between;
        margin-bottom: 1rem;
    }

    h5.place {
        font-size: 1.5rem;
    }

    .text-gold {
        color: #FFD700;
    }

    .text-silver {
        color: #ccc;
    }

    .text-bronze {
        color: #cc6633;
    }

    input, label {
        transition: all .2s 0s ease-out;
    }

    label {
        font-size: 1.1rem;
        margin: 0 .5rem;
    }

    .dim {
        opacity: .6;
    }

    @media screen and (max-width: 767px) {
        label {
            font-size: 1rem;
            margin: 0;
        }

        .placeWrapper {
            margin-bottom: .5rem;
            justify-content: center;
            padding: 0 .5rem;
        }
    }

    @media screen and (max-width: 380px) {
        .placeWrapper {
            padding: 0 2rem;
        }
    }

</style>