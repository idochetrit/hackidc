<template>
  <div class="container-fluid">
    <div class="container">
      <h2>The Prizes</h2>
      <br>
      <div class="row">
        <div v-for="(p, i) in prizes" :key="i" class="prizes-item">
          <img :src="p.thumbnail">
          <h4>{{ p.prize.toLocaleString('enUS')}} <span class="fas fa-shekel-sign fa-xs"></span></h4>
        </div>
      </div>
      <br>
      <div class="row">
        <h3>
            <span class="fas fa-medal fa-2x text-info"></span>
                +{{ challenges.prize.toLocaleString('enUS') }}
            <span class="fas fa-shekel-sign fa-xs"></span>
          prizes for the challenges competition winners!
        </h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      prizes: {
        first: {thumbnail: require('../../static/1.png'), prize: 15000},
        second: {thumbnail: require('../../static/2.png'), prize: 7000},
        third: {thumbnail: require('../../static/3.png'), prize: 3000},
      },
      challenges: { prize: 30000 }
    }
  }
}
</script>
<style scoped>
  .container-fluid {
    padding: 4rem 0;
  }
  .prizes-item {
    flex-basis: 33.3333333%;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .prizes-item img {
    transition: all .2s ease-out;
    width: 60%;
    margin-bottom: 1rem;
  }
  h2 {font-weight: bold; text-align: center;}
  h3 {
    font-weight: bold;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    width: 100%;
    justify-content: center;
  }
  h3 .fas {
    margin: 0 .8rem 0 .3rem;
  }
  h4 {font-weight: bold;}
  h5 {text-align: center; padding: 0; font-size: 1rem;}

  @media screen and (max-width: 1440px) and (min-width: 1201px) {
    .container {width: 75%;}
  }

  @media screen and (max-width: 1200px) {
    .container-fluid {padding: 2rem .5rem;}
  }

  @media screen and (max-width: 767px) {
    h3 {
      font-size: 1.2rem;
    }
    h4 {font-size: 1.3rem;}
  }

  @media screen and (max-width: 360px) {
      h3 {
          font-size: .9rem;
      }
  }
</style>
