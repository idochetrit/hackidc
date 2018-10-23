<template>
  <div>
    <div class="container-fluid logos">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 eventLogo">
            <img class="footerLogo" src="../../static/logo_white.png">
          </div>
          <div class="col-lg-6 coop">
            <div v-for="(l,i) in logos" class="footerLogo" :key="i">
              <img :src="l">
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-footer-links></app-footer-links>
  </div>
</template>
<script>
import FooterLinks from './FooterLinks.vue'
export default {
  data() {
    return {
      logos: [
        '../../static/idc_herzliya_logo.png',
        '../../static/efi_arazi_logo.png',
        '../../static/iec_logo.png',
        '../../static/student_union_logo.png',
      ]
    }
  },
  components: {
    'app-footer-links': FooterLinks
  }
}
</script>
<style scoped>
  .container-fluid.logos {
    background-color: #3a3f45;
    padding: 2rem 0;
  }
  .container .row {
    display: flex;
    justify-content: center;
  }
  .coop {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
  .eventLogo {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .eventLogo img {
    width: 75%;
    margin: 0 auto;
  }
  .footerLogo {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
  }
  .footerLogo img {width: 50%;}
  .footerLogo:nth-of-type(2) img {width: 80%;}
</style>
