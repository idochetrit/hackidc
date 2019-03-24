<template>
    <div class="container-fluid">
        <div class="row">
            <a class="logoLink" v-for="(logo, i) in logos" :key="i" target="_blank"
               :href="logo.link">
                <img :src="logo.src" alt="">
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
          return {
            logos: [
              { link: "http://publicnews.info/abcg-info/", src: require('../../static/abcg_logo.png') },
              { link: "https://artivive.com/", src: require('../../static/artivive_logo.png') },
              { link: "https://www.facebook.com/omanutolamut.art/", src: require('../../static/omanut_logo.png') },
              { link: "http://shanghai.lps-china.com/partners/%E7%9B%88%E8%89%BA%E6%9C%AF%E4%B8%AD%E5%BF%83/", src: require('../../static/ying_art_logo.png') },
              { link: "https://litto.work/", src: require('../../static/litto_logo.png') },
              { link: "https://improperwalls.com/", src: require('../../static/walls_logo.png') },
              { link: "https://www.iec.co.il/pages/default.aspx", src: require('../../static/hevrat_hashmal_logo.png') },
              { link: "https://www.renashouse.co.il/", src: require('../../static/rena_house_logo.png') },
            ]
          }
        }
    }
</script>

<style scoped>
    .container-fluid {
        box-shadow: inset 0 5px 10px rgba(0,0,0,.5), inset 0 -5px 10px rgba(0,0,0,.5);
        background-color: #fff;
        min-height: 0;
        padding: 3rem 1rem;
    }

    .row {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
    }

    .logoLink {
        text-align: center;
        flex-basis: 10%;
        max-height: 120px;
        margin: 0 .5rem;
    }

    .logoLink:hover > img {
        transform: scale(1.1);
    }

    .logoLink img {
        width: 80%;
        transition: all .2s 0s ease-out;
    }

    @media screen and (max-width: 1200px) {
        h3 {
            font-size: 1.5rem;
        }
    }

    @media screen and (max-width: 767px) {
        .container-fluid {
            box-shadow: none;
            margin: 0;
            padding: 2rem 1rem;
        }

        .row {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
        }

        .logoLink {
            text-align: center;
            flex-basis: 40%;
            max-height: 120px;
            margin: 1rem .5rem;
        }

        .logoLink:hover > img {
            transform: scale(1.1);
        }

        .logoLink img {
            width: 70%;
            transition: all .2s 0s ease-out;
        }
    }

</style>