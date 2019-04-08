<template>
    <div class="container-fluid">
        <div class="container">
            <h2>The Judges</h2>
            <h5>Want to become a HackIDC judge?
                <router-link :to="{ name: 'mentors-and-judges' }"><a><strong>More details here</strong></a>
                </router-link>
            </h5>
            <br>
            <div class="row">
                <div v-for="(j,i) in judges" :key="i" class="judges-item">
                    <img class="img-responsive" :src="j.thumbnail">
                    <div>
                        <h5>{{ j.name }}</h5>
                        <p>{{ j.title }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        judges: [
          {
            name: "Prof. Uriel Reichman",
            title: "President and Founder of IDC Herzliya",
            thumbnail: "http://www.deliveringchangeforum.com/wp-content/uploads/2016/10/DSC_4044-2-295x305.jpg"
          },
          {
            name: "Prof. Ariel (Arik) Shamir",
            title: "Dean of Efi Arazi school of Computer Science at IDC Herzliya",
            thumbnail: "https://res.cloudinary.com/bizzaboprod/image/upload/v1521130553/kwmjgbfyvxkmnlwd9nhx.png"
          },
          {
            name: "Moran Nir",
            title: "Executive Director at Zell Entrepreneurship Program at IDC Herzliya",
            thumbnail: "https://res.cloudinary.com/bizzaboprod/image/upload/c_crop,g_custom,f_auto/v1520354856/pcl1u7pmq8yhy1ismedk.jpg"
          },
          {
            name: "Iddo Gino",
            title: "CEO & Founder of RapidAPI",
            thumbnail: require("../../static/iddo_gino.jpg")
          },
          {
            name: "Roei Deutsch",
            title: "Co-Founder & CEO of Jolt",
            thumbnail: require("../../static/roei_deutsch.jpeg")
          },
          {
            name: "Lior Noy",
            title: "Startup Growth Lead at Google IL",
            thumbnail: require("../../static/lior_noy.jpeg")
          },
          {
            name: "Dr. Yossi Maaravi",
            title: "Vice Dean Adelson School of Entrepreneurship",
            thumbnail: require("../../static/yossi_maaravi.jpg")
          },
          {
            name: "Dr. Son Preminger",
            title: "Founder & President of Intendu",
            thumbnail: require("../../static/son_preminger.jpeg")
          },
          {
            name: "Tal Zackon",
            title: "General Manager of The Junction (by F2 Capital)",
            thumbnail: require("../../static/tal_zackon.jpeg")
          },
          {
            name: "Gil Golan",
            title: "Executive Director, Technical Center Israel - General Motors",
            thumbnail: require("../../static/gil_golan.jpeg")
          },
          {
            name: "Dr. Revital Hollander",
            title: "Faculty member, Adelson school of Entrepreneurship, founder of TMT-Tel Aviv Music Technology",
            thumbnail: require("../../static/revital_hollander.jpeg")
          },
          {
            name: "Yasmin Lukatz",
            title: "Executive Director at ICON",
            thumbnail: require("../../static/yasmin_lukatz.jpeg")
          }
        ]
      };
    }
  };
</script>
<style scoped>
    .container-fluid {
        padding: 4rem 0;
        background-color: #f7f7f7;
    }

    .row {
        display: flex;
        justify-content: center;
    }

    .judges-item:hover > img {
        transform: scale(1.03);
    }

    .judges-item {
        flex-basis: 33.33333333%;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .judges-item h5 {
        font-weight: bold;
    }

    h5 {
        text-align: center;
        padding: 0;
        font-size: 1rem;
    }

    a {
        color: #000;
        text-decoration: none;
    }

    p {
        padding: 0 1rem;
        text-align: center;
    }

    h2 {
        font-weight: bold;
        text-align: center;
    }

    img {
        transition: all .2s ease-out;
        margin-bottom: 1rem;
        width: 70%;
        border-radius: 50%;
    }

    @media screen and (max-width: 1440px) and (min-width: 1201px) {
        .container {
            width: 75%;
        }
    }

    @media screen and (max-width: 1200px) {
        .container-fluid {
            padding: 2rem .5rem;
        }
    }

    @media screen and (max-width: 767px) {
        h5 {
            font-size: 1rem;
        }

        .judges-item {
            flex-basis: 50%;
            padding: .2rem 0;
        }

        .judges-item p {
            font-size: .8rem;
            padding: 0 .5rem;
        }

        .judges-item h5 {
            font-size: .9rem;
        }
    }

    @media screen and (max-width: 380px) {
        h5 {
            font-size: .9rem;
        }
    }
</style>
