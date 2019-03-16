<template>
    <div class="container-fluid">
        <div class="row">
            <form class="box" action="/api/auth/login" method="post">
                <img class="herzel" src="../../static/herzel_black.png">
                <h2>Judges Area - Sign In</h2>
                <h5>Welcome! Sign in to your account</h5>
                <br>
                <div class="form-group">
                    <input id="judges-username" placeholder="Username" class="form-control" type="text" name="email">
                </div>
                <div class="form-group">
                    <input id="judges-password" placeholder="Password" class="form-control" type="password" name="password">
                    <small v-if="showError" class="text-danger">Wrong username/password, try again.</small>
                </div>
                <button class="btn btn-info btn-md">Sign in</button>
            </form>
        </div>
        <div class="overlay"></div>
    </div>
</template>

<script>
import axios from 'axios';
  export default {
    data() {
      return {};
    },
    methods: {
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
        height: 500px;
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
    hr {width: 100%; margin: 2rem 0;}
    .form-group { width: 80%; }
    @media screen and (max-width: 1440px) {
        .container-fluid {min-height: 1200px;}
        .box {
            padding: 2rem 0 1rem 0;
            width: 400px;
            height: 450px;
        }
        .herzel {margin-bottom: 1rem;}
        h5 {font-size: 1.1rem;}
        hr {margin: 1.5rem; width: 80%;}
    }

    @media screen and (max-width: 767px) {
        .container-fluid {min-height: 0;}
        .box {
            padding: 2rem 0 1rem 0;
            width: 350px;
            height: 400px;
        }
        .herzel {margin-bottom: 1rem;}
        h5 {font-size: 1.1rem;}
        hr {margin: 1.5rem; width: 80%;}
    }

    @media screen and (max-width: 380px) {
        .container-fluid {min-height: 0;}
        .box {
            padding: 1rem 0 1rem 0;
            width: 80%;
            height: 350px;
        }
        .herzel {margin-bottom: .5rem;}
        h2 { font-size: 1.6rem; }
        h5 {font-size: 1rem;}
        hr {margin: 1.5rem; width: 80%;}
    }
</style>