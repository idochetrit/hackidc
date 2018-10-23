<template>
  <div class="container-fluid">
    <div class="container">
      <img class="herzel" src="../../static/herzel_black.png">
      <h2>HackIDC 2019 Team</h2>
      <br><br>
      <div class="row">
        <a v-for="(t, i) in team" :key="i" class="team-item" :href="t.linkedin" target="_blank">
          <div class="wrapper">
            <div class="overlay"><span class="fab fa-linkedin fa-2x"></span></div>
            <img class="img-responsive" :src="'t.thumbnail'">
          </div>
          <h5>{{ t.name }}</h5>
        </a>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      team: [
        {name: 'Alon Houven', linkedin: '#', thumbnail: '../../static/alon.jpg'},
        {name: 'Golan Romano', linkedin: 'https://www.linkedin.com/in/golan-romano-29933714a/', thumbnail: 'https://media.licdn.com/dms/image/C5603AQFu2bm_Mvsp5g/profile-displayphoto-shrink_800_800/0?e=1545264000&v=beta&t=_Dx7XCJTqdgolASgnnUIJSoCHlZoq3bjamBzH8Vq4sU'},
        {name: 'Ori Zilka', linkedin: 'https://www.linkedin.com/in/ori-zilka-802450153/', thumbnail: 'https://media.licdn.com/dms/image/C4D03AQHLIb55li32qw/profile-displayphoto-shrink_800_800/0?e=1545264000&v=beta&t=tFGTmvxoJi0NzWJNOH_dT08avAT0EFk0Y5H1EVriqJ4'},
        {name: 'Hadar Mordechai', linkedin: 'https://www.linkedin.com/in/hadar-mordechai-7641b7159/', thumbnail: '../../static/hadar.jpg'},
        {name: 'Maayan Rosenthal', linkedin: 'https://www.linkedin.com/in/maayan-rosenthal-1b7349123/', thumbnail: 'https://media.licdn.com/dms/image/C5603AQGdjYCctkgUsA/profile-displayphoto-shrink_800_800/0?e=1545264000&v=beta&t=Yr_YVPrJAAh1MGSI15b5DFq5KWGdSEjvoclg-J6ZpRU'},
        {name: 'Niv Shani', linkedin: 'https://www.linkedin.com/in/niv-shani-5a3313163/', thumbnail: 'https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.0-9/35551549_10212648633634137_981907507586793472_n.jpg?_nc_cat=103&_nc_ht=scontent.fsdv2-1.fna&oh=5855665884d77d85969c6af12674039b&oe=5C4BF196'},
        {name: 'Chen Hillel', linkedin: '#', thumbnail: 'https://image.flaticon.com/icons/png/512/149/149071.png'},
        {name: 'Amit Fainholtz', linkedin: '#', thumbnail: 'https://image.flaticon.com/icons/png/512/149/149071.png'},
        {name: 'Adi Ninio', linkedin: 'https://www.linkedin.com/in/adi-ninio-99812910a/', thumbnail: 'https://media.licdn.com/dms/image/C5603AQFmce_ovFDPhw/profile-displayphoto-shrink_800_800/0?e=1545264000&v=beta&t=EapY13DpjXxAHhosThRAB8uvMeLzc-FFkM0yh8jDK1A'},
        {name: 'Gal Rabin', linkedin: 'https://www.linkedin.com/in/gal-rabin-473351120/', thumbnail: 'https://media.licdn.com/dms/image/C5103AQEsJqEH4PIPhA/profile-displayphoto-shrink_800_800/0?e=1545264000&v=beta&t=9JXDp6IpdJP1FkqbLCmuyG-DoMTGcIIaOB7AU3S-X1I'},
        {name: 'Gill Samia', linkedin: 'https://www.linkedin.com/in/gillsamia/', thumbnail: 'https://media.licdn.com/dms/image/C4E03AQH_4tFezJZD_g/profile-displayphoto-shrink_800_800/0?e=1545264000&v=beta&t=8aZJFWNbS4qZzPVS-2t8uKm4B4DRdAT0W8L2aJhv_uE'},
        {name: 'Lidor Hezkelo', linkedin: 'https://www.linkedin.com/in/lidor-hezkelo-64147315b/', thumbnail: 'https://media.licdn.com/dms/image/C4D03AQGb3QwV4eg1Eg/profile-displayphoto-shrink_800_800/0?e=1545264000&v=beta&t=adcHq3WNvpaE2khwxrT1VxFN7bhB3TMxUyweBd7EHjc'},
        {name: 'Yonatan Eldan', linkedin: 'https://www.linkedin.com/in/yonatan-eldan-879706a9/', thumbnail: 'https://media.licdn.com/dms/image/C5603AQEA1qGtHZRASw/profile-displayphoto-shrink_800_800/0?e=1545264000&v=beta&t=72J0eBZYTP7q1G7h-gFeIil1CqhBChlddMRv0Sgfu3M'},
        {name: 'Ido Chetrit', linkedin: 'https://www.linkedin.com/in/ido-chetrit-a379077a/', thumbnail: '../../static/ido.jpg'},
        {name: 'Lia Levy', linkedin: '#', thumbnail: 'https://image.flaticon.com/icons/png/512/149/149071.png'},
        {name: 'Tal Kedmi', linkedin: 'https://www.linkedin.com/in/tal-kedmi-bb1169172/', thumbnail: '../../static/tal.jpg'},
        {name: 'Ohad Ronen', linkedin: 'https://www.linkedin.com/in/ohad-ronen-4a045542/', thumbnail: 'https://media.licdn.com/dms/image/C5603AQEvKKbXq25hUw/profile-displayphoto-shrink_800_800/0?e=1545264000&v=beta&t=mB7FxIYBlmC3kK7tYqu04rsswMrd975ksPIQknKe1j8'},
        {name: 'Miya Margalith', linkedin: '#', thumbnail: 'https://image.flaticon.com/icons/png/512/149/149071.png'},
        {name: 'Gad Suarez', linkedin: 'https://www.linkedin.com/in/gad-zuaretz-37613b161/', thumbnail: '../../static/gad.jpg'},
      ]
    }
  }
}
</script>
<style scoped>
  .container-fluid {
    padding: 8rem 0;
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
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 25%;
  }
  .wrapper:hover > .overlay {
    opacity: 1;
    transform: translateY(0)
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
  }
  .overlay {
    transition: all .3s ease-in-out;
    transform: translateY(40px);
    opacity: 0;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 1rem 0;
    color: #fff;
    background-color: rgba(0, 119, 181, .85);
    width: 100%;
    height: 30%;
    position: absolute;
    bottom: 0;
  }
  h2 {font-weight: bold; text-align: center;}
  h5 {font-weight: bold; color: #000;}
  a {text-decoration: none;}

  @media screen and (max-width: 767px) {
    .team-item {flex-basis: 50%;}
  }
</style>
