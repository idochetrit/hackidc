<template>
  <div>
    <div class="container-fluid logos">
      <div class="container">
        <div class="row">
          <div class="logos-col">
            <div v-for="(l,i) in leftColLogos" class="logos-col-item" :key="i">
              <img :src="l">
            </div>
          </div>
          <div class="eventLogo">
            <img src="../../static/logo_white.png">
          </div>
          <div class="logos-col">
            <div v-for="(l,i) in rightColLogos" class="logos-col-item" :key="i">
              <img :src="l">
            </div>
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
      leftColLogos: [
        require('../../static/idc_25_white_english.png'),
        require('../../static/efi_arazi_logo.png'),
      ],
      rightColLogos: [
        require('../../static/student_union_logo.png'),
        require('../../static/adelson_logo.png'),
      ]
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
  .logos-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 31%;
  }
  .logos-col-item { height: 110px; padding: .5rem 1rem; }
  .logos-col-item img { max-height: 90%; }
  .eventLogo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 31%;
  }
  .eventLogo img { max-width: 80%; }

  @media screen and (max-width: 1440px) and (min-width: 1201px) {
    .container {width: 75%;}
  }

  @media screen and (max-width: 1200px) {
    .logos-col-item { height: 90px; }
  }

  @media screen and (max-width: 767px) {
    .container .row { flex-direction: column; }
    .logos-col {
      display: flex;
      flex-direction: row;
      padding: 0;
    }
    .eventLogo { order: 1; }
    .logos-col:nth-of-type(1) { order: 2; }
    .logos-col:nth-of-type(3) { order: 2; flex-direction: row-reverse;}
    .logos-col-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 110px;
      padding: .5rem 0;
    }
    .logos-col-item img { max-width: 80%; }
    .eventLogo img {width: 60%;}
  }
</style>
