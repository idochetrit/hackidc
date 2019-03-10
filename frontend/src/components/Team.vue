<template>
  <div class="container-fluid">
    <div class="container">
      <img class="herzel" src="../../static/herzel_black.png">
      <h2>HackIDC 2019 Team</h2>
      <br><br>
      <div class="row">
        <a v-for="(t, i) in topRow" :key="i" class="team-item" :href="t.linkedin" target="_blank">
          <div class="wrapper">
            <div class="overlay"><span class="fab fa-linkedin-in fa-lg"></span></div>
            <img class="img-responsive" :src="t.thumbnail">
          </div>
          <h5>{{ t.name }}</h5>
        </a>
      </div>
      <div class="row">
        <a v-for="(t, i) in secondRow" :key="i" class="team-item" :href="t.linkedin" target="_blank">
          <div class="wrapper">
            <div class="overlay"><span class="fab fa-linkedin-in fa-lg"></span></div>
            <img class="img-responsive" :src="t.thumbnail">
          </div>
          <h5>{{ t.name }}</h5>
        </a>
      </div>
      <div class="row">
        <a v-for="(t, i) in shuffle(team.slice())" :key="i" class="team-item" :href="t.linkedin" target="_blank">
          <div class="wrapper">
            <div class="overlay"><span class="fab fa-linkedin-in fa-lg"></span></div>
            <img class="img-responsive" :src="t.thumbnail">
          </div>
          <h5>{{ t.name }}</h5>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  import {shuffle} from "../assets/methods";
  export default {
    data() {
      return {
        topRow: [
          {name: 'Alon Howben', linkedin: 'https://www.linkedin.com/in/alon-howben-7397a8176', thumbnail: require('../../static/alon.jpg')},
        ],
        secondRow: [
          {name: 'Golan Romano', linkedin: 'https://www.linkedin.com/in/golan-romano-29933714a/', thumbnail: 'https://media.licdn.com/dms/image/C5603AQFu2bm_Mvsp5g/profile-displayphoto-shrink_800_800/0?e=1557360000&v=beta&t=h3b8vo7EGu0fv2zBBL8tx1ExroiLCrzDKygDRXtKOD8'},
          {name: 'Ori Zilka', linkedin: 'https://www.linkedin.com/in/ori-zilka-802450153/', thumbnail: 'https://media.licdn.com/dms/image/C4D03AQHLIb55li32qw/profile-displayphoto-shrink_800_800/0?e=1557360000&v=beta&t=MG_aggOtpHSehAXexUXKC3IzggwpUA_7Z2Gu2tlUnYI'},
        ],
        team: [
          {name: 'Adi Ninio', linkedin: 'https://www.linkedin.com/in/adi-ninio-99812910a/', thumbnail: 'https://media.licdn.com/dms/image/C5603AQFmce_ovFDPhw/profile-displayphoto-shrink_800_800/0?e=1557360000&v=beta&t=X9nrMzD8aBejQ7TZTz-nIRX1qUrxenslqblRdTGRJDY'},
          {name: 'Amit Fainholtz', linkedin: '#', thumbnail: require('../../static/amit.jpg')},
          {name: 'Gad Zuaretz', linkedin: 'https://www.linkedin.com/in/gad-zuaretz-37613b161/', thumbnail: require('../../static/gad.jpg')},
          {name: 'Gal Rabin', linkedin: 'https://www.linkedin.com/in/gal-rabin-473351120/', thumbnail: 'https://media.licdn.com/dms/image/C5603AQE81wEjQs8_bg/profile-displayphoto-shrink_800_800/0?e=1557964800&v=beta&t=dkeDP-0OrmfsLbO3qKLIl54aPIaNlZiIdi80W6OTzvY'},
          {name: 'Gill Samia', linkedin: 'https://www.linkedin.com/in/gillsamia/', thumbnail: 'https://media.licdn.com/dms/image/C4E03AQH_4tFezJZD_g/profile-displayphoto-shrink_800_800/0?e=1557360000&v=beta&t=TEG_MZsNTC5qsFG0PZBn4OkeaUZDnAIY3vziUII1lLM'},
          {name: 'Hadar Mordechai', linkedin: 'https://www.linkedin.com/in/hadar-mordechai-7641b7159/', thumbnail: require('../../static/hadar.jpg')},
          {name: 'Ido Chetrit', linkedin: 'https://www.linkedin.com/in/ido-chetrit-a379077a/', thumbnail: require('../../static/ido.jpg')},
          {name: 'Lia Levy', linkedin: 'https://www.linkedin.com/in/lia-levy/', thumbnail: 'https://media.licdn.com/dms/image/C4E03AQF8WAHAFonAYg/profile-displayphoto-shrink_800_800/0?e=1557360000&v=beta&t=0Ubd1UXwQM3tad6ixwoGmZY4ZmbBSVzhV8x39rvlVJ4'},
          {name: 'Lidor Hezkelo', linkedin: 'https://www.linkedin.com/in/lidor-hezkelo-64147315b/', thumbnail: 'https://media.licdn.com/dms/image/C4D03AQHceOw-lLHl5Q/profile-displayphoto-shrink_800_800/0?e=1555545600&v=beta&t=XdscV9BRf86ctTl5WIDD9_nwX6RAWQdPHhS1-K1hLK8'},
          {name: 'Maayan Rosenthal', linkedin: 'https://www.linkedin.com/in/maayan-rosenthal-1b7349123/', thumbnail: 'https://media.licdn.com/dms/image/C5603AQGdjYCctkgUsA/profile-displayphoto-shrink_800_800/0?e=1557360000&v=beta&t=XT-OjEBRxwAD7PKDqDcb2w8JGUaplzMlrdMYvlkITO8'},
          {name: 'Miya Margalith', linkedin: 'https://www.linkedin.com/in/miya-margalith/', thumbnail: 'https://media.licdn.com/dms/image/C5603AQFqFrUtT8R60w/profile-displayphoto-shrink_800_800/0?e=1557360000&v=beta&t=sn9_eAJpQn-Kg3iIGA4UeM2-5WRCXLEsm1wRRGj-5O4'},
          {name: 'Niv Shani', linkedin: 'https://www.linkedin.com/in/niv-shani-5a3313163/', thumbnail: 'https://media.licdn.com/dms/image/C5603AQEanAgbZ4aofQ/profile-displayphoto-shrink_200_200/0?e=1554336000&v=beta&t=xIPAW0FDwbWlwurCcXW27MntJY9XJuWM8AjrqhfA-ik'},
          {name: 'Ohad Ronen', linkedin: 'https://www.linkedin.com/in/ohad-ronen-4a045542/', thumbnail: 'https://media.licdn.com/dms/image/C5603AQFZCeAOYjpy-w/profile-displayphoto-shrink_800_800/0?e=1552521600&v=beta&t=_VnVs5927wVdTPfw593xeuX72qGzMeX0UijzkTpap0o'},
          {name: 'Tal Kedmi', linkedin: 'https://www.linkedin.com/in/tal-kedmi-bb1169172/', thumbnail: require('../../static/tal.jpg')},
        ]
      }
    },
    methods: {
      shuffle
    }
  }
