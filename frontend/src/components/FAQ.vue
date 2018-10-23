<template>
  <div class="container-fluid">
    <div class="container">
      <img class="herzel" src="../../static/herzel_black.png">
      <h2>Frequently Asked Questions</h2>
      <div class="row">
        <div class="col-lg-4">
          <div class="point">
            <h4>What is HackIDC?</h4>
            <hr>
            <p><strong>A hackathon is an event, typically lasting multiple days, in which a large number of people meet to collaboratively build their ideas using technology.</strong></p>
            <p>HackIDC is Israel’s leading student Hackathon, held annually at IDC Herzliya. It is a great opportunity to build something new and exciting, together with coding and design enthusiasts.
              Students work in teams of up to five people for thirty-six hours to create a web, mobile, or hardware product.</p>
          </div>
          <div class="point">
            <h4>Who can apply?</h4>
            <hr>
            <p><strong>Any current student studying at any academic institution, pursuing a first degree and majoring in any subject.</strong></p>
            <p>Most accepted participants come with some coding or design background, to make sure they can contribute to the event.</p>
            <p>If you believe you are able to contribute in another way, we encourage you to apply.</p>
          </div>
          <div class="point">
            <h4>Who runs HackIDC?</h4>
            <hr>
            <p><strong>HackIDC is run entirely by students of the Interdisciplinary Center Herzliya.</strong></p>
            <p>With great assistance from our partners at the Student Union and funding by corporate sponsors, we aspire to bring you the leading student Hackathon in Israel.</p>
          </div>
          <div class="point">
            <h4>What am I expected to build?</h4>
            <hr>
            <p><strong>Thirty-six hours isn’t much, but surely enough to bring something to life. You are expected to finish the first version of your product within that time. This can be a demo, POC or a beta version.</strong></p>
            <p>All work eligible for prizes must be completed between Thursday morning after the kick-off and Friday afternoon at the hacking location (IDC Herzliya Campus).</p>
            <p>HackIDC will provide you the best conditions to concentrate on your ideas and their execution.</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="point">
            <h4>Is there a specific theme for the Hackathon?</h4>
            <hr>
            <p><strong>No. This is your chance to shine and come up with your own ideas.</strong></p>
            <p>With that, we will announce different themed-challenges during Pre-Hack day that will give you the opportunity to double your chance to win.</p>
          </div>
          <div class="point">
            <h4>What about students without programming experience?</h4>
            <hr>
            <p><strong>You are a great part of the reason we are doing this! This is your chance to turn your CS101 Knowledge into a real deal.</strong></p>
            <p>We have lots of resources to help beginners - Check out our <router-link to="/resources"><a><strong>Resources</strong></a></router-link> section for more information.</p>
          </div>
          <div class="point">
            <h4>What is Pre-Hack day?</h4>
            <hr>
            <p><strong>During Pre-Hack we will reveal the different challenges in this years HackIDC. Participating in a challenge gives you the chance to win additional prizes worth over 15000 NIS which are awarded by our sponsors.</strong></p>
            <p>Pre-Hack Day will also be your chance to get to know what hardware will be available at the event, and you will already be able to reserve the hardware you would like to work with. We strongly recommend at least one member of each group to participate in the event.
              Awesome prizes will be given away throughout the day!</p>
          </div>
          <div class="point">
            <h4>What if I don’t have a team?</h4>
            <hr>
            <p><strong>You can decide whether we team you up or you find a team on your own.</strong></p>
            <p>You can join an existing team or make one through the HackIDC Hackers 2018 Facebook group we will open before the event.</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="point">
            <h4>When can I apply?</h4>
            <hr>
            <p><strong>Registration will be open from December 11th, 2018.</strong></p>
          </div>
          <div class="point">
            <h4>How much does it cost to participate?</h4>
            <hr>
            <p><strong>Nothing. Zero. Nil. Nada.</strong></p>
            <p>Just bring your laptop, creativity, and passion - we will provide you with swag, meals, drinks, snacks, unlimited coffee and a place to crash when you need a break from hacking.</p>
          </div>
          <div class="point">
            <h4>What can I win?</h4>
            <hr>
            <p><strong>You mean other than the opportunity to meet awesome people and learn from mentors of some of the world’s most influential companies?</strong></p>
            <p>A panel of professional judges will select the best three projects based on the following criteria: creativity, technical difficulty, aesthetics, and function.</p>
            <p>Top prizes involve financial giveaways. Sponsors also offer their own prizes for specific categories, which they judge and fund themselves.</p>
          </div>
          <div class="point">
            <h4>What if I get hungry?</h4>
            <hr>
            <p><strong>We will be providing lunch/dinner for the first day and breakfast/lunch on the second. </strong></p>
            <p>Snacks, drinks and other miscellaneous food items will be provided throughout the event. Vegetarian and vegan options will be available to those who specify it on their application.</p>
          </div>
        </div>
      </div>
      <h3>Have a question that is not listed here? Please Contact us</h3>
      <a href="mailto:contact@hackidc.com" class="btn btn-lg btn-info">contact@hackidc.com</a>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
  .container-fluid {
    padding: 8rem 0;
    background-color: #f7f7f7;
    min-height: 1000px;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .herzel {
    width: 10%;
    margin-bottom: 2rem;
  }
  h2 {font-weight: bold; margin-bottom: 4rem;}
  h3 {margin: 1rem 0;}
  .point {
    padding: 0 1rem 2rem 1rem;
  }
  a {color: #000;}
  a.btn {color: #fff; text-decoration: none; text-transform: uppercase; font-size: 1rem;}
</style>
