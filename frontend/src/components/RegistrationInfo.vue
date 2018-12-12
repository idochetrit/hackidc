<template>
    <div class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h4>Please note - before signing up:</h4>
                    <p class="lead text-info">Before starting the registration process, please take a minute to fully read the following points.</p>
                    <ol>
                        <li>For your Hackathon project, you can either:
                            <ul>
                                <li>Take on a challenge from one of our sponsors, and compete other teams on this challenge.</li>
                                <li>Compete in the general competition, with your own special idea - HackIDC 2019 has no particular theme.</li>
                            </ul>
                            <small class="text-muted"><strong>*</strong> Teams that take on a challenge are judged in both challenge and general competition.</small>
                        </li>
                        <li>The sponsors' challenges will be officially introduced on Pre-Hack day, taking place on April 1st.
                            <br><strong>Attendance of at-least 2 team-members is mandatory.</strong>
                        </li>
                        <li>
                            Teams: please nominate a Team Builder.
                            <br>Team Builders should sign up before the other team-members, and specify they are signing up as Team Builders. At the end of the registration,
                            we will generate a team number, which each other team-member should fill in when signing up.
                        </li>
                        <li>
                            This year, you can sign up as "Loner" - meaning, signing up on your own. After registration closes, we will team you up with other participants.
                        </li>
                        <li>
                            In order to register to HackIDC 2019, you will need a LinkedIn account (it does not have to be fully active).
                            <br>If you do not have one, <a class="text-info" href="https://www.linkedin.com/" target="_blank">open one here</a>, then start the registration.
                        </li>
                        <li>
                            As places are limited, all application forms will be examined. We will inform you regarding your participation in HackIDC 2019 shortly after the registration closes.
                        </li>
                        <li>
                            All fields in the registration form are required.
                        </li>
                    </ol>
                    <div class="button-wrapper">
                        <button @click="toHome" class="btn btn-md btn-secondary">Back home</button>
                        <button @click="toSignUp" class="btn btn-md btn-success">Continue</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    toHome() {
      this.$router.push({ name: "home" });
    },
    toSignUp() {
      this.$router.push({ name: "signup" });
    }
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
    .row { padding: 1rem; }
    .button-wrapper {
        width:100%;
        display: flex;
        justify-content: center;
        margin-top: 2rem;
    }
    button { margin: 0 .3rem; }
    h4, p.lead { text-align: center; font-weight: bold; }
    a { font-weight: bold; text-decoration: none; }
    ol li { padding: 0 1rem; margin: 1rem 0; }
    ol li ul li { padding: 0 1rem; margin: 0; }

    @media screen and (max-width: 767px) {
        .container-fluid {
            padding: 6rem 0;
        }
        .button-wrapper {
            margin-top: 1rem;
            width:100%;
            display: flex;
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;
        }
        button { margin: .2rem 0; }
        h4 { font-size: 1.3rem; }
        p.lead { font-size: 1rem; }
        ol { padding: 1rem .3rem 0 1rem; }
        ol li { padding: 0 .5rem; }
        ol ul { padding: 1rem; }
    }

    @media screen and (max-width: 767px) {
        .container-fluid { padding: 4rem 0; }
        .button-wrapper { display: flex; flex-direction: row; }
        button { margin: 0 .2rem; }
        h4 { font-size: 1.2rem; }
        ol li { padding: 0 .2rem; }
    }

    @media screen and (max-width: 380px) {
        .container-fluid { padding: 4rem 0; }
        .container { padding: 0 .5rem; }
        .row { padding: 0 .5rem; }
        h4 { font-size: 1.2rem; }
        ol { padding: 0 0 0 1rem; }

        ol li { padding: 0 .2rem; font-size: .8rem; }
        button { font-size: .8rem; }
    }
</style>