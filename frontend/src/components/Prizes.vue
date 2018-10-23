<template>
  <div class="container-fluid">
    <div class="container">
      <h2>The Prizes</h2>
      <br>
      <div class="row">
        <div v-for="(p, i) in prizes" :key="i" class="col-lg-4 prizes-item">
          <img :src="p.thumbnail">
          <h4>{{ p.prize.toLocaleString('enUS')}} <span class="fas fa-shekel-sign fa-xs"></span></h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      prizes: {
        first: {thumbnail: '../../static/1.png', prize: 15000},
        second: {thumbnail: '../../static/2.png', prize: 7000},
        third: {thumbnail: '../../static/3.png', prize: 3000},
      }
    }
  }
}
</script>
<style scoped>
  .container-fluid {
    padding: 4rem 0;
  }
  .prizes-item {
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
  h4 {font-weight: bold;}
</style>
