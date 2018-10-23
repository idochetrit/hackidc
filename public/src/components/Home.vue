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
import Hero from './Hero'
import About from './About'
import Countdown from './Countdown'
import Judges from './Judges'
import Prizes from './Prizes'
import Sponsors from './Sponsors'
import Rules from './Rules'
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
