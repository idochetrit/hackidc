<template>
    <div>
        <h4 class="text-white"><strong> Exhibitions on IDC campus | 1st to 4th of April, 2019</strong></h4>
        <div class="row">
            <div class="offset-lg-1 col-lg-10 col-md-12">
                <p><strong>The Other Way Around: An exhibition in Augmented Reality | 02-04/04/2019</strong></p>
                <p>When a static image is given an opportunity to interact with animation, the image comes alive, exposing hidden truths and double meanings.</p>
                <p>‘The other way around’ is an augmented reality exhibition that brings together graphic artists and animators. The transformation from static to dynamic art breathes life into the creations, allowing them to reveal a different meaning.</p>
                <p>The exhibition was premiered as part of the Tel Aviv illustration week, since then selected works from the exhibition were presented worldwide. This is the first time the complete exhibition is presented since then.</p>
                <p>Curator: <a class="artist" href="https://www.facebook.com/guy.hayout"><strong>Guy Hayout</strong></a></p>
                <hr>
                <p><strong>Artists:</strong></p>
                <a class="artist" target="_blank" :class="{'disabled': !artist.link.length}"
                   v-for="(artist, i) in artists_1"
                   :href="artist.link" :key="i">{{ artist.name }}</a>
                <hr>
                <p><strong>Turning up the light: Street Art coming to life</strong></p>
                <p>This exhibition was created as part of the cooperation between OMA and the Israel Electric Corporation, and was presented to the public over the last Hanuka holiday. The exhibition took place as part of the ‘Hanukalem’ festival. The exhibition was displayed on 8 electrical installations, representing the Eight days of Hanuka, in Jerusalem’s old city as well as the Rothschild Boulevard in Tel-Aviv, transforming electrical installations into living dynamic works of art.
                    The Israel Electric Corporation aims to create new spaces for art and artists in the public domain, and make augmented reality available to various audiences. Participants will be able to interact with the artwork, document themselves as part of it, and eventually share their experience with their friends through various mediums.
                    Recent years have seen significant developments in the fields of Motion and Animated art. The Israel Electric Corporation wishes to shine the spotlight on these developing fields, and invites the public to participate. For this purpose - The Israel Electric Corporation has partnered with OMA, an artists CO-OP including artists from various artistic fields who use technology to bridge the distance between art in the physical and the digital realm.</p>
                <p><strong>Artists:</strong></p>
                <a class="artist" target="_blank" :class="{'disabled': !artist.link.length}"
                   v-for="(artist, i) in artists_2"
                   :href="artist.link" :key="i">{{ artist.name }}</a>
                <hr>
                <p><strong>Tiny Art: Bring ARt to life and life to ARt | 01/04/2019</strong></p>
                <p>IN December 2017 the famous “Improper Walls” art gallery in Vienna held it’s first  Augmented Reality art exhibition. The exhibition presents a glimpse of what is the future of artwork may look like, when combining the various artists abilities with the features of the Artivive platform for creating Augmented reality art. The works are presented in the form of business cards, hence the name: Tiny Art</p>
                <p><strong>Artists:</strong></p>
                <a class="artist" target="_blank" :class="{'disabled': !artist.link.length}"
                   v-for="(artist, i) in artists_3" :key="i"
                   :href="artist.link">{{ artist.name }}</a>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        artists_1: [
          { name: "רוני גריפית", link: "https://www.facebook.com/ronygriffit" },
          { name: "Roy Tsour Veksler", link: "https://www.facebook.com/roy.tsour" },
          { name: "Swan Er", link: "https://www.facebook.com/profile.php?id=100006305836176" },
          { name: "Guy Mofaz", link: "https://www.facebook.com/guy.mofaz" },
          { name: "Ziv Sameach", link: "https://www.facebook.com/ziv.sameach" },
          { name: "Julie Filipenko", link: "https://www.facebook.com/JulieFilipenko.art.design/" },
          { name: "Yana Bukler", link: "https://www.facebook.com/yana.bukler" },
          { name: "Erez Sameach", link: "https://www.facebook.com/erez.sameach" },
          { name: "Minks", link: "https://www.facebook.com/suger.minks/" },
          { name: "Or Bar-el", link: "https://www.facebook.com/Or-Bar-el-Page-355168304582028/" },
          { name: "Yaniv Shimony", link: "https://www.facebook.com/yaniv.shimony.3" },
          { name: "Dor Friedrich", link: "https://www.facebook.com/dor.friedrich" },
          { name: "Sarit Ben-Joseph", link: "https://www.facebook.com/sarit.benjoseph" },
          { name: "Yuv Cohen", link: "https://www.facebook.com/yuvi.cohen" },
          { name: "Schahar May", link: "https://www.facebook.com/shachar.may" },
          { name: "Mootalle'", link: "https://www.facebook.com/HeyMisterImHungry/" },
          { name: "Liat Gelerter", link: "https://www.facebook.com/liat.gelerter" },
          { name: "Shlomit Avishai", link: "https://www.facebook.com/shlomit.avishai" },
          { name: "Gal Daniel", link: "" },
          { name: "Roni Rashkes", link: "https://www.facebook.com/rashkes1" },
          { name: "Andy Glebovsky", link: "https://www.facebook.com/big.glebovsky" },
          { name: "Roi Natan Zukerman", link: "https://www.facebook.com/Roi99" },
          { name: "Roy Margalit", link: "https://www.facebook.com/roy.margalit.9" },
          { name: "Shiri Algor", link: "https://www.facebook.com/shiri.algor" },
          { name: "Liran Lin", link: "https://www.facebook.com/liranlin" },
          { name: "Or Weitzman", link: "https://www.facebook.com/or.weitzman" },
          { name: "Ella Ben Yacov", link: "https://www.facebook.com/ella.yacov" },
          { name: "Ronit Zweig רונית צווייג", link: "https://www.facebook.com/Ronit-Zweig-%D7%A8%D7%95%D7%A0%D7%99%D7%AA-%D7%A6%D7%95%D7%95%D7%99%D7%99%D7%92-124015771046769/" },
          { name: "Demitri Klayman", link: "https://www.facebook.com/demitri.klayman" },
          { name: "Shira Shlez", link: "https://www.facebook.com/shira.shlez" },
          { name: "Adi Naveh", link: "https://www.facebook.com/adi.naveh.9" },
          { name: "Dor Pe'er", link: "https://www.facebook.com/dor.p3r" },
          { name: "Shirley Neeman", link: "https://www.facebook.com/shirley.neeman.9" },
        ],
        artists_2: [
          { name: "Yuval Haker", link: "" },
          { name: "Tanya Gryshko", link: "" },
          { name: "Stav Levi", link: "" },
          { name: "Shirly Kones", link: "" },
        ],
        artists_3: [
          { name: "Bambi Paun", link: "" },
          { name: "Charles Clapshaw", link: "https://www.instagram.com/charlesclapshaw/" },
          { name: "Deadbeat Hero", link: "https://www.instagram.com/deadbeathero/" },
          { name: "Dmitri Șibaev", link: "https://www.facebook.com/shibaev.dmitri/" },
          { name: "Doris Dittrich", link: "https://www.instagram.com/doris.dittrich/" },
          { name: "Eugenia Levkova", link: "" },
          { name: "Fausto Montanari", link: "https://www.facebook.com/fausto.montanari.3" },
          { name: "Jeremy AUSTIN", link: "https://www.facebook.com/jeremyaustinartist/" },
          { name: "Kurt Campbell", link: "" },
          { name: "Laurent Bompard", link: "https://www.facebook.com/ArtbyLaurentBompard/" },
          { name: "Lena Vargas Afanasieva", link: "https://www.facebook.com/elena.vargasafanasieva" },
          { name: "Litto (Daniela Weiss)", link: "https://www.instagram.com/ms.litto/" },
          { name: "Liubov Kalashnikova", link: "" },
          { name: "Kurbatova Elena & Compressed Immersion", link: "" },
          { name: "Markus C. Ender | emc.quadrat", link: "https://www.markuscender.com/" },
          { name: "Miluta Flueras", link: "" },
          { name: "perk_up", link: "" },
          { name: "Shachar Zadik & Jenny Meilihove", link: "" },
          { name: "Simon Goritschnig", link: "https://www.facebook.com/irrationalme/" },
          { name: "Theodoru", link: "https://www.facebook.com/teodoru.badiu?ref=bookmarks" },
          { name: "Teresa Romano & Marco Testini", link: "" },
          { name: "Ulrich Frey", link: "" },
          { name: "Visual Stamina", link: "https://www.facebook.com/visualstamina/?ref=br_rs" },
          { name: "Yunuen Esparza", link: "https://www.facebook.com/YunuenEsparza/" },
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

    a.artist {
        color: #f4a61c;
        text-align: center;
        font-weight: bold;
        margin: 0 .2rem;
        text-decoration: none;
    }

    a.artist:hover {
        text-decoration: underline;
    }

    a.disabled {
        font-weight: normal;
        pointer-events: none;
        cursor: default;
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
