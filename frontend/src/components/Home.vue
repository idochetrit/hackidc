<template>
  <div>
    <app-hero></app-hero>
    <app-countdown></app-countdown>
    <app-about></app-about>
    <app-judges></app-judges>
    <app-prizes></app-prizes>
    <app-sponsors></app-sponsors>
    <app-rules></app-rules>
  </div>
</template>

<script>
import Hero from './Hero.vue'
import About from './About.vue'
import Countdown from './Countdown.vue'
import Judges from './Judges.vue'
import Prizes from './Prizes.vue'
import Sponsors from './Sponsors.vue'
import Rules from './Rules.vue'
export default {
  components: {
    'app-hero': Hero,
    'app-about': About,
    'app-countdown': Countdown,
    'app-judges': Judges,
    'app-prizes': Prizes,
    'app-sponsors': Sponsors,
    'app-rules': Rules
  }
}
</script>

<style scoped>

</style>
