<template>
    <div class="container-fluid">
        <h2>{{ user.name }}</h2>
        <hr>
        {{ user }}
    </div>
</template>

<script>
export default {
  computed: {
    user() {return this.$store.getters.getUser;}
  }
}
</script>

<style scoped>
    .container-fluid {
        padding: 8rem;
        margin-top: 3rem;
        min-height: 1000px;
        background-color: #f7f7f7;
    }
</style>