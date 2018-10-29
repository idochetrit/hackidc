<template>
  <div class="container-fluid">
    <div class="container">
      <span class="text-info">{</span><span>...</span><span class="text-info">}</span>
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
  .container-fluid {
    min-height: 1000px;
  }
  .container {
    padding: 10rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .fas {
    margin: 0 1rem;
    opacity: .3;
    animation: spin 1.5s 0s infinite ease-in-out;
  }
  span {
    font-size: 3rem;
    font-family: "Fira Code", monospace;
    font-weight: bold;
    text-align: center;
    animation: loader 1.5s 0s infinite ease-in-out;
  }
  @keyframes loader {
    0% {margin: 0;}
    25% {margin: 0 .5rem;}
    50% {margin: 0;}
    100% {margin: 0;}
  }

  @media screen and (max-width: 1440px) and (min-width: 1201px) {
    span {font-size: 1.8rem;}
  }

  @media screen and (max-width: 767px) {
    span {font-size: 2rem;}
  }
</style>
