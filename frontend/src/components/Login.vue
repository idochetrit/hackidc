<template>
    <div class="container-fluid">
        <div class="row">
            <div class="box">
                <img class="herzel" src="../../static/herzel_black.png">
                <h2>Sign In</h2>
                <h5>Welcome back! Sign in to your account</h5>
                <br>
                <button @click="signin" class="btn btn-lg linkedinBtn"><span class="fab fa-linkedin fa-lg"></span>Log In with LinkedIn</button>
                <hr>
                <h4><strong>Judge?</strong></h4>
                <router-link to="/judges-login" tag="button" class="btn btn-md btn-info" exact>
                    Judges / Mentors Sign In
                </router-link>
            </div>
        </div>
        <div class="overlay"></div>
    </div>
</template>

<script>
import linkedInIntegration from '../assets/linkedInIntegration'
export default {
  mixins: [linkedInIntegration],
  methods: {
    signin() {
        this.integrate();
    }
  }
}
</script>

<style scoped>
    .container-fluid {
        position: relative;
        padding: 8rem 0;
        min-height: 1000px;
        background: #141E30;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to bottom, #212426, #3a3f45);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to bottom, #212426, #3a3f45); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
    .row {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 2;
    }
    .overlay {
        z-index: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.3);
        position: absolute;
        top: 0;
        left: 0;
    }
    .box {
        z-index: 2;
        width: 500px;
        background-color: #f7f7f7;
        border-radius: 5px;
        box-shadow: 0 8px 20px rgba(0,0,0,.9);
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .herzel {
        width: 15%;
        margin-bottom: 2rem;
    }
    h2 {font-weight: bold;}
    h5 {text-align: center;}
    a {
        font-weight: bold;
        text-decoration: none;
    }
    .linkedinBtn {
        background-color: #0077B5;
        color: #fff;
        font-weight: bold;
        padding-right: 2rem;
        padding-left: 2rem;
        display: flex;
        align-items: center;
        border-radius: 25px;
    }
    .linkedinBtn:hover {background-color: #005E93;}
    .fab {
        font-weight: normal;
        margin-right: .7rem;
    }
    hr {width: 100%; margin: 2rem 0;}

    @media screen and (max-width: 1440px) {
        .container-fluid {min-height: 1200px;}
        .box {
            padding: 2rem 0 3rem 0;
            width: 400px;
        }
        .herzel {margin-bottom: 1rem;}
        h5 {font-size: 1.1rem;}
        .linkedinBtn {font-size: 1rem;}
        hr {margin: 1.5rem; width: 80%;}
    }

    @media screen and (max-width: 767px) {
        .container-fluid {min-height: 0;}
        .box {
            padding: 2rem 0 3rem 0;
            width: 350px;
        }
        .herzel {margin-bottom: 1rem;}
        h5 {font-size: 1.1rem;}
        .linkedinBtn {font-size: 1rem;}
        hr {margin: 1.5rem; width: 80%;}
    }

    @media screen and (max-width: 380px) {
        .container-fluid {min-height: 0;}
        .box {
            padding: 1rem 0 1rem 0;
            width: 80%;
        }
        .herzel {margin-bottom: .5rem;}
        h2 { font-size: 1.6rem; }
        h5 {font-size: 1rem;}
        .linkedinBtn {font-size: .9rem;}
        hr {margin: 1.5rem; width: 80%;}
    }
</style>