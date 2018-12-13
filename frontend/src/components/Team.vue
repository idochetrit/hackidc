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
        {name: 'Golan Romano', linkedin: 'https://www.linkedin.com/in/golan-romano-29933714a/', thumbnail: 'https://media.licdn.com/dms/image/C5603AQFu2bm_Mvsp5g/profile-displayphoto-shrink_800_800/0?e=1545264000&v=beta&t=_Dx7XCJTqdgolASgnnUIJSoCHlZoq3bjamBzH8Vq4sU'},
        {name: 'Ori Zilka', linkedin: 'https://www.linkedin.com/in/ori-zilka-802450153/', thumbnail: 'https://media.licdn.com/dms/image/C4D03AQHLIb55li32qw/profile-displayphoto-shrink_800_800/0?e=1545264000&v=beta&t=tFGTmvxoJi0NzWJNOH_dT08avAT0EFk0Y5H1EVriqJ4'},
      ],
      team: [
        {name: 'Adi Ninio', linkedin: 'https://www.linkedin.com/in/adi-ninio-99812910a/', thumbnail: 'https://media.licdn.com/dms/image/C5603AQFmce_ovFDPhw/profile-displayphoto-shrink_800_800/0?e=1545264000&v=beta&t=EapY13DpjXxAHhosThRAB8uvMeLzc-FFkM0yh8jDK1A'},
        {name: 'Amit Fainholtz', linkedin: '#', thumbnail: require('../../static/amit.jpg')},
        {name: 'Gad Zuaretz', linkedin: 'https://www.linkedin.com/in/gad-zuaretz-37613b161/', thumbnail: require('../../static/gad.jpg')},
        {name: 'Gal Rabin', linkedin: 'https://www.linkedin.com/in/gal-rabin-473351120/', thumbnail: 'https://media.licdn.com/dms/image/C5603AQEuUN75Z3D9QQ/profile-displayphoto-shrink_800_800/0?e=1548288000&v=beta&t=zZ8pfEzfeDKOLBeoRGZ83zuWO6VyLth2QgNO4-TVZW8'},
        {name: 'Gill Samia', linkedin: 'https://www.linkedin.com/in/gillsamia/', thumbnail: 'https://media.licdn.com/dms/image/C4E03AQH_4tFezJZD_g/profile-displayphoto-shrink_800_800/0?e=1545264000&v=beta&t=8aZJFWNbS4qZzPVS-2t8uKm4B4DRdAT0W8L2aJhv_uE'},
        {name: 'Hadar Mordechai', linkedin: 'https://www.linkedin.com/in/hadar-mordechai-7641b7159/', thumbnail: require('../../static/hadar.jpg')},
        {name: 'Ido Chetrit', linkedin: 'https://www.linkedin.com/in/ido-chetrit-a379077a/', thumbnail: require('../../static/ido.jpg')},
        {name: 'Lia Levy', linkedin: 'https://www.linkedin.com/in/lia-levy/', thumbnail: 'https://media.licdn.com/dms/image/C4E03AQF8WAHAFonAYg/profile-displayphoto-shrink_800_800/0?e=1545868800&v=beta&t=9aXAAdeQ4fQ3lXZ5d7_LK2jzxxb8O0Ql-r9KMi2qeh0'},
        {name: 'Lidor Hezkelo', linkedin: 'https://www.linkedin.com/in/lidor-hezkelo-64147315b/', thumbnail: 'https://media.licdn.com/dms/image/C4D03AQHceOw-lLHl5Q/profile-displayphoto-shrink_800_800/0?e=1550102400&v=beta&t=jlBVa56P5bw3Wrf7E9krJJy8rLEA3wSQVKoG4zNF9kI'},
        {name: 'Maayan Rosenthal', linkedin: 'https://www.linkedin.com/in/maayan-rosenthal-1b7349123/', thumbnail: 'https://media.licdn.com/dms/image/C5603AQGdjYCctkgUsA/profile-displayphoto-shrink_800_800/0?e=1545264000&v=beta&t=Yr_YVPrJAAh1MGSI15b5DFq5KWGdSEjvoclg-J6ZpRU'},
        {name: 'Miya Margalith', linkedin: 'https://www.linkedin.com/in/miya-margalith/', thumbnail: 'https://media.licdn.com/dms/image/C5603AQFqFrUtT8R60w/profile-displayphoto-shrink_800_800/0?e=1545868800&v=beta&t=W2uCRyfeHgg0EsbemrC30lZLYb0yLzD0h-NS3MfJUig'},
        {name: 'Niv Shani', linkedin: 'https://www.linkedin.com/in/niv-shani-5a3313163/', thumbnail: 'https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.0-9/35551549_10212648633634137_981907507586793472_n.jpg?_nc_cat=103&_nc_ht=scontent.fsdv2-1.fna&oh=5855665884d77d85969c6af12674039b&oe=5C4BF196'},
        {name: 'Ohad Ronen', linkedin: 'https://www.linkedin.com/in/ohad-ronen-4a045542/', thumbnail: 'https://media.licdn.com/dms/image/C5603AQFZCeAOYjpy-w/profile-displayphoto-shrink_800_800/0?e=1547078400&v=beta&t=4ImA3iRNIJlxmv36Z-gH0z0Fglx3iJnias3LCld80Kc'},
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
