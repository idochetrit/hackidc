<template>
    <div class="challengePickerWrapper">
        <h4>Do you want to compete in a sponsor's challenge?</h4>
        <div class="formWrapper">
            <div v-for="(challenge, i) in challenges" :key="i"
                 class="form-check form-check-inline">
                <input v-model="challengePick" class="form-check-input" type="radio" name="challengePick"
                       :id="challenge.name" :value="challenge.value">
                <label class="form-check-label" :for="challenge.name">{{ challenge.name }}</label>
            </div>
        </div>
        <div class="alert alert-warning">
            <p>By default, your team is competing in HackIDC general competition.
                <br>If you want to compete, <strong>in addition to the general competition</strong>, in one of this year
                challenges, please select it.
                <br>Otherwise, select 'None'.</p>
        </div>
        <button @click="sendChallengePick"
                class="btn btn-md btn-warning text-white"><strong>Submit</strong></button>
        <div class="alert-inline alert alert-success"
             v-if="submitted"
             :class="{'show': submitted, 'hide': !submitted}">Got it! Thank you.</div>
        <div class="alert-inline alert alert-danger"
             v-if="failedToUpdate"
             :class="{'show': failedToUpdate, 'hide': !failedToUpdate}">Oops, Challenge picking is closed.</div>
        <hr>
    </div>
</template>

<script>
  import axios from "axios";
  export default {
    props: {
      team: {
        required: true,
        type: Object
      }
    },
    data() {
      return {
        submitted: false,
        failedToUpdate: false,
        challenges: [
          { name: "None", value: null },
          { name: "Elbit", value: "elbit" },
          { name: "Fake News (Palantir)", value: "palantir" },
          { name: "Mizrahi Tefahot", value: "mizrahi" }
        ],
        challengePick: null
      };
    },
    methods: {
      constructChallengePickObjcet() {
        return {
          teamCodeNumber: this.team.codeNumber,
          challengePick: this.challengePick
        }
      },
      showConfirmation() {
        setTimeout(() => {
          this.submitted = true;
          setTimeout(() => {
            this.submitted = false;
          }, 2000)
        }, 500);
      },
      showError() {
        setTimeout(() => {
          this.failedToUpdate = true;
          setTimeout(() => {
            this.failedToUpdate = false;
          }, 2000)
        }, 500);
      },
      sendChallengePick() {
        const challengePickObject = this.constructChallengePickObjcet();
        axios.defaults.withCredentials = true;
        return axios.put("/api/teams/self/challenge", challengePickObject)
          .then(res => {
            this.$store.dispatch("updateUser", res.data);
            this.showConfirmation();
          })
          .catch(err => {
            console.log(err);
            this.challengePick = this.team.challengeName;
            this.showError();
          });
      }
    },
    mounted() {
      this.challengePick = this.team.challengeName;
    }
  };
</script>

<style scoped>
    .challengePickerWrapper {
        width: 100%;
    }

    .formWrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        margin: 1rem 0;
    }

    .form-check {
        margin: 0 .5rem;
        display: flex;
        flex-direction: row;
        align-items: baseline;
    }
    .alert-inline {
        padding: .5rem 1rem;
        margin: 0 .5rem;
        display: inline;
    }
    .show {
        animation: fadeInAndOut 3.5s 0s ease-out;
    }
    @keyframes fadeInAndOut {
        0% {opacity: 0;}
        10% {opacity: 1;}
        90% {opacity: 1;}
        100% {opacity: 0;}
    }
</style>
