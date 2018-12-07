<template>
  <div class="container-fluid">
    <div class="container">
      <br>
      <div class="row">
        <div class="col-md-7">
          <h2 id="about">What is HackIDC?</h2>
          <br>
          <h5><strong>300+ students, 36 hours, valuable prizes.</strong></h5>
          <p><strong>Are you as creative as you think you are? <br> Do you have the guts to push yourself further than ever before?</strong></p>
          <h5>Come join us at HackIDC 2019 and show us what you're made of.</h5>
          <hr>
          <p>This is an event for students who choose to learn because they can, and to build because they love to. Let us take care of the details — just bring your creativity and watch your ideas come to life.</p>
          <p>Run by students from IDC Herzliya, HackIDC is the largest student-run hackathon in Israel, gathering the most innovative, enthusiastic and determined to succeed students that have an idea and want to execute it - fast!</p>
          <!--<button @click="toSchedule" class="btn btn-info btn-md">VIEW SCHEDULE</button>-->
        </div>
        <div class="col-md-5 col-sm-4">
          <img  class="herzel" src="https://s3.amazonaws.com/bizzabo.users.files/BBBur1GrQ2f5CxkoDWjH_%D7%94%D7%A8%D7%A6%D7%9C%20%D7%9C%D7%91%D7%9F-01.png">
        </div>
      </div>
      <br>
      <hr>
      <br>
      <div class="row">
        <div class="col-lg-5 col-md-5">
          <span class="fas fa-handshake"></span>
        </div>
        <div class="col-lg-7 col-md-7">
          <h2>Endless opportunities</h2>
          <br>
          <h5><strong>Introducing this year <span class="bolder text-info">ACTIVE RECRUITMENT</span> functionality.</strong></h5>
          <p><strong>Industry's top companies will be recruiting during the entire event.</strong></p>
          <p>More details to come, stay tuned!</p>
          <div class="button-wrapper">
            <button v-scroll-to="'#sponsors'" class="btn btn-md btn-info">THIS YEAR SPONSORS</button>
            <button @click="toMentorsAndJudges" class="btn btn-md btn-secondary">BECOME A MENTOR</button>
          </div>
        </div>
      </div>
      <br>
      <hr>
      <br>
      <div class="row">
        <div class="col-lg-8 col-md-8">
          <h2>Start Learning</h2>
          <br>
          <h5><strong>Make yourself more ready by learning from our recommended <br><span class="bolder text-info">RESOURCES LINKS</span> material.</strong></h5>
          <p><strong>This is your chance to turn your CS101 knowledge into a real deal.</strong></p>
          <p>Learn about the topics you find important before the competition starts.
            <br>We gathered lots of resources to help turn your basic coding skills into real experience, through you first Hackathon.</p>
          <div class="button-wrapper"><button @click="toResources" class="btn btn-md btn-info">VIEW THE RESOURCES</button></div>
        </div>
        <div class="col-lg-4 col-md-4">
          <span class="fas fa-code"></span>
        </div>
      </div>
      <br>
      <hr>
      <br>
      <div class="row">
        <div class="col-lg-5 col-md-5">
          <span class="fas fa-palette"></span>
        </div>
        <div class="col-lg-7 col-md-7">
          <h2>Digital Art Exhibition</h2>
          <br>
          <h5><strong><span class="bolder text-info">WHEN TECH MEETS ART!</span></strong></h5>
          <p>Digital art is not a new field. Since the 20th century artists have been inspired by technology and incorporated it into their work.
          As artists discovered the power of technology, they continue to break boundaries and push the limits of their creativity.</p>
          <p>For the first time in Hackathon's history, HackIDC will present a digital art exhibition, combining different pieces from the digital art world and highlights leading artists from the industry.</p>
          <p>Come see the magic yourself!</p>
          <div class="button-wrapper"><button @click="toExhibition" class="btn btn-md btn-info">READ MORE ABOUT THE EXHIBITION</button></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toSchedule() {this.$router.push({ name: "schedule" });},
    toResources() {this.$router.push({ name: "resources" });},
    toExhibition() {this.$router.push({ name: "exhibition" });},
    toMentorsAndJudges() {this.$router.push({ name: "mentors-and-judges" });}
  }
}
</script>

<style scoped>
  .container-fluid {
    background: #f7f7f7;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #fff, #f7f7f7);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #fff, #f7f7f7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    padding: 4rem 0;
  }
  img {
    width: 100%;
    filter: brightness(0);
  }
  h2 {font-weight: bold;}
  .bolder {
    font-weight: bold;
    font-size: 1.3rem;
  }
  .col-lg-4, .col-lg-5 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12rem;
  }

  @media screen and (max-width: 1440px) and (min-width: 1201px) {
    .container {width: 75%;}
  }

  @media screen and (max-width: 1200px) {
    .col-lg-5, .col-sm-4 {
      padding: 2rem 0 0 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 9rem;
    }
    .col-lg-4 {padding: 2rem 0 0 0; font-size: 9rem;}
  }

  @media screen and (max-width: 767px) {
    .herzel {width: 70%;}
    .container-fluid {padding: 2rem .5rem;}
    .col-lg-5, .col-sm-4 {
      padding: 2rem 0 0 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 9rem;
    }
    .col-lg-4 {padding: 3rem 0 0 0; font-size: 9rem;}
    .row:nth-of-type(2) {flex-direction: column-reverse;}
    .row:nth-of-type(4) {flex-direction: column-reverse;}
    .button-wrapper { width:100%; display: flex; justify-content: space-around; }
  }

  @media screen and (max-width: 380px) {
    h2 { font-size: 1.6rem; }
    h5 { font-size: 1.1rem; }
    button { font-size: .8rem; margin: 0 .1rem; }
  }

</style>
