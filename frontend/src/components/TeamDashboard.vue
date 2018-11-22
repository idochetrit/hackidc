<template>
    <div class="container-fluid">
        <div v-if="this.$store.getters.isAuthenticated" class="side-nav">
            <ul>
                <router-link tag="li" to="/dashboard/profile" active-class="active" exact><span class="fas fa-user"></span> My Profile</router-link>
                <router-link tag="li" to="/dashboard/team" active-class="active" exact><span class="fas fa-users"></span> My Team</router-link>
            </ul>
        </div>
        <div class="main-view">
            <div class="dashboard-header">

            </div>
            <hr>
            <div class="dashboard-body">

            </div>

        </div>
    </div>
</template>

<script>
  import linkedInIntegration from '../assets/linkedInIntegration'
  import filters from '../assets/filters'
  export default {
    mixins: [linkedInIntegration, filters],
    data() {
      return {
        editBio_flag: false
      }
    },
    computed: {
      user() {return this.$store.getters.getUser;}
    },
    methods: {

    },
    created() {
      this.authRequest();
    }
  }
</script>

<style src="../assets/dashboard.css" scoped>

</style>