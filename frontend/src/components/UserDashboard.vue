<template>
    <div class="container-fluid">
        <div v-if="this.$store.getters.isAuthenticated" class="side-nav">
            <ul>
                <router-link  class="dropdown-item mainNav-item" tag="li" :to="{ name: 'user-dashboard' }" active-class="active" exact><span class="fas fa-user"></span> My Profile</router-link>
                <router-link v-if="user.role != 'Loner'" class="dropdown-item mainNav-item" tag="li" :to="{ name: 'team-dashboard', params: { codeNumber: user.team.codeNumber } }" active-class="active" exact><span class="fas fa-users"></span> My Team</router-link>
            </ul>
        </div>
        <div class="main-view">
            <div class="dashboard-header">
                <img v-if="!user.userPicture" src="https://hairo.e.f1v.co/wp-content/themes/romisa/images/placeholder.jpg"
                     class="img-responsive img-thumbnail userThumbnail">
                <img v-else :src="user.userPicture" class="img-responsive img-thumbnail userThumbnail">
                <div class="dashboard-username">
                    <h2>{{ user.name | nameFormatter }}</h2>
                    <h5 v-if="user.role != 'Loner'">Team <strong class="text-info">{{ user.team.codeName | nameFormatter }}</strong></h5>
                    <h5>{{ user.studyYear | yearFormatter }} year {{ user.fieldOfStudy | fieldFormatter | nameFormatter }} student, at {{ user.academicInstitute }}</h5>
                    <a :href="user.linkedInProfileUrl" target="_blank" class="btn btn-md linkedinBtn"><span class="fab fa-linkedin-in fa-lg"></span></a>
                </div>
            </div>
            <hr>
            <div class="dashboard-body">
                <h3>Bio</h3>
                <p class="bio">{{ user.bio }}</p>
                <div class="section" v-if="this.$store.getters.isAuthenticated">
                    <button @click="toggleEdit" v-if="!editArea && user.bio.length > 0" class="btn btn-sm btn-info"><strong>Edit your information</strong></button>
                    <transition mode="out-in" enter-active-class="animated fadeIn">
                        <div v-if="editArea || user.bio.length === 0">
                            <hr>
                            <div class="form-group">
                                <label for="bio-edit">Edit your Bio:</label>
                                <textarea class="form-control" id="bio-edit" rows="4" placeholder="Edit your Bio..."
                                          v-model="newBio"></textarea>
                                <small class="text-muted">Your bio should include a few words about yourself and your skills.</small>
                            </div>
                            <div class="form-group">
                                <label for="email-edit">Edit your phone number:</label>
                                <input class="form-control" id="email-edit"
                                       type="email" :placeholder="user.email" v-model="newEmail">
                                <small class="text-muted">digits only, i.e: 0521234567</small>
                            </div>
                            <div class="form-group">
                                <label for="mobile-edit">Edit your phone number:</label>
                                <input class="form-control" id="mobile-edit"
                                       type="text" minlength="10" maxlength="10" :placeholder="user.mobile"
                                       v-model="newMobile">
                                <small class="text-muted">digits only, i.e: 0521234567</small>
                            </div>
                            <button @click="editBio_done" class="btn btn-sm btn-success">Done</button>
                            <button v-if="user.bio.length > 0" @click="editBio_cancel" class="btn btn-sm btn-secondary">Cancel</button>
                        </div>
                    </transition>
                </div>
                <div class="section" v-if="this.$store.getters.isAuthenticated">
                    <h5>Private Information</h5>
                    <br>
                    <div class="table-responsive">
                        <table class="table table-sm">
                            <tbody>
                            <tr>
                                <th scope="row">Registration Status</th>
                                <td :class="{'text-success': user.registerStatus === 'approved',
                                    'text-danger': user.registerStatus === 'rejected',
                                    'text-warning': user.registerStatus === 'review'}"><strong>{{ user.registerStatus | statusFormatter }}</strong></td>
                            </tr>
                            <tr>
                                <th scope="row">Email Address</th>
                                <td>{{ user.email }}</td>
                            </tr>
                            <tr>
                                <th scope="row">Mobile Number</th>
                                <td>{{ user.mobile }}</td>
                            </tr>
                            <tr>
                                <th scope="row">Your CV</th>
                                <td><a target="_blank" href="/api/users/self/uploads/cv"
                                       class="btn btn-sm btn-secondary">View CV</a></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <button @click="signout" class="btn btn-md btn-danger signoutBtn">Sign Out</button>
                </div>
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
      editFlag: false,
      newBio: "",
      newEmail: "",
      newMobile: "",
    }
  },
  computed: {
    user() {return this.$store.getters.getUser;},
    editArea() { return this.editFlag; },
  },
  methods: {
    toggleEdit() {this.editFlag = !this.editFlag},
    editBio_cancel() {
      this.newBio = ""; this.newMobile = ""; this.newEmail = "";
      this.editFlag = !this.editFlag;
    },
    editBio_done() {
      this.editFlag = false;
      axios.patch(`/api/users/${this.user.id}`,
        {
          user: {
            bio: this.newBio,
            mobile: this.newMobile,
            email: this.newEmail,
          }
        })
        .then(res => {
            this.$store.dispatch("updateUser", res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    signout() {
      this.$store.dispatch("signOut")
        .then(() => {
          axios.get('/api/auth/logout')
            .then((res) => {
              console.log("User logged out.", res);
            });
        })
        .then(() => {
          this.$router.push({name: 'home'});
        });
    }
  },
  created() {
    this.authRequest();
  },
}
</script>

<style src="../assets/dashboard.css" scoped>

</style>