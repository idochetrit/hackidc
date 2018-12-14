<template>
    <div class="container-fluid">
        <div class="container">
            <h1>
                <span class="let0">{</span>
                <span v-for="(o, i) in numbers" :class="'let'+(i+1)" :key="i">{{ o }}</span>
                <span class="let8">}</span>
            </h1>
        </div>
    </div>
</template>
<script>
import { shuffle } from "../assets/methods";
export default {
  data() {
    return {
      numbers: shuffle([0, 10, 0, 10, 0, 11, 0])
    }
  },
}
</script>
<style scoped>
    .container-fluid {
        margin-top: 3rem;
        min-height: 1000px;
    }
    .container {
        padding: 10rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    h1 {
        margin: 0;
        padding: 0;
        font-family: "Fira Code", monospace;
        font-weight: 100;
        font-size: 1.5rem;
        color: #212426;
    }
    span {
        position: relative;
        top: 0.63em;
        display: inline-block;
        text-transform: uppercase;
        opacity: 0;
        transform: rotateX(-90deg);
    }
    .let0 { animation: drop 1s ease-in-out infinite; animation-delay: 0.1s; margin-right: .5rem; }
    .let1 { animation: drop 1s ease-in-out infinite; animation-delay: 0.2s; font-weight: bold; }
    .let2 { animation: drop 1s ease-in-out infinite; animation-delay: 0.3s; font-weight: bold; }
    .let3 { animation: drop 1s ease-in-out infinite; animation-delay: 0.4s; font-weight: bold; }
    .let4 { animation: drop 1s ease-in-out infinite; animation-delay: 0.5s; font-weight: bold; }
    .let5 { animation: drop 1s ease-in-out infinite; animation-delay: 0.6s; font-weight: bold; }
    .let6 { animation: drop 1s ease-in-out infinite; animation-delay: 0.7s; font-weight: bold; }
    .let7 { animation: drop 1s ease-in-out infinite; animation-delay: 0.8s; font-weight: bold; }
    .let8 { animation: drop 1s ease-in-out infinite; animation-delay: 0.9s; margin-left: .5rem; }

    @keyframes drop {
        10% { opacity: 0.5; }
        20% {
            opacity: 1;
            top: 3.78em;
            transform: rotateX(-360deg);
        }
        30% { color: #1fbed5; }
        60% { color: #212426; }
        80% {
            opacity: 1;
            top: 3.78em;
            transform: rotateX(-360deg);
        }
        90% { opacity: 0.5; color: #212426; }
        100% {
            opacity: 0;
            top: 6.94em
        }
    }


    @media screen and (max-width: 1440px) and (min-width: 1201px) {
        h1 {font-size: 1.5rem;}
    }

    @media screen and (max-width: 1200px) {
        h1 {font-size: 1.3rem;}
    }

    @media screen and (max-width: 767px) {
        .container {
            padding: 6rem 0;
        }
        h1 {font-size: 1.1rem;}
    }

    @media screen and (max-width: 380px) {
        h1 {font-size: 1rem;}
    }
</style>
