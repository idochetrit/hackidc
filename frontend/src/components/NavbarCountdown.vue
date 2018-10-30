<template>
    <div class="container-fluid bg-info">
        <h5 id="registration"><span>{{ counter.message }}:</span>
            <span v-if="view < 767">{{ counter.days }}d,</span>
            <span v-else>{{ counter.days }} days,</span>
            <span v-if="view < 767">{{ counter.hours }}h,</span>
            <span v-else>{{ counter.hours }} hours,</span>
            <span v-if="view < 767">{{ counter.minutes }}m,</span>
            <span v-else>{{ counter.minutes }} minutes,</span>
            <span v-if="view < 767">{{ counter.seconds }}s</span>
            <span v-else>{{ counter.seconds }} seconds</span>
        </h5>
    </div>
</template>

<script>
import dateCalculation from "../assets/dateCalculation";
export default {
  computed: {
    view() {return document.getElementsByTagName('body')[0].clientWidth;}
  },
  mixins: [dateCalculation]
}
</script>

<style scoped>
    .container-fluid {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: .1rem 4rem;
    }
    .container-fluid > * {margin: 0; color: #fff;}
    h5 {width: 100%; text-align: center; font-weight: bold;}

    @media screen and (max-width: 767px) {
        .container-fluid {padding: .1rem 0;}
        h5 {font-size: 1rem;}
    }
</style>