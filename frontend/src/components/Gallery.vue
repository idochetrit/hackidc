<template>
    <div class="container-fluid">
        <div class="container">
            <img class="herzel" src="../../static/herzel_black.png">
            <h2>HackIDC Gallery</h2>
            <h5>Pictures, videos, stories and highlights from previous years</h5>

            <!--embed 2018 aftermovie-->
            <span class="fas fa-video text-info fa-2x"></span>
            <div class="row">
                <iframe class="embed" src="https://www.youtube.com/embed/A0hi-H2BnD0?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <!--articles-->
            <span class="fas fa-quote-right text-info fa-2x"></span>
            <div class="row">
                <div class="article" v-for="(a, i) in articles">
                    <h5>"{{ a.title }}"</h5>
                    <p>"{{ a.description }}"</p>
                    <p class="details"><strong>{{ a.author }}, {{ a.date }}</strong></p>
                    <a target="_blank" class="text-info" :href="a.link"><strong>{{ a.link }}</strong> <span class="fas fa-external-link-alt fa-lg"></span></a>
                </div>
            </div>

            <span class="fas fa-camera text-info fa-2x"></span>
            <!--image gallery-->
            <div class="row">
                <div v-for="(image, i) in shuffledGallery" class="gallery-item">
                    <img :src="image" @click="index = i">
                </div>
                <vue-gallery-slideshow :images="shuffledGallery" :index="index" @close="index = null"></vue-gallery-slideshow>
            </div>
        </div>
    </div>
</template>

<script>
import VueGallerySlideshow from "vue-gallery-slideshow";
import gallery from "../assets/gallery";
import { shuffle } from "../assets/methods";
export default {
  components: {
    'vue-gallery-slideshow': VueGallerySlideshow
  },
  mixins: [gallery],
  computed: {
    shuffledGallery() {return shuffle(this.images);}
  }
}
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
    .row {
        width: 100%;
        justify-content: center;
        padding: 2rem 0;
    }
    h2 {
        font-weight: bold;
        text-align: center;
    }
    h5 {
        margin-bottom: 2rem;
        text-align: center;
    }
    .gallery-item {
        flex-basis: 24.5%;
        margin: .1rem;
        height: 200px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .gallery-item:hover {cursor: pointer;}
    .gallery-item img {width: 100%; min-height: 100%;}
    .article {
        direction: rtl;
        font-family: 'Rubik', sans-serif;
        border-radius: 15px;
        background-color: #f1f1f1;
        border: 1px solid #ddd;
        flex-basis: 100%;
        margin: .5rem 0;
        padding: 1rem 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .article h5 {font-weight:  bold; text-align: right; align-self: flex-start; margin-bottom: 1rem;}
    .article p {font-style: italic; text-align: right; align-self: flex-start;}
    .article p.details {font-style: normal; text-align: left; align-self: flex-end;}
    .article a {text-decoration: none; text-align: center; font-size: .9rem;}
    .article .fas {margin-right: .5rem;}
    .embed {
        width: 100%;
        height: 500px;
    }

    @media screen and (max-width: 1440px) and (min-width: 1201px) {
        .container {width: 75%;}
        .gallery-item {
            height: 150px;
            flex-basis: 32.3%;
        }
    }

    @media screen and (max-width: 1200px) {
        .gallery-item {
            height: 150px;
            flex-basis: 32.3%;
        }
        .embed {height: 400px;}
        .article {flex-basis: 47%; margin: .5rem; padding: .5rem;}
        .article h5 {font-size: .9rem;}
        .article a {font-size: .65rem;}
        .article p {font-size: .8rem; margin-bottom: .5rem;}

    }

    @media screen and (max-width: 767px) {
        .herzel {width: 20%;}
        .row {padding: 1rem;}
        .gallery-item {
            height: 100px;
            flex-basis: 49%;
        }
        .embed {height: 300px;}
        .article {flex-basis: 100%; margin: .5rem 0; padding: .5rem;}
        .article h5 {font-size: .9rem;}
        .article a {font-size: .5rem;}
        .article p {font-size: .8rem; margin-bottom: .5rem;}
    }

    @media screen and (max-width: 380px) {
        .herzel {width: 20%;}
        .row {padding: 1rem .5rem;}
        .gallery-item {
            height: 100px;
            flex-basis: 47%;
        }
    }
</style>