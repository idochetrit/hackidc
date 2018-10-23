<template>
  <div class="container-fluid">
    <div class="container">
      <h2 id="sponsors">Our Sponsors</h2>
      <br>
      <div class="row">
        <a v-for="(s, i) in sponsors" :key="i" class="sponsors-item"
           :href="s.link" target="_blank"
           :class="{small: s.size === 'sm', medium: s.size === 'md', large: s.size === 'lg'}">
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
      sponsors: [
        {name: 'Midgal', link: 'https://www.migdal.co.il/He/Pages/MigdalHomePage.aspx', size: 'lg', logo: 'https://upload.wikimedia.org/wikipedia/he/thumb/3/35/Migdal_Logo.svg/475px-Migdal_Logo.svg.png'},
        {name: 'Google', link: 'https://careers.google.com/locations/tel-aviv-haifa/', size: 'sm', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2000px-Google_2015_logo.svg.png'},
        {name: 'Essence Group', link: 'https://www.essence-grp.com/', size: 'sm', logo: require('../../static/essence_logo.png')},
        {name: 'Microsoft', link: 'https://www.microsoft.com/he-il', size: 'sm', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png'},
      ]
    }
  }
}
</script>
<style scoped>
  .container-fluid {
    padding: 4rem 0;
    background-color: #f7f7f7;
  }
  .row {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
  }
  .small {height: 70px;}
  .medium {height: 120px;}
  .large {height: 200px;}
  .sponsors-item {
    padding: 0 2.5rem;
  }
  .sponsors-item {transform: scale(1.03);}
  .sponsors-item:hover > img {transform: scale(1.03);}
  a.sponsors-item img.img-responsive {
    transition: all .2s ease-out;
    mix-blend-mode: multiply !important;
    height: 100%;
  }
  img {mix-blend-mode: multiply !important;}
  h2 {font-weight: bold; text-align: center;}
</style>
