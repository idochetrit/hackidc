<template>
    <div class="container-fluid">
        <div class="container">
            <img class="herzel" src="../../static/herzel_black.png">
            <h2>HackIDC 2019 - Voting Page</h2>
            <h3>Select the team number down below and vote by the given parameters</h3>
            <div class="row">
                <Scoring :judge="judge" />
            </div>
        </div>
    </div>
</template>

<script>
  import mockJudgeObject from "../assets/mockJudge";
  import Scoring from "./Scoring"

  export default {
    data() {
      return {
        judge: mockJudgeObject
      }
    },
    components: {
      Scoring
    },
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
        justify-content: center;
    }

    .herzel {
        width: 10%;
        margin-bottom: 2rem;
    }

    h2 {
        font-weight: bold;
    }

    h3 {
        font-size: 1.3rem;
        margin-bottom: 2rem;
        text-align: center;
    }

    .row {
        width: 100%;
        padding: 1rem;
    }

    @media screen and (max-width: 1440px) and (min-width: 1201px) {
        .container {
            width: 80%;
        }
    }

    @media screen and (max-width: 1200px) {
    }

    @media screen and (max-width: 767px) {
        .container-fluid {
            padding: 8rem 0 4rem 0;
        }

        .row {
            padding: 0 1rem;
        }

        .herzel {
            width: 20%;
        }

        h3 {
            font-size: 1.2rem;
            padding: 0 .5rem;
        }
    }

    @media screen and (max-width: 380px) {
        .container-fluid {
            padding: 6rem 0 4rem 0;
        }

        h5 {
            font-size: 1rem;
        }

        h4 {
            font-size: 1.2rem;
        }

        h3 {
            font-size: 1.1rem;
            padding: 0 .5rem;
        }

        h2 {
            font-size: 1.3rem;
        }

        p {
            font-size: .9rem;
        }
    }
</style>