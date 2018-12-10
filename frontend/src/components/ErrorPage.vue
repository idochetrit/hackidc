<template>
    <div class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="icon-wrapper">
                    <span class="fas fa-exclamation-circle fa-5x text-light"></span>
                </div>
                <div class="text-wrapper">
                    <h1>Oops! :(</h1>
                    <h4>Something went wrong...</h4>
                    <h5>Sorry for the inconvenience! Please try again in a few minutes.</h5>
                </div>
                <button @click="back" class="btn btn-info btn-md">Go Back</button>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    methods: {
      back() {
        this.$router.push({ name: "home" });
      }
    }
  }
</script>

<style scoped>
    .container-fluid {
        background: #000000;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to bottom, #232323, #000000);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to bottom, #232323, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        margin-top: 3rem;
        padding: 6rem 0;
        min-height: 1000px;
    }
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .row {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        padding-bottom: 4rem;
        width: 100%;
    }
    .icon-wrapper { width: 10%; padding: 1rem; text-align: center; }
    .text-wrapper { display: flex; flex-direction: column; align-items: center; }
    .herzel { max-width: 100%; }
    h1 { text-align: center;  color: #fff; font-size: 5rem; font-weight: bold; margin: 0; }
    h4 {  text-align: center; color: #fff; font-size: 2.5rem; font-weight: bold; }
    h5 { text-align: center;  color: #fff; font-size: 1.2rem; margin-bottom: 1rem; }
    button { padding-right: 2rem; padding-left: 2rem; }

    @media screen and (max-width: 1200px) {
        .icon-wrapper { width: 15%; padding: 1rem; }
        h1 { font-size: 4.5rem; }
        h4 { font-size: 2rem; }
        h5 { font-size: 1.2rem; }
    }

    @media screen and (max-width: 767px) {
        .icon-wrapper { width: 30%; padding: 1rem; }
        h1 { font-size: 4rem; }
        h4 { font-size: 2rem; }
        h5 { font-size: 1rem; padding: 0 1.5rem; }
    }

    @media screen and (max-width: 380px) {
        h1 { font-size: 3rem; }
        h4 { font-size: 1.4rem; }
        h5 { font-size: 1rem; padding: 0 1.5rem; }
    }


</style>