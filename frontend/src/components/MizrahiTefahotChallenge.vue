<template>
    <div class="row challengeWrapper mizrahi">
        <div class="col-lg-8 col-md-12 challengeContent">
            <h2><strong>Mizrahi Tefahot</strong></h2>
            <p>In the past few years, the banking industry has been going through a digital transformation. As part
                of a unique approach in the Israeli banking system, Mizrahi Tefahot believes in giving personal,
                human service to each and every client, and that every person deserves a person in the bank.</p>
            <p>The bank allows its clients to choose which services they prefer to use online, always giving
                them an option to talk to a banker directly. The bank offers services to private and business
                clients in a variety of fields: accounts, mortgages, investments, loans and pensions advisory, as
                well as advanced digital tools and hybrid banking.</p>
            <h4><strong>Challenge no. 1: Small Businesses</strong></h4>
            <p>Small businesses are required to a variety of actions, similarly to large corporations, but with
                much limited resources and abilities. The bank aspires to be an enabler in the business client&#39;s
                activities – to take away some of the burden, and ease the handling of the ongoing operations,
                along with growing the financial activities of the business with the bank.
                <br>
                Plan a technological platform (as flexible and open possible, remember there is no big internal
                IT team in our example firm) that will bring value to the business client, from a managerial and
                operational aspect (not necessarily financial), that will be flexible and able to evolve and
                expand abilities down the road.</p>

            <h4><strong>Challenge no. 2: Private Customer Experience</strong></h4>
            <p>The bank aspires to constantly upgrade its customer experience, while maintaining relevancy to
                a wide range of clients, with varying technological abilities and financial know-how.
                <br>
                Plan technological and smart tools, that will enhance the connection between the personal
                banker and the client, with emphasis on the communication between them, in a way that will
                be entwined in the daily life of the clients.</p>
        </div>
        <div class="col-lg-4 col-md-12 companyLogoWrapper">
            <img src="../../static/mizrahi_tefahot_logo.png" alt="" class="company-challenge-logo">
        </div>
    </div>
</template>

<script>
  export default {};
</script>

<style scoped>
    .challengeWrapper {
        margin: 2rem 0;
        box-shadow: inset 0 1px 10px 3px rgba(0, 0, 0, .1);
        padding: 3rem 6rem;
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
        justify-content: center;
    }

    .mizrahi {
        background: #F09819;
        background: -webkit-linear-gradient(to bottom, rgba(237, 222, 93, 0.9), rgba(240, 133, 4, 0.9));
        background: linear-gradient(to bottom, rgba(237, 222, 93, 0.9), rgba(240, 133, 4, 0.9));
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
            padding: 6rem 3rem;
            display: flex;
            flex-direction: column-reverse;
        }

        .challengeContent {
            padding-right: 1rem;
        }

        img.company-challenge-logo {
            width: 60%;
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
            padding: 6rem 1rem;
            display: flex;
            flex-direction: column-reverse;
        }

        .challengeContent {
            padding-right: 1rem;
        }
    }
</style>