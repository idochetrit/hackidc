<template>
    <div class="container-fluid">
        <div class="container">
            <img class="exhibitionLogo" src="../../static/exhibition_logo.png">
            <h3>HackIDC digital art exhibition 2019 - <span class="redBold">When teck meets art!</span></h3>
            <div class="row">
                <div class="offset-lg-1 col-lg-10 col-md-12">
                    <p>HackIDC is the largest student Hackathon in Israel. This annual event is being held for the sixth time and will take place on
                        <span class="larger blueBold">April 11-12, 2019</span> at the Interdisciplinary Center in Herzliya. HackIDC selects approximately 300 of Israel's top computer science and engineering students from all academic institutions in the country.</p>
                    <p><span class="larger yellowBold">For the first time in the Hackathon world, HackIDC presents a digital art exhibition.</span>
                        The event will combine different art pieces and leaders in the digital art industry. HackIDC believes that creative freedom is essential in enabling true innovation.
                        By integrating creativity and technology, new and fascinating creations can be developed. In the last couple of years, digital art has begun breaking boundaries and typical conventions in the art world.</p>
                    <p>The exhibition will feature innovative artistic representation from leading artists in the digital art world, start-ups that combine technology music and art, computer-generated projects and cutting edge displays from IDC Herzliya that combine art and technology.</p>
                    <h5 class="blueBold">Come join the innovative HackIDC Digital Art Exhibition 2019!</h5>
                    <p>If your art integrates technology, or you have a start-up that connects both worlds, contact us below to discuss displaying your work at <span class="larger redBold">the HackIDC Exhibition 2019.</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

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
    .row { padding: 1rem 3rem; }
    .exhibitionLogo {
        width: 25%;
        margin-bottom: 2rem;
    }
    h3 { text-align: center; font-weight: bold; color: #fff; text-transform: uppercase; }
    p { color: #fff; font-size: 1.1rem; }
    .larger { font-size: 1.2rem; }
    .redBold { font-weight: bold; color: #ed117f; }
    .yellowBold { font-weight: bold; color: #f4a61c; }
    .blueBold { font-weight: bold; color: #1585d2; }

    @media screen and (max-width: 1200px) {
        .exhibitionLogo { width: 30%; }
        h3 { font-size: 1.5rem; }
    }

    @media screen and (max-width: 767px) {
        .exhibitionLogo { width: 50%; }
        h3 { font-size: 1.2rem; padding: 0 1rem; }
        .row { padding: 1rem .5rem; }
    }

</style>