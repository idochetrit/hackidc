<template>
  <div class="container-fluid">
    <div class="container">
      <br>
      <div class="row">
        <div class="col-md-7">
          <h2 id="about">What is HackIDC?</h2>
          <br>
          <h5><strong>300+ students, 36 hours, 35,000 NIS prizes.</strong></h5>
          <p><strong>Are you as creative as you think you are? <br> Do you have the guts to push yourself further than ever before?</strong></p>
          <h5>Come join us at HackIDC 2019 and show us what you're made of.</h5>
          <hr>
          <p>This is an event for students who choose to learn because they can, and to build because they love to. Let us take care of the details — just bring your creativity and watch your ideas come to life.</p>
          <p>Run by students from IDC, HackIDC is the largest student-run hackathon in Israel, gathering the most innovative, enthusiastic and determined to succeed students that have an idea and want to execute it - fast!</p>
          <button @click="toSchedule" class="btn btn-info btn-md">VIEW SCHEDULE</button>
        </div>
        <div class="col-md-5 col-sm-4">
          <img  class="herzel" src="https://s3.amazonaws.com/bizzabo.users.files/BBBur1GrQ2f5CxkoDWjH_%D7%94%D7%A8%D7%A6%D7%9C%20%D7%9C%D7%91%D7%9F-01.png">
        </div>
      </div>
      <br>
      <hr>
      <br>
      <div class="row">
        <div class="col-lg-5">
          <span class="fas fa-handshake"></span>
        </div>
        <div class="col-lg-7">
          <h2>Endless opportunities</h2>
          <br>
          <h5><strong>Introducing this year <span class="bolder text-info">ACTIVE RECRUITMENT</span> functionality.</strong></h5>
          <p><strong>Industry's top companies will be recruiting during the entire event.</strong></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur, autem corporis dolorum error eum laboriosam nam nulla officia optio perferendis provident sequi tempora vitae voluptate? Ab at ipsa veritatis?</p>
          <button v-scroll-to="'#sponsors'" class="btn btn-md btn-info">CHECK OUT THIS YEAR SPONSORS</button>
        </div>
      </div>
      <br>
      <hr>
      <br>
      <div class="row">
        <div class="col-lg-8">
          <h2>Start Learning</h2>
          <br>
          <h5><strong>Make yourself more ready by learning from our recommended <br><span class="bolder text-info">RESOURCES LINKS</span> material.</strong></h5>
          <p><strong>Learn about the topics you find important before the competition starts.</strong></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur, autem corporis dolorum error eum laboriosam nam nulla officia optio perferendis provident sequi tempora vitae voluptate? Ab at ipsa veritatis?</p>
          <button @click="toResources" class="btn btn-md btn-info">VIEW THE RESOURCES</button>
        </div>
        <div class="col-lg-4">
          <span class="fas fa-code"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toSchedule() {this.$router.push({name: 'schedule'});},
    toResources() {this.$router.push({name: 'resources'});}
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

  @media screen and (max-width: 1200px) {

  }

  @media screen and (max-width: 767px) {
    .container-fluid {padding: 2rem .5rem;}
    .col-lg-5, .col-sm-4 {padding: 1rem 0 0 0;}
    .col-lg-4 {padding: 3rem 0 0 0;}
    .row:nth-of-type(2) {flex-direction: column-reverse;}
  }
</style>
