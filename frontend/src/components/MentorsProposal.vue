<template>
    <div class="container-fluid">
        <div class="container">
            <img class="herzel" src="../../static/herzel_black.png">
            <h2>Mentors and Judges</h2>
            <h3>Interested in applying to HackIDC as a Mentor or Judge?</h3>
            <div class="row">
                <div class="offset-lg-1 col-lg-10 col-md-12">
                    <h5>About HackIDC</h5>
                    <p>HackIDC is the largest student hackathon in Israel held annually for the sixth consecutive year, with more than 300 contestants coming from all major Israeli academic institutions.
                        This year, the hackathon will take place on April 11-12, 2019  for ~36 hours of wonderful hacking, at the Interdisciplinary Center, Herzliya.</p>
                    <p>Over one hundred mentors and judges will participate in the event.
                        The event is sponsored by top industry leaders.
                        Please see below examples of partners who will sponsor the event the following year and partners who have sponsored in the past few years: Google, Microsoft, Essence Group, Migdal Insurance Company, Playtika, Shookit, CheckPoint, WSC Sports, Amadeus Menorah Mivtachim, Electra and others.</p>
                    <h5>Competition Outline</h5>
                    <p>Each participating team counts up to five participants.
                        HackIDC believes that creative freedom is essential in enabling true innovation. Therefore, HackIDC does not limit its participants to a specific theme, and allows the students to develop any project they choose. This provides a unique opportunity for sponsors to host a challenge in any field of their choice.</p>
                    <p>After 36 hours (round A) ,our staff of judges will pick 7 teams which will proceed to round B.</p>
                    <p>Round B contain 8-10 senior judges, the judges will determine the teams winning the competition:</p>
                    <ol>
                        <li>First place - a prize of 15,000 NIS.</li>
                        <li>Second place - a prize of 7,000 NIS.</li>
                        <li>Third place - a prize of 3,000 NIS.</li>
                    </ol>
                    <small>Note: The decision to win the challenge is under the responsibility of the company that sponsors.</small>
                    <h4><strong>We are interested in recruiting Mentors and Judges for the event!</strong></h4>
                    <h5>Mentor - Description</h5>
                    <p>A mentor is a person with one or more of the following skills:
                        Back-End, Front-End, UX / UI, Product Manager, Graphic Design, Pitch, and Biz-Dev.
                        The role requires advising and counseling participating teams during the event.</p>
                    <h5>Judge - Round A - Description</h5>
                    <p>A judge in Round A is a person with one or more of the following skills:
                        Back-End, Front-End, UX / UI Investment, Product Manager, Graphic Design, Pitch, Biz-Dev and more.
                        The role requires critical insight and understanding with product optimization.</p>

                    <p>Added value for a volunteer as a judge/mentor:</p>
                    <ol>
                        <li>Influence on the future generation.</li>
                        <li>Effective recruitment of talent.</li>
                        <li>Advertising.</li>
                    </ol>

                    <div class="button-wrapper">
                        <p><strong>For registration for Mentor/Judge (Round A) position please enter the link below:</strong></p>
                        <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdOsKiYRCzePJSbcBrtoehb_bMVjIWNnC_SaSeuZKJWP8GviQ/viewform"
                           class="btn btn-info btn-md">Sign Up for Mentor or Judge Position</a>
                    </div>
                    <p>For any additional information please contact our Judges and Mentor Manager, at
                        <a href="mailto:lidorhezkelo@hackidc.com">lidorhezkelo@hackidc.com</a></p>

                    <h5 style="text-align: center;"><strong>Thank you for your cooperation!</strong></h5>
                    <h4><strong>HackIDC 2019 Team</strong></h4>
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
        background-color: #f7f7f7;
        min-height: 1000px;
    }
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .herzel {
        width: 10%;
        margin-bottom: 2rem;
    }
    h2 {font-weight: bold;}
    h3 {  font-size: 1.3rem; margin-bottom: 2rem; text-align: center; }
    h5 { margin: 2rem 0 .5rem 0; }
    h4 { margin: 2rem 0 .5rem 0; text-align: center; }
    a:not(.btn) {font-weight: bold; text-decoration: none; color: #000;}
    a.btn { margin-bottom: 1rem; }

    @media screen and (max-width: 1440px) and (min-width: 1201px) {
        .container {width: 80%;}
    }

    @media screen and (max-width: 767px) {
        .container-fluid {padding: 8rem 0 4rem 0;}
        .herzel {width: 20%;}
        h3 { font-size: 1.2rem; padding: 0 .5rem; }
        .button-wrapper {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }
    @media screen and (max-width: 380px) {
        .container-fluid {padding: 6rem 0 4rem 0;}
        h5 { font-size: 1rem; }
        h4 { font-size: 1.2rem; }
        h3 { font-size: 1.1rem; padding: 0 .5rem; }
        h2 { font-size: 1.3rem; }
        p { font-size: .9rem; }
    }
</style>