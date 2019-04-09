<template>
    <div class="container-fluid">
        <div class="container">
            <img class="hackidcLogo" src="../../static/logo_white.png">
            <h1 class="text-info"><strong>2019</strong></h1>
            <br>
            <h5>Thank you for your participation in HackIDC 2019!</h5>
            <h5>The Team.</h5>
        </div>
    </div>
</template>

<script>
    export default {
    }
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
    .hackidcLogo {
        width: 40%;
    }
    h5 {
        padding: 0 2rem;
        text-align: center;
        color: #fff;
    }

    @media screen and (max-width: 1200px) {
        .hackidcLogo { width: 30%; }
    }

    @media screen and (max-width: 767px) {
        .hackidcLogo { width: 80%; }
    }

</style>