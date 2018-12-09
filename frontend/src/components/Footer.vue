<template>
  <div>
    <div class="container-fluid logos">
      <div class="container">
        <div class="row">
          <div v-for="(l,i) in logos" class="logos-row-item" :key="i">
            <img :src="l">
          </div>
        </div>
      </div>
    </div>
    <app-add-to-calendar></app-add-to-calendar>
    <app-footer-links></app-footer-links>
  </div>
</template>
<script>
import FooterLinks from './FooterLinks.vue'
import AddToCalendar from './AddToCalendar.vue'
export default {
  data() {
    return {
      logos: [
        require('../../static/25_efi_arazi_white_english.png'),
        require('../../static/student_union_logo.png'),
        require('../../static/25_adelson_logo_english.png'),
      ],
    }
  },
  components: {
    'app-footer-links': FooterLinks,
    'app-add-to-calendar': AddToCalendar
  }
}
</script>

<style scoped>
  .container-fluid.logos {
    background-color: #3a3f45;
    padding: 2rem 0 1rem 0;
  }
  .container .row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .logos-row-item { height: 110px; padding: .5rem 2rem; }
  .logos-row-item img { max-height: 100%; }

  @media screen and (max-width: 1440px) and (min-width: 1201px) {
    .container {width: 75%;}
    .container .row { flex-direction: row; justify-content: center; }
    .logos-row-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 90px;
      padding: .5rem 2rem;
    }
  }

  @media screen and (max-width: 1200px) {
    .logos-row-item { height: 75px; }
  }

  @media screen and (max-width: 767px) {
    .container .row { flex-direction: column; }
    .logos-row-item:nth-of-type(2) { order: -1; height: 110px; }
    .logos-row-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 80px;
      padding: .5rem 0;
    }
    .logos-col-item img { max-width: 90%; }
  }
</style>
