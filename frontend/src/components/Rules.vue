<template>
  <div class="container-fluid">
    <div class="container">
      <h2>The Rules</h2>
      <br>
      <div class="row">
        <div v-for="(r, i) in rules" :key="i" class="rules-item">
          <img src="https://s3.amazonaws.com/bizzabo.users.files/BBBur1GrQ2f5CxkoDWjH_%D7%94%D7%A8%D7%A6%D7%9C%20%D7%9C%D7%91%D7%9F-01.png" width="30" height="30" class="d-inline-block align-top" alt="">
          <div>
            <h5>{{ r.title | cap }}</h5>
            <p>{{ r.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  filters: {
    cap: v => v.toUpperCase()
  },
  data() {
    return {
      rules: [
        {
          title: 'team size',
          description: 'Teams of  3-5 participants are allowed. All team members must have completed the participation agreement to compete.'
        },
        {
          title: 'ownership',
          description: 'Teams have full ownership of everything they build at our events and are free to do with it as they wish.'
        },
        {
          title: 'code review',
          description: 'Winning teams may be subject to a code-review at some point following the event or immediately before winning.'
        },
        {
          title: 'fresh code',
          description: 'You may not begin your project until the competition officially begins. Please don’t come in and build on top of previous projects if you want to win.'
        },
        {
          title: 'student verification',
          description: 'All participants will be subject to a student ID check for verification, prior to the event.'
        },
      ]
    }
  }
}
</script>
<style scoped>
  .container-fluid {
    padding: 4rem 0;
    background-color: #3a3f45;
    background: -webkit-linear-gradient(to top, #212426, #3a3f45);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #212426, #3a3f45); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  .rules-item {
    display: flex;
    flex-basis: 33.3333333%;
    padding: 1rem 0;
    color: #fff;
  }
  .rules-item img {margin-right: .5rem;}
  h2 {font-weight: bold; color: #fff; text-align: center}
  h5 {font-weight: bold;}

  @media screen and (max-width: 1440px) and (min-width: 1201px) {
    .container {width: 75%;}
  }

  @media screen and (max-width: 1200px) {
    .container-fluid {padding: 2rem .5rem;}
  }

  @media screen and (max-width: 767px) {
    .container-fluid {padding: 2rem 1rem;}
    .rules-item {flex-basis: 50%; padding: .2rem;}
    p {font-size: .8rem; margin: 0;}
    h5 {font-size: 1rem;}
  }
</style>
