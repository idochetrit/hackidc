<template>
    <div class="row challengeWrapper palantir"
         :class="{'challengeWrapperCollapsed': !expanded}">
        <div class="col-lg-8 col-md-12 challengeContent">
            <h2><strong>Fake News by My Part</strong></h2>
            <h4><strong>Sponsored by Palantir</strong></h4>
            <p>A steady and insidious flow of untrue or misleading stories and narratives enter our lives via social media feeds and online news outlets. Accepting a world where people are not accountable for the information they spread, where organized entities utilize bots to distribute fake news and where evidence is no longer the foundation, would be detrimental to our society. It really is no less than a form of psychological warfare.
                Read more on <a target="_blank" href="https://en.wikipedia.org/wiki/Fake_news">wiki</a> in the EU’s “rise of disinformation and fake news”
                <a target="_blank" href="https://ec.europa.eu/jrc/communities/sites/jrccties/files/dewp_201802_digital_transformation_of_news_media_and_the_rise_of_fake_news_final_180418.pdf">working paper</a>.</p>
            <p>Fake news has become a real epidemic. According to <a target="_blank" href="https://cacm.acm.org/magazines/2017/9/220438-is-that-social-bot-behaving-unethically/abstract">research</a> published in September 2017, it is estimated that there are 140 million bots on Facebook (5.5% of accounts), 23 million bots on Twitter (8.5% of accounts) and 27 million bots on Instagram (8.2% of the accounts)</p>
            <p><strong>Identification</strong></p>
            <p>Claire Wardle of <a target="_blank" href="https://en.wikipedia.org/wiki/First_Draft_News">First Draft
                News</a> (nine organizations brought together by the Google News Lab, including
                Facebook and Twitter) identified seven types of fake news:</p>
            <ol>
                <li>satire/parody (no intention to cause harm but can potential fool)</li>
                <li>false connection (headlines/visuals/captions don't support content)</li>
                <li>misleading content (misleading use of information to frame an
                    issue or an individual)
                </li>
                <li>false context (genuine content shared with false contextual info)</li>
                <li>impostor content (genuine sources impersonated with false sources)</li>
                <li>manipulated content (genuine information or imagery manipulated to deceive, such as a "doctored"
                    photo)
                </li>
                <li>fabricated content (100% false content, designed to deceive/harm)</li>
            </ol>
            <p>The International Federation of Library Associations and Institutions (IFLA) published a summary in
                diagram form (pictured at right) to assist people in recognizing fake news</p>

            <p><strong>Distribution</strong></p>
            <p>Fake news are unnaturally distributed by bot networks, fake profiles and trolls. Bots are weaponized
                software programs that use fake/stolen profiles to spread fake news.</p>
            <p>The role that non-human agents play in the amplification of fake news is critical. By manipulating social
                signals and inflating metrics (likes, retweets, views, comments, up-votes) they’re influencing us to
                “join a winning trend” and “jump on the bandwagon”. Read more about the distribution path
                <a target="_blank" href="http://www.cits.ucsb.edu/fake-news/spread">here</a> & <a target="_blank"
                                                                                                  href="https://www.sciencenews.org/article/twitter-bots-fake-news-2016-election">here</a>.
            </p>
            <h4><strong>HackIDC Challenge</strong></h4>
            <p><strong>Call For Action</strong></p>
            <p><strong>If we could cripple fake news’ distribution channels, cutting the cord on them, we’ll win a major battle in this war. To do that, we must identify this activity in real time, and preferably report it as well.</strong>
            </p>
            <p><strong>Scope</strong></p>
            <ul>
                <li>We’re focusing on two of the most prominent social medias: <b>Facebook</b> and <b>Twitter</b>.</li>
                <li>Due to access limitations, we can control the “seed” of a fake news campaign. We’ll assume we have full access to a page/profile subject to a direct fake news assault (directly posting on its page, tagging it or tweeting while refencing it), such as an organization, movement or individual.</li>
                <li>We’ll use the <a target="_blank" href="https://developer.twitter.com/en/docs.html">Twitter APIs</a>,
                    <a target="_blank" href="https://www.cyabra.com/">Cyabra</a>’s proprietary API and possibly some of <a href="https://developers.facebook.com/docs" target="_blank">Facebook</a>’s APIs to validate the profiles interacting with us</li>
            </ul>
            <p><strong>Output</strong></p>
                <p>Produce a summary of suspected profiles, including reasoning and suspected category (bot/fake/paid profile)</p>
        </div>
        <div class="col-lg-4 col-md-12 companyLogoWrapper">
            <img src="../../static/palantir_logo.png" alt="" class="company-challenge-logo">
        </div>
        <div class="seeMoreDiv">
            <button @click="expandChallengeWrapper"
                    class="btn btn-small btn-info">{{ buttonText }}
            </button>
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

    .palantir {
        background: #8e9eab;
        background: -webkit-linear-gradient(to bottom, #eef2f3, #8e9eab);
        background: linear-gradient(to bottom, #eef2f3, #8e9eab);
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