<template>
  <div class="container-fluid bg-info">
    <h3 id="registration">{{ counter.message }}</h3>
    <div class="row">
      <div class="counter offset-sm-1 col-sm-10">
        <div class="box">
          <h1>{{ counter.days }}</h1>
          <h4>Days</h4>
        </div>
        <div class="box">
          <h1>{{ counter.hours }}</h1>
          <h4>Hours</h4>
        </div>
        <div class="box">
          <h1>{{ counter.minutes }}</h1>
          <h4>Minutes</h4>
        </div>
        <div class="box">
          <h1>{{ counter.seconds }}</h1>
          <h4>Seconds</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dateCalculation from "../assets/dateCalculation";
export default {
  mixins: [dateCalculation]
}
</script>

<style scoped>
  .container-fluid {
    padding: 1.5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .counter > * {font-family: 'Fira Code', monospace;}
  h3 {
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 1rem;
  }
  h1 {font-size: 3rem; font-weight: bold;}
  h1, h4 {margin: 0; padding: 0; text-align: center}
  .counter {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .box {
    margin: 0 .2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 120px;
    min-height: 120px;
    padding: 1rem;
    background-color: rgba(0,0,0,.15);
    border-radius: 10px;
    color: #fff;
  }

  @media screen and (max-width: 767px) {
    h1 {font-size: 2rem;}
    h4 {font-size: 1rem;}
    .box {min-height: 80px; min-width: 80px; padding: .5rem;}
    .container-fluid {padding: 1rem 0;}
  }

  @media screen and (max-width: 360px) {
    .container-fluid {padding: .7rem 0;}
    h3 {font-size: 1.5rem; margin-bottom: .5rem;}
    h1 {font-size: 1.5rem;}
    h4 {font-size: .8rem;}
    .box {margin: 0 .1rem; min-height: 60px; min-width: 70px;}
  }
</style>
