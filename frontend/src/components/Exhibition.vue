<template>
        <div class="container-fluid">
            <div class="container">
                <img class="exhibitionLogo" src="../../static/new_exhibition_logo.png">
                <h3>HackIDC digital art exhibition 2019 - <span class="redBold">When tech meets art!</span></h3>
                <div class="row">
                    <div class="offset-lg-1 col-lg-10 col-md-12">
                        <p>HackIDC is the largest student Hackathon in Israel. This annual event is being held for the
                            sixth
                            time and will take place on
                            <span class="larger blueBold">April 11-12, 2019</span> at the Interdisciplinary Center in
                            Herzliya. HackIDC selects approximately 300 of Israel's top computer science and engineering
                            students from all academic institutions in the country.</p>
                        <p><span
                                class="larger yellowBold">For the first time, HackIDC presents a digital art exhibition!</span>
                            The event will combine different art pieces and leaders in the digital art industry. HackIDC
                            believes that creative freedom is essential in enabling true innovation.
                            By integrating creativity and technology, new and fascinating creations can be developed. In
                            the
                            last couple of years, digital art has begun breaking boundaries and typical conventions in
                            the
                            art world.</p>
                        <p>The exhibition will feature innovative artistic representation from leading artists in the
                            digital art world, start-ups that combine technology music and art, computer-generated
                            projects
                            and cutting edge displays from IDC Herzliya that combine art and technology.</p>
                        <h5 class="blueBold">Come join the innovative HackIDC Digital Art Exhibition 2019!</h5>
                        <p>If your art integrates technology, or you have a start-up that connects both worlds, contact
                            us
                            below to discuss displaying your work at <span class="larger redBold">the HackIDC Exhibition 2019.</span>
                        </p>
                        <h4><a href="mailto:digitalart@hackidc.com">digitalart@hackidc.com</a></h4>
                    </div>
                </div>
            </div>
            <div class="row videoWrapper">
                <iframe src="https://www.youtube.com/embed/EKYYwMKidgc?autoplay=1"
                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
            </div>
            <ExhibitionLogos />
            <div class="container">
                <hr>
                <h3>About</h3>
                <div class="row">
                    <div class="offset-lg-1 col-lg-10 col-md-12">
                        <p><strong>STATE OF THE ART</strong> is a result of a constant and never-ending process. This
                            process evolves and develops due to actions of artists and their own process of discovery.
                            While
                            we don't know What or even where the future of art is, this exhibition hopes to shed some
                            light
                            on the roads leading there.</p>
                        <p><strong>STATE OF THE ART</strong> was curated in order to inspire those participating in
                            HackIDC.
                            We hope to inspire the teams by presenting innovating artwork created by artists worldwide,
                            as
                            well as exhibits made by our own IDC students. Within the exhibition we present:
                            Playthiswall;
                            advanced VR technologies; openLH; art exhibits using AR technologies and many more.</p>
                        <p>The exhibition shows how ARTIVIVEs AR art creation platform allows for a ‘round table’ work
                            process, where artists from different genres - including genres requiring code-writing -
                            work
                            and create in unison. The exhibition also shows how the development of this technological
                            platform, and the constant addition of new features over the last two years, bring about a
                            development in both the artistic creation process and its end result.</p>
                        <p>This exhibition includes works presented at the Renaissance exhibition, the first augmented
                            reality exhibition to show in Israel; the ‘Make art come to life’ exhibition, which showed
                            at
                            the ABCG gallery in Bangkok Thailand; works on lend from theYingArt gallery, which have been
                            displayed at several locations in China, as well as exhibition by the multidisciplinary
                            artist
                            Litto which took place in Vienna during the "Translation Of Complexity" group
                            exhibition.</p>
                        <p><u>OMA</u>: An art creation enabler that creates opportunities for artists to create tech
                            based
                            immersive art and new revenue streams.</p>
                        <p><u>Artivive</u>: A platform where artists build a bridge between analog and digital art.
                            Artivive's
                            vision is to change how art is created and consumed and build the community around augmented
                            reality art.</p>
                    </div>
                </div>
                <ExhibitionArtists/>
                <ExhibitionPreHack/>
            </div>
        </div>
</template>

<script>
  import ExhibitionArtists from "./ExhibitionArtists";
  import ExhibitionPreHack from "./ExhibitionPreHack";
  import ExhibitionLogos from "./ExhibitionLogos";

  export default {
    components: {
      ExhibitionArtists,
      ExhibitionPreHack,
      ExhibitionLogos
    }
  };
</script>

<style scoped>
    .container-fluid {
        margin-top: 3rem;
        padding: 8rem 0;
        min-height: 1000px;
        background-color: #000000;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .row {
        padding: 1rem 3rem;
    }

    .videoWrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .videoWrapper iframe {
        width: 50%;
        height: 500px;
    }

    .exhibitionLogo {
        width: 35%;
        margin-bottom: 3rem;
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

    .larger {
        font-size: 1.2rem;
    }

    .redBold {
        font-weight: bold;
        color: #ed117f;
    }

    .yellowBold {
        font-weight: bold;
        color: #f4a61c;
    }

    .blueBold {
        font-weight: bold;
        color: #1585d2;
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
        .exhibitionLogo {
            width: 30%;
            margin-bottom: 2rem;
        }

        h3 {
            font-size: 1.5rem;
        }

        .videoWrapper iframe {
            width: 80%;
            height: 315px;
        }
    }

    @media screen and (max-width: 767px) {
        .exhibitionLogo {
            width: 60%;
        }

        h3 {
            font-size: 1.2rem;
            padding: 0 1rem;
        }

        .row {
            padding: 1rem .5rem;
        }
    }

</style>
