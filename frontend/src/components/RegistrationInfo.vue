<template>
    <div class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h4>Please note - before registering:</h4>
                    <p class="lead text-info">Before starting the registration process, please take a minute to fully read the following points.</p>
                    <ol>
                        <li>For your Hackathon project, you can choose one of the two:
                            <ul>
                                <li>To take on a challenge from one of our sponsors, and compete other teams on this challenge.</li>
                                <li>To compete in the general competition, with your own special idea - HackIDC 2019 has no particular theme.</li>
                            </ul>
                        </li>
                        <li>The sponsors' challenges will be officially introduced on Pre-Hack day, taking place on April 1st.
                            <br><strong>Attendance of at-least 2 team-members is mandatory.</strong>
                        </li>
                        <li>
                            Teams - please nominate a Team Builder.
                            <br>Team Builders should sign up before the other team-members, and specify they are signing up as Team Builders. At the end of the registration,
                            we will generate a team number, which each other team-member should specify when signing up.
                        </li>
                        <li>
                            In order to register to HackIDC 2019, you will need a LinkedIn account. It does not have to be fully active, but it's looks better for you :)
                            <br>If you do not have one, <a class="text-info" href="https://www.linkedin.com/" target="_blank">open one here</a>, then start the registration.
                        </li>
                        <li>
                            All the fields in the registration form are mandatory.
                        </li>
                    </ol>
                    <div class="button-wrapper">
                        <button @click="toHome" class="btn btn-md btn-secondary">Back home</button>
                        <button @click="toSignUp" class="btn btn-md btn-success">I understand. Start the registration</button>
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

    @media screen and (max-width: 380px) {
        .container-fluid { padding: 4rem 0; }
        h4 { font-size: 1.2rem; }
        ol li { padding: 0 .2rem; }
    }
</style>