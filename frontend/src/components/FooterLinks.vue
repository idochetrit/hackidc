<template>
  <div class="container-fluid">
    <ul>
      <!--<router-link to="/terms" tag="li"><a>Terms and Conditions</a></router-link>-->
      <li><a href="mailto:contact@hackidc.com">Contact the organizers: <strong>contact@hackidc.com</strong></a></li>
    </ul>
  </div>
</template>
<script>

</script>
<style scoped>
  .container-fluid {
    background-color: #212426;
    padding: 1rem 0;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
  }
  li {padding: 0 1rem;}
  li a {
    text-decoration: none;
    color: #fff;
  }
  li a:hover {text-decoration: underline;}

  @media screen and (max-width: 767px) {
    ul {flex-direction: column; align-items: center;}
    li a {font-size: .9rem;}
  }

  @media screen and (max-width: 360px) {
    .container-fluid {padding: .5rem 0;}
  }
</style>