</script>
<style scoped>
  .container-fluid {
    margin-top: 3rem;
    padding: 8rem 0;
    min-height: 1000px;
    background-color: #f7f7f7;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .herzel {
    width: 10%;
    margin-bottom: 2rem;
  }
  .row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .team-item {
    padding: 1rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 25%;
    text-align: center;
  }
  .team-item img {
    width: 100%;
    transition: all .2s ease-out;
  }
  .wrapper {
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    width: 100%;
    text-align: center;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
  .overlay {
    transition: all .3s ease-in-out;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: rgba(0, 119, 181, .85);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: absolute;
    bottom: 5px;
  }
  h2 {font-weight: bold; text-align: center;}
  h5 {font-weight: bold; color: #000;}
  a {text-decoration: none;}

  @media screen and (max-width: 1440px) and (min-width: 1201px) {
    .container {width: 75%;}
  }

  @media screen and (max-width: 1200px) {
    .team-item {flex-basis: 20%; padding: .3rem 1.2rem;}
  }

  @media screen and (max-width: 767px) {
    .herzel {width: 20%;}
    .team-item {flex-basis: 40%; padding: .3rem 1rem;}
    h5 { font-size: 1rem; }
    .fa-lg { font-size: 1.1rem; }
    .overlay {
      width: 30px;
      height: 30px;
    }
  }

  @media screen and (max-width: 380px) {
    .team-item {flex-basis: 50%; padding: .3rem 1.5rem;}
    h5 { font-size: 1rem; }
  }
</style>
