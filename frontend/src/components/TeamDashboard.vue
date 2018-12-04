<template>
    <div class="container-fluid">
        <div v-if="this.$store.getters.isAuthenticated" class="side-nav">
            <ul>
                <router-link  class="dropdown-item mainNav-item" tag="li" :to="{ name: 'user-dashboard' }" active-class="active" exact><span class="fas fa-user"></span> My Profile</router-link>
                <router-link  class="dropdown-item mainNav-item" tag="li" :to="{ name: 'team-dashboard', params: { codeNumber: user.team.codeNumber } }" active-class="active" exact><span class="fas fa-users"></span> My Team</router-link>
            </ul>
        </div>
        <div class="main-view">
            <div class="dashboard-header">
                <h1>HELLO</h1>
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