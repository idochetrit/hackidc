<template>
  <div class="container-fluid">
    <div class="container">
      <img class="herzel" src="../../static/herzel_black.png">
      <h2>Schedule TBD</h2>
    </div>
  </div>
</template>

<script>

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
  }
  .herzel {
    width: 10%;
    margin-bottom: 4rem;
  }
  h2 {
    font-weight: bold;
    text-align: center;
  }

  @media screen and (max-width: 767px) {
    .herzel {width: 20%;}
  }
</style>
