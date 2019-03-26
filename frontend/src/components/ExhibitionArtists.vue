<template>
    <div>
        <h4 class="text-white"><strong>AR Exhibitions Artists</strong></h4>
        <div class="row">
            <div class="offset-lg-1 col-lg-10 col-md-12">
                <p v-for="(artist, i) in artists" :key="i">
                    <u>{{ artist.name }}</u> {{ artist.text }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        artists: [
          {
            name: "Tian Xiaolei",
            text: "was born in Beijing, China, where he continues to live and work. He graduated   from Central Academy of Fine Arts (CAFA) in 2007, where he majored in digital media."
          },
          {
            name: "Luke Gray",
            text: "is a Travelling Illustrator & Fine artist specializing in large scale murals.\n" +
              "                        Luke Gray (UK) is a nomadic surrealist painter specializing in chinese ink and graphite works on paper and canvas. Born color blind he was forced to use an almost exclusively black and white palette, working with patterns and textures rather than color. Lukes meticulously detailed works deal with the metaphysical realms of dreams and sacred states. Throughout his work he weaves together themes of religious ritual, ancient mysticism and hallucinogenic visions to create a sense of an otherworldly state.\n" +
              "                        Born in the UK, Luke now resides and works in China."
          },
          {
            name: "Takahito Irie",
            text: "is a multidisciplinary artist who works in myriad mediums including video, photography, digital illustration, performance and installation. His creation titled H/U/M/A/N M/A/C/H/I/N/E which is presented in this exhibition, explores the implications of technology on consciousness and the human body; the change in the relationship between man and machine over time and the point at which they blur and shape one another. He inhabits the role of creator, breeding and presenting Cyborg tribe."
          },
          {
            name: "Vilarn",
            text: "values the beauty of his Far East upbringing and culture, and aims to aesthetically portray the life of Thais in his artwork. Born and raised in Thailand, Vilarn is passionate about traditional art & crafts. Vilarn strongly believes that ArtTech(Augmented Reality in particular) adds additional dimensions to original artwork, and render the interaction between art creators and audiences even more intimate."
          },
          {
            name: "Litto",
            text: "is a visual artist based in one of Europe's premier art scenes, Vienna Austria. After years of experience crafting her skills as a User Experience specialist and Web Designer, she opted to pursue her true passion. Litto's art deals with taboo issues of physical and psychological limit experiences. The process of her work follows three stages: First is the real act, e.g., two models interacting sexually with each other. In this stage, Litto collects pictures and sketches to give herself visual notes. Second stage is the glitch, where the code of the photos will be manipulated and Litto's distinct artistry takes over in this crucial stage. Lastly is the transformation from digital to analogue - the act of painting on canvas. Litto's art work can be found in numerous private collections worldwide.\n"
          },
          {
            name: "Shirly Kones & Eyal Greengrass",
            text: "This artwork is a collaboration between artist and musician, Kones and animator Greengrass. In this AR video, they investigate the hidden dynamics revealed through a dimensional transformation, bringing forth a fresh perspective through the inevitable tension between flowing and standing still."
          },
          {
            name: "Talia Levy",
            text: "is a Multidisciplinary artist and poet Talia who investigates the transcendental state of inspiration in which the poet must dwell, the enigma of awakening, as if from a dream, and floating in the liminal space between words. Taking the name of her work from a poem by Yechezkel Nafshy, she utilizes their poetry bringing it to life through collaged images and animations to explore the mystery of inspiration."
          },
          {
            name: "Yona Levy Grosman & Danny Levy",
            text: "Drawing inspiration from the sand dunes of the Middle East, Yona investigates the shifting relationships of individuals in society. Working with her husband, Danny the pair manages to use AR to show the dynamic nature of relationships - both personal and societal."
          },
          {
            name: "Minks / Guy Hayout",
            text: "Street artist Minks’ brightly-colored creatures bring a whimsical and mischievous touch to monochrome urban streets. Working with fellow member of ArtOpus Collective Guy Hayout, an animator and acclaimed street artist, the two create an AR.t work that highlights the playfulness that lives at the heart of both of their work. \n"
          }
        ]
      };
    }
  };
</script>

<style scoped>
    .row {
        padding: 1rem 3rem;
    }

    h3 {
        text-align: center;
        font-weight: bold;
        color: #fff;
        text-transform: uppercase;
    }

    p {
        color: #fff;
        font-size: 1.1rem;
    }

    h4 {
        text-align: center;
    }

    h4 a {
        color: #fff;
        font-weight: bold;
        text-align: center;
    }

    h4 a:hover {
        text-decoration: none;
    }

    @media screen and (max-width: 1200px) {
        h3 {
            font-size: 1.5rem;
        }
    }

    @media screen and (max-width: 767px) {
        h3 {
            font-size: 1.2rem;
            padding: 0 1rem;
        }

        .row {
            padding: 1rem .5rem;
        }
    }

</style>
