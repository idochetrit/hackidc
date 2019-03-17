<template>
    <GeneralScoringPage v-if="challengeName === 'general'" />
    <ElbitScoringPage v-else-if="challengeName === 'elbit'" />
    <MizrahiScoringPage v-else-if="challengeName === 'mizrahi'" />
    <PalantirScoringPage v-else-if="challengeName === 'palantir'" />
</template>

<script>
  import GeneralScoringPage from "./GeneralCompScoringPage";
  import ElbitScoringPage from "./ElbitScoringPage";
  import PalantirScoringPage from "./PalantirScoringPage";
  import MizrahiScoringPage from "./MizrahiScoringPage";

  export default {
    components: {
      GeneralScoringPage,
      MizrahiScoringPage,
      ElbitScoringPage,
      PalantirScoringPage
    },
    data() {
      return {
        judge: null
      };
    },
    computed: {
      challengeName() {
        return this.$route.params.challengeName;
      }
    },
  };
</script>

<style scoped>

</style>