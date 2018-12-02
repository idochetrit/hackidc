<template>
  <div>
    <div class="container-fluid logos">
      <div class="container">
        <div class="row">
            <div class="eventLogo">
              <img src="../../static/idc_25_white_english.png">
              <img src="../../static/logo_white.png">
            </div>
        </div>
        <div class="row">
          <div v-for="(l,i) in logos" class="footerLogo" :key="i">
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
        require('../../static/efi_arazi_logo.png'),
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
    justify-content: center;
  }
  .eventLogo {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1.5rem;
  }
  .eventLogo img {
    flex-basis: 35%;
    margin: 0 auto;
  }
  .eventLogo img:nth-of-type(1) {width: 50%;}
  .eventLogo img:nth-of-type(2) {width: 25%;}
  .footerLogo {
    flex-basis: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
  }
  .footerLogo img {width: 50%;}
  .footerLogo:nth-of-type(2) img {width: 50%;}
  .footerLogo:nth-of-type(1) img,
  .footerLogo:nth-of-type(3) img {width: 70%;}

  @media screen and (max-width: 1440px) and (min-width: 1201px) {
    .container {width: 75%;}
  }

  @media screen and (max-width: 1200px) {
    .container-fluid {padding: 2rem .5rem;}
    .footerLogo {padding: 0;}
    .eventLogo { padding: 0 .5rem; }
    .eventLogo img { flex-basis: 20%; }
  }

  @media screen and (max-width: 767px) {
    .eventLogo img {width: 50%;}
    .footerLogo {flex-basis: 30%; padding: 0;}
    .footerLogo img {width: 65%;}
    .footerLogo:nth-of-type(2) img {width: 55%;}
  }
</style>
