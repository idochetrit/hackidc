<template>
  <div class="container-fluid">
    <h2 id="sponsors">Our Sponsors</h2>
    <h5>Want to become a HackIDC sponsor? <router-link to="/become-a-sponsor"><a><strong>More details here</strong></a></router-link></h5>
    <div class="row">
      <div v-for="(s, i) in sponsors.gold" :key="i" class="sponsors-item gold">
        <a :href="s.link" target="_blank">
          <img class="img-responsive" :src="s.logo" :title="s.name">
        </a>
      </div>
    </div>
      <hr>
      <div class="row">
        <div v-for="(s, i) in sponsors.silver" :key="i" class="sponsors-item silver">
          <a :href="s.link" target="_blank">
            <img class="img-responsive" :src="s.logo" :title="s.name">
          </a>
        </div>
      </div>
    <hr>
    <div class="row">
      <div v-for="(s, i) in sponsors.bronze" :key="i" class="sponsors-item bronze">
        <a :href="s.link" target="_blank">
          <img class="img-responsive" :src="s.logo" :title="s.name">
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sponsors: {
        gold: [
        ],
        silver: [
          {name: 'Microsoft', link: 'https://www.microsoft.com/he-il', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png'},
          {name: 'Midgal', link: 'https://www.migdal.co.il/He/Pages/MigdalHomePage.aspx', logo: 'https://upload.wikimedia.org/wikipedia/he/thumb/3/35/Migdal_Logo.svg/475px-Migdal_Logo.svg.png'},
          {name: 'Google', link: 'https://careers.google.com/locations/tel-aviv-haifa/', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2000px-Google_2015_logo.svg.png'},
        ],
        bronze: [
          {name: 'Google', link: 'https://careers.google.com/locations/tel-aviv-haifa/', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2000px-Google_2015_logo.svg.png'},
          {name: 'Essence Group', link: 'https://www.essence-grp.com/', logo: require('../../static/essence_logo.png')},
          {name: 'Minute Media', link: 'https://www.minutemedia.com/', logo: require('../../static/minutemedia_logo.png')},
        ]
      }
    }
  }
}
</script>
<style scoped>
  .container-fluid {
    padding: 4rem;
    background-color: #f7f7f7;
  }
  .row {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: .5rem 0;
  }
  h2 {font-weight: bold; text-align: center;}
  h5 {text-align: center; margin-bottom: 2rem;}
  a {color: #000; text-decoration: none;}
  hr {width: 75%;}
  .sponsors-item {margin: 0; padding: 0 1rem;}
  .sponsors-item:hover > a img {transform: scale(1.03);}
  .sponsors-item a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .gold {flex-basis: 25%;}
  .gold a {height: 200px;}
  .silver {flex-basis: 15%;}
  .silver a {height: 125px;}
  .bronze {flex-basis: 12.5%;}
  .bronze a {height: 40px;}

  img {
    max-width: 100%;
    width: auto;
    max-height: 100%;
    transition: all .2s ease-out;
    mix-blend-mode: multiply !important;
  }

  @media screen and (max-width: 1200px) {
    .container-fluid {padding: 2rem 1rem;}
    .gold {flex-basis: 33%;}
    .gold a {height: 150px;}
    .silver {flex-basis: 20%;}
    .silver a {height: 105px;}
    .bronze {flex-basis: 15.5%;}
    .bronze a {height: 50px;}
  }

  @media screen and (max-width: 767px) {
    .container-fluid {padding: 2rem 1rem;}
    .sponsors-item {padding: 0 .5rem;}
    .gold {flex-basis: 50%;}
    .gold a {height: 120px;}
    .silver {flex-basis: 33%;}
    .silver a {height: 65px;}
    .bronze {flex-basis: 25%;}
    .bronze a {height: 60px;}
  }
</style>
