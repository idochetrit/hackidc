<template>
    <div class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="herzel-wrapper">
                    <img class="herzel" src="../../static/herzel_white.png">
                </div>
                <div class="text-wrapper">
                    <h1>404 :(</h1>
                    <h4>PAGE NOT FOUND</h4>
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
    .herzel-wrapper { width: 10%; padding: 1rem; }
    .text-wrapper { display: flex; flex-direction: column; align-items: center; }
    .herzel {
        max-width: 100%;
    }
    h1 { text-align: center;  color: #fff; font-size: 5rem; font-weight: bold; margin: 0; }
    h4 {  text-align: center; color: #fff; font-size: 2.5rem; font-weight: bold; margin-bottom: 1rem; }
    button { padding-right: 2rem; padding-left: 2rem; }
</style>