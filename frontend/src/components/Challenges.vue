<template>
    <div class="container-fluid">
        <div class="container">
            <img class="herzel" src="../../static/herzel_black.png">
            <h2>HackIDC 2019 Challenges</h2>
        </div>
        <ElbitChallenge />
        <PalantirChallenge />
        <MizrahiTefahotChallenge/>
    </div>
</template>

<script>
  import MizrahiTefahotChallenge from "./MizrahiTefahotChallenge";
  import ElbitChallenge from "./ElbitChallenge";
  import PalantirChallenge from "./PalantirChallenge";

  export default {
    components: {
      MizrahiTefahotChallenge,
      ElbitChallenge,
      PalantirChallenge
    }
  };
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

    h5 {
        text-align: left;
        font-size: 1.1rem;
    }

    @media screen and (max-width: 1440px) and (min-width: 1201px) {
        .container {
            width: 75%;
        }
    }

    @media screen and (max-width: 1200px) {
        .herzel {
            margin-bottom: 2rem;
        }

        h2 {
            margin-bottom: 1rem;
        }
    }

    @media screen and (max-width: 767px) {
        .herzel {
            width: 20%;
            margin-bottom: 2rem;
        }

        h5 {
            font-size: 1rem;
            padding-left: 1rem;
        }
    }
</style>