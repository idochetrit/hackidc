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
                <span class="fas fa-users fa-4x"></span>
                <div class="dashboard-username">
                    <h2>Team {{ team.codeName | nameFormatter }}</h2>
                    <h5>team number: <strong class="text-info">{{ user.team.codeNumber }}</strong></h5>
                </div>
            </div>
            <hr>
            <div class="dashboard-body">
                <h3>Description</h3>
                <p class="bio">{{ team.description }}</p>
                <div class="section" v-if="this.$store.getters.isAuthenticated">
                    <button @click="toggleEdit" v-if="!editArea" class="btn btn-sm btn-info"><strong>Edit the team information</strong></button>
                    <transition mode="out-in" enter-active-class="animated fadeIn">
                        <div v-if="editArea || !team.description">
                            <hr>
                            <div class="form-group">
                                <label for="bio-edit">Edit your team description:</label>
                                <textarea class="form-control" id="bio-edit" rows="4" placeholder="Edit your Description..."
                                          v-model="newDescription"></textarea>
                            </div>
                            <button @click="editDes_done" class="btn btn-sm btn-success">Done</button>
                            <button v-if="team.description" @click="editDes_cancel" class="btn btn-sm btn-secondary">Cancel</button>
                        </div>
                    </transition>
                </div>
                <h5>Team Members:</h5>
                <br>
                <div class="team-members-wrapper">
                    <a :href="'/users/' + m.id" target="_blank" :key="m.id" v-for="m in team.users" class="team-member">
                        <img v-if="!m.userPicture" src="https://hairo.e.f1v.co/wp-content/themes/romisa/images/placeholder.jpg"
                             class="img-responsive img-thumbnail teammate-thumbnail">
                        <img v-else :src="m.userPicture" class="img-responsive img-thumbnail teammate-thumbnail">
                        <h5>{{ m.name | nameFormatter }}</h5>
                    </a>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
  import linkedInIntegration from "../assets/linkedInIntegration"
  import filters from "../assets/filters"
  import axios from "axios";
  export default {
    mixins: [linkedInIntegration, filters],
    data() {
      return {
        editFlag: false,
        newDescription: "",
      }
    },
    computed: {
      user() {return this.$store.getters.getUser;},
      team() {return this.user.team; },
      editArea() {
        return this.editFlag;
      }
    },
    methods: {
      toggleEdit() {this.editFlag = !this.editFlag},
      editDes_cancel() {
        this.newDescription = "";
        this.editFlag = !this.editFlag;
      },
      editDes_done() {
        axios.patch("/api/teams/self",
          {
            team: {
              description: this.newDescription,
            }
          })
          .then(res => {
            this.$store.dispatch("updateUser", res.data);
          })
          .catch(err => {
            console.log(err);
          });
        this.editFlag = !this.editFlag;
      },
    },
    created() {
      this.authRequest();
    },
  }
</script>

<style src="../assets/dashboard.css" scoped>
</style>