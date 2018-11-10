<template>
    <div class="container-fluid">
        <div class="container">
            <img class="herzel" src="../../static/herzel_black.png">
            <h2>HackIDC Museum</h2>
            <h4>Pictures, videos, stories and highlights from previous years</h4>
            <!--embed 2018 aftermovie-->
            <div class="row">
                <iframe class="embed" src="https://www.youtube.com/embed/A0hi-H2BnD0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

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
import galleryImages from "../assets/gallery";
import { shuffle } from "../assets/methods";
export default {
  components: {
    'vue-gallery-slideshow': VueGallerySlideshow
  },
  mixins: [galleryImages],
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
        padding: 1rem 0;
    }
    h2 {
        font-weight: bold;
        text-align: center;
    }
    h4 {margin-bottom: 2rem;}
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
    }

    @media screen and (max-width: 767px) {
        .herzel {width: 20%;}
        .row {padding: 1rem;}
        .gallery-item {
            height: 100px;
            flex-basis: 49%;
        }
        .embed {height: 300px;}
    }

    @media screen and (max-width: 360px) {
        .herzel {width: 20%;}
        .row {padding: 1rem .5rem;}
        .gallery-item {
            height: 100px;
            flex-basis: 47%;
        }
    }
</style>