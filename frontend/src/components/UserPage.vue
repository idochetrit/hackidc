<template>
    <div class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="thumbnail-wrapper">
                    <img v-if="!user.userPicture" src="https://hairo.e.f1v.co/wp-content/themes/romisa/images/placeholder.jpg"
                         class="img-responsive userThumbnail">
                    <img v-else :src="user.userPicture" class="img-responsive userThumbnail">
                </div>
                <h1>{{ user.name | nameFormatter }}</h1>
                <h5>{{ user.studyYear | yearFormatter }} year {{ user.fieldOfStudy | fieldFormatter | nameFormatter }} student, at {{ user.academicInstitute }}</h5>
                <a :href="user.linkedInProfileUrl" target="_blank" class="btn btn-md linkedinBtn"><span class="fab fa-linkedin-in fa-lg"></span></a>
            </div>
            <div v-if="authUser.role &&['judge', 'mentor'].includes(authUser.role.toLowerCase()) && canViewCV">
                <a :href="`/api/users/self/uploads/${user.id}/cv`" target="_blank" class="btn btn-md btn-outline-info">
                    View CV
                </a>
            </div>
            <div class="row profile-body">
                <h4 v-if="user.role != 'Loner'">
                    <span class="fas fa-user-tie fa-lg"></span> Member of team
                    <a :href="'/teams/' + user.team.codeNumber" target="_blank">
                        <strong class="text-info">{{ user.team.codeName | nameFormatter }}</strong>
                    </a>
                </h4>
                <div class="bio-wrapper">
                    <h3>Bio</h3>
                    <div class="bio-wrapper">
                        <p class="bio">{{ user.bio }}</p>
                    </div>
                </div>
            </div>
            <hr>
            <h5 v-if="teammates.length === 0">There are no other members in team {{ user.team.codeName | nameFormatter }} yet!</h5>
            <div v-else-if="user.role != 'Loner'" class="row">
                <h5>Other members in team <strong>{{ user.team.codeName | nameFormatter }}</strong></h5>
                <div class="team-members-wrapper">
                    <a :href="'/users/' + m.id" target="_blank" :key="m.id" v-for="m in teammates" class="team-member">
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
import axios from "axios";
import { store } from "../store/store";
import filters from "../assets/filters";
export default {
  mixins: [filters],
  data() {
    return {
      user: {
        userPicture: "", name: "", studyYear: "", fieldOfStudy: "", linkedInProfileUrl: "", bio: "", canViewCV: false,
        team: { codeNumber: "", codeName: "", users: [] }
      }
    };
  },
  computed: {
    id() { return this.$route.params.id; },
    canViewCV() { return this.user.canViewCV; },
    teammates() {
      return this.user.team.users.filter(m => m.id !== Number(this.id));
    },
    authUser() { return this.$store.getters.getUser }
  },
  beforeRouteEnter (to, from, next) {
    store.dispatch("loadingStart");
    axios.get(`/api/users/public/${to.params.id}`)
      .then(res => {
        next(vm => {
          vm.user = res.data;
        });
      })
      .catch(err => {
        console.warn(err);
        next({ name: "404" });
      });
  }
}
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
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding: 2rem 0;
        width: 90%;
    }
    hr {
        width: 90%;
        border: .5px solid rgba(0,0,0,.05);
    }
    .thumbnail-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border-radius: 50%;
        width: 150px;
        height: 150px;
        margin-bottom: 1rem;
        border: 4px solid white;
    }
    .userThumbnail {
        min-width: 100%;
        width: 100%;
    }
    h1 {font-weight: bold; text-align: center;}
    h3 { margin: 1rem 0 .5rem 0; font-size: 1.6rem; }
    h4 { font-size: 1.3rem; }
    h5 {margin-bottom: 1rem; text-align: center;}
    .linkedinBtn {
        background-color: #0077B5;
        color: #fff;
        font-weight: bold;
        display: flex;
        align-items: center;
        padding: .5rem;
    }
    a.linkedinBtn, a.linkedinBtn:hover {color: #fff;}
    a { color: #000; text-decoration: none; }
    .profile-body {
        align-items: flex-start;
    }
    .bio-wrapper { width: 70%; }
    .bio {
        white-space: pre-line;
        font-size: 1.1rem;
        padding-right: 35%;
        clear: both;
        max-height: 250px;
        overflow: scroll;
    }
    .fas { margin-right: .5rem; margin-bottom: 1rem; }
    .team-members-wrapper {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
    .team-member {
        display: flex;
        flex-basis: 25%;
        flex-direction: column;
        align-items: center;
    }
    .team-member h5 { padding: 0; }
    .teammate-thumbnail {
        margin-bottom: .5rem;
        border-radius: 50%;
        width: 100px;
        height: 100px;
    }

    @media screen and (max-width: 1440px) and (min-width: 1201px) {
        .container {width: 80%;}
    }

    @media screen and (max-width: 1200px) {

    }
    @media screen and (max-width: 767px) {
        .container-fluid { padding: 4rem 0; }
        .row { padding: 1rem 0; }
        h5 { padding: 0 2.5rem; }
        .profile-body { align-items: center; }
        .bio-wrapper {
            padding: 0 1rem;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
        .team-member { flex-basis: 50%; }
    }
    @media screen and (max-width: 380px) {
        .userThumbnail {
            width: 150px;
            height: 150px;
            margin-bottom: 1.5rem;
        }
        p.bio { font-size: .9rem; }
        h1 { font-size: 2rem; }
        h3 { font-size: 1.5rem; }
        h5 { font-size: 1rem; padding: 0 1rem; }
        h4 { font-size: 1.2rem; }
    }
</style>