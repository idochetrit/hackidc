<template>
    <div class="scoring-wrapper">
        <div class="scoring-box">
            <h4>Round #1 Scoring</h4>
            <h5>Please rank the team by the following parameters</h5>
            <hr>
            <div v-for="(f,i) in fields" :key="i" class="range-input">
                <label class="label" :for="f">{{ f }}</label>
                <input :id="f" v-model="firstScore[f.toLowerCase()]" type="range" min="0" max="10"
                       value="0" step="0.1"
                       class="custom-range" id="customRange1">
                <span class="value">{{ firstScore[f.toLowerCase()] }}</span>
            </div>
            <button class="btn btn-md btn-info">Rank</button>
        </div>
    </div>
</template>

<script>
    import SingleScoringInput from "./SingleScoringInput"
    export default {
      data() {
        return {
          fields: ["Creativity", "Usability", "Functionality", "Awesomeness"],
          firstScore: {
            creativity: 0,
            usability: 0,
            functionality: 0,
            awesomeness: 0
          }
        }
      },
      components: {
        rangeInput: SingleScoringInput
      }
    }
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
        border: 2px solid rgba(0,0,0,.05);
        width: 70%;
        /*max-width: 70%;*/
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
    }
    .range-input {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: baseline;
        width: 85%;
        margin: .5rem 0;
    }
    .custom-range {
        padding: 0 1rem;
        flex-basis: 70%;
    }
    .label { flex-basis: 20%; }
    .value {
        flex-basis: 20%;
        text-align: center;
        font-weight: bold;
    }
    .btn-info { padding: .3rem 2rem; margin-top: 1rem; }
</style>