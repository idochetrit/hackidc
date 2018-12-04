<template>
    <div class="container-fluid">
        <div class="container">
            <h1>hello from team public page</h1>
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
        background-color: #f7f7f7;
    }
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .row {
        padding-bottom: 4rem;
        width: 100%;
    }
    h2 {font-weight: bold; margin-bottom: 4rem; text-align: center;}

    @media screen and (max-width: 1440px) and (min-width: 1201px) {
        .container {width: 80%;}
    }

    @media screen and (max-width: 1200px) {

    }

    @media screen and (max-width: 767px) {

    }

    @media screen and (max-width: 380px) {

    }
</style>