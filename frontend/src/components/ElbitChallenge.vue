<template>
    <div class="row challengeWrapper elbit"
         :class="{'challengeWrapperCollapsed': !expanded}">
        <div class="col-lg-8 col-md-12 challengeContent">
            <h2><strong>Elbit Systems</strong></h2>
            <p>For more information or specific questions: <a href="mailto:Tal.Poliner-Shtub@elbitsystems.com">Tal.Poliner-Shtub@elbitsystems.com</a></p>
            <h4><strong>Challenge no. 1</strong></h4>
            <p>Have you ever been in a situation in which you wanted to send a voice message to somebody, but you thought it would be very funny if the voice sounds like a famous character or with a different accent?</p>
            <p><strong>If the answer is YES, then you are invited to participate in a ‘Deep Fake’ challenge!</strong></p>
            <p>Developing an application that records a voice message and knows how to play it in the receiver side using the voice of a famous character and in different intonations (angry, happy, shouting, excited etc.), or with a different accent.
                For the challenge, you will use speech-to-text conversion and then using a DL network which receives text and intonation as input. As for output, it should play the same message but this time the voice will be of a famous figure saying the text in the appropriate intonation.</p>
            <p><strong>And how is all this related to Elbit?</strong></p>
            <p>One of the big challenges today in the communications field is the constant demand for higher data rates. In the past, system requirements were transfering a single low quality voice-call, but today the requirements have changed, and we are requested to transfer several calls simultaneously, in very high quality. One way to boost throughput is to convert speech into text and restore it
                to audio in the receiver.</p>
            <p>The challenge we offer comes from these areas and is based on machine-learning solutions that are implemented
                in advanced radio devices, that are currently being developed in the Elbit Systems C4I & Cyber Labs.</p>
            <p><strong>Requirements:</strong></p>
            <p>The product will be developed in Python. Environment Pytorch, Tensorflow. For the solution you can use Voxceleb dataset.</p>

            <h4><strong>Challenge no. 2</strong></h4>
            <p><strong>Did you see “La casa de papel” ? In Elbit’s bus you wear Dali masks!</strong></p>
            <p>A camera is installed at every entrance. At any point-in-time, we would like to know if those who joined the ride are still on the bus and if any of those who
                left, got back on.</p>
            <p>Whenever it’s hot or cold on the bus, some passengers will take off or put on
                their coat or hat...
                <br>
                The transportation companies shouldn’t be concerned...</p>
            <p><strong>our real interest is:</strong></p>
            <p>Would you be able to distinguish between Tokyo or Berlin, even if people’s faces are covered ? Atonomous decision-making, based on recognition in varied surroundings, is one of the technological challenges we have to cope with at Elbit.</p>
            <p>Image processing, computerized vision, deep learning, etc., any solution will be welcomed!</p>
        </div>
        <div class="col-lg-4 col-md-12 companyLogoWrapper">
            <img src="../../static/elbit_logo.png" alt="" class="company-challenge-logo">
        </div>
        <div class="seeMoreDiv">
            <button @click="expandChallengeWrapper"
                    class="btn btn-small btn-info">{{ buttonText }}</button>
        </div>
    </div>
</template>

<script>
  import challengesExpand from "../assets/challengesExpand";

  export default {
    mixins: [challengesExpand]
  };
</script>

<style scoped>
    .challengeWrapper {
        position: relative;
        margin: 2rem 0;
        box-shadow: inset 0 1px 10px 3px rgba(0, 0, 0, .1);
        padding: 4rem 6rem;
        transition: all 1s 0s ease-in-out;
        display: flex;
        justify-content: center;
        height: auto;
    }

    .challengeWrapperCollapsed {
        height: 750px;
        overflow: hidden;
    }

    .challengeWrapper .seeMoreDiv {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 0;
        height: 3rem;
        padding: 2rem 0;
        background-color: rgba(255, 255, 255, .8);
        width: 100%;
        z-index: 3;
    }

    .challengeContent {
        padding-right: 3rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .companyLogoWrapper {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .elbit {
        background: #003973;
        background: -webkit-linear-gradient(to bottom, #e5c800, rgba(255, 199, 41, 0.82));
        background: linear-gradient(to bottom, #e5c800, rgba(255, 199, 41, 0.82));
    }

    img.company-challenge-logo {
        width: 100%;
    }

    @media screen and (max-width: 1440px) and (min-width: 1201px) {

    }

    @media screen and (max-width: 1200px) {
        .herzel {
            margin-bottom: 2rem;
        }

        h2 {
            margin: 3rem 0 1rem 0;
            font-weight: bold;
        }

        .challengeWrapper {
            padding: 2rem 0 4rem 0;
            display: flex;
            flex-direction: column-reverse;
        }

        .challengeWrapper .seeMoreDiv {
            margin: 0;
        }

        .challengeContent {
            padding: 0 3rem;
        }

        img.company-challenge-logo {
            width: 70%;
            margin: 0 auto;
        }
    }

    @media screen and (max-width: 767px) {
        .herzel {
            width: 20%;
            margin-bottom: 2rem;
        }

        h4 {
            font-size: 1.1rem;
        }

        .challengeWrapper {
            padding: 2rem 0 4rem 0;
            display: flex;
            flex-direction: column-reverse;
        }

        .challengeContent {
            padding: 0 2rem;
        }
    }
</style>