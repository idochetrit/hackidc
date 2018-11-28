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
                <img v-if="!user.userPicture" src="https://hairo.e.f1v.co/wp-content/themes/romisa/images/placeholder.jpg"
                     class="img-responsive img-thumbnail userThumbnail">
                <img v-else :src="user.userPicture" class="img-responsive img-thumbnail userThumbnail">
                <div class="dashboard-username">
                    <h2>{{ user.name | nameFormatter }}</h2>
                    <h5>Team <strong class="text-info">{{ user.name | nameFormatter }}</strong></h5> <!--change to team name -->
                    <h5>{{ user.studyYear | yearFormatter }} year, {{ user.fieldOfStudy | fieldFormatter | nameFormatter }}</h5>
                    <a href="#" target="_blank" class="btn btn-md linkedinBtn"><span class="fab fa-linkedin-in fa-lg"></span></a>
                </div>
            </div>
            <hr>
            <div class="dashboard-body">
                <h3>Bio</h3>
                <p>{{ user.bio }}</p>
                <button @click="editBio" v-if="this.$store.getters.isAuthenticated" class="btn btn-sm btn-info"><strong>Edit Bio</strong></button>
                <transition mode="out-in" enter-active-class="animated fadeIn">
                    <div v-if="editBio_flag">
                        <hr>
                        <div class="form-group">
                            <label for="bio-edit">Edit your Bio:</label>
                            <textarea class="form-control" id="bio-edit" rows="4" v-model="newBio"></textarea>
                        </div>
                        <button @click="editBio_done" class="btn btn-sm btn-success">Done</button>
                    </div>
                </transition>
            </div>

        </div>
    </div>
</template>

<script>
import linkedInIntegration from '../assets/linkedInIntegration'
import filters from '../assets/filters'
import axios from 'axios'
export default {
  mixins: [linkedInIntegration, filters],
  data() {
    return {
      editBio_flag: false,
      newBio: "",
    }
  },
  computed: {
    user() {return this.$store.getters.getUser;}
  },
  methods: {
    editBio() {this.editBio_flag = !this.editBio_flag;},
    editBio_done() {
      axios.patch(`/api/users/${this.user.id}`, { user: { bio: this.newBio } })
        .then(res => {
            this.$store.dispatch("updateUser", res.data);
        })
        .catch(err => {
          console.log(err);
        });
      this.editBio_flag = !this.editBio_flag;
    }
  },
  created() {
    this.authRequest();
  }
}
</script>

<style src="../assets/dashboard.css" scoped>

</style>