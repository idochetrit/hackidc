<template>
    <div class="container-fluid">
        <div class="container">
            <div class="row">
                <span class="fas fa-users fa-4x"></span>
                <h1>Team {{ team.codeName | nameFormatter }}</h1>
                <h5>team number: <strong class="text-info">{{ team.codeNumber }}</strong>
                    <span v-if="team.classRoom">,&nbsp;class room: 
                        <strong class="text-info">{{ team.classRoom }}</strong>
                    </span>
                </h5>
            </div>
            <h5>Members:</h5>
            <div class="team-members-wrapper">
                <div class="team-member" :key="m.id" v-for="m in team.users">
                    <a :href="'/users/' + m.id" target="_blank">
                        <div class="team-member-thumbnail-wrapper">
                            <img v-if="!m.userPicture" src="https://hairo.e.f1v.co/wp-content/themes/romisa/images/placeholder.jpg"
                                 class="img-responsive">
                            <img v-else :src="m.userPicture" class="img-responsive">
                        </div>
                        <h5>{{ m.name | nameFormatter }}</h5>
                    </a>
                </div>
            </div>
            <div class="row profile-body">
                <div class="des-wrapper">
                    <h3>Team Description</h3>
                    <p class="description">{{ team.description }}</p>
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
      team: {
        codeName: "", codeNumber: "", description: "", challengeId: "", users: []
      }
    };
  },
  computed: {
    code() { return this.$route.params.codeNumber; },
  },
  beforeRouteEnter (to, from, next) {
    store.dispatch("loadingStart");
    axios.get(`/api/teams/public/${to.params.codeNumber}`)
      .then(res => {
        next(vm => {
          vm.team = res.data;
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
    h1 {font-weight: bold; text-align: center; margin: 1rem;}
    h3 { margin: 1rem 0 .5rem 0; font-size: 1.5rem; }
    h5 {margin-bottom: 1rem; }
    .profile-body {
        align-items: flex-start;
    }
    .des-wrapper { width: 70%; }
    .description {
        white-space: pre-line;
        font-size: 1.1rem;
        padding-right: 35%;
        clear: both;
        max-height: 250px;
        overflow: scroll;
    }
    a { color: #000; text-decoration: none; }
    .team-members-wrapper {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
    .team-member h5 { text-align: center; font-size: 1rem; padding: 0; }
    .team-member {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-basis: 15%;
        margin: 1rem;
    }
    .team-member-thumbnail-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        margin-bottom: .5rem;
        border: 4px solid white;
    }
    .team-member-thumbnail-wrapper img { min-width: 100%; width: 100%; }
    @media screen and (max-width: 1440px) and (min-width: 1201px) {
        .container {width: 80%;}
    }

    @media screen and (max-width: 1200px) {
        .container-fluid { min-height: 1200px; }
        .team-member { margin: 0; flex-basis: 20%; text-align: center; }
        .team-member h5 { font-size: 1.1rem; }
    }

    @media screen and (max-width: 767px) {
        .container-fluid { padding: 4rem 0; }
        .row { padding: 1rem 0; }
        .fas { font-size: 4rem; }
        h1 { margin-bottom: 0; }
        h3 { font-size: 1.5rem; }
        h4 { font-size: 1.2rem; }
        h5 { padding: 0; }
        .profile-body { align-items: center; }
        .des-wrapper {
            padding: 0 1rem;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
        .team-member { margin: .5rem; flex-basis: 20%; }
        .team-member-thumbnail-wrapper { height: 100px; width: 100px; }
    }

    @media screen and (max-width: 380px) {
        .fas { font-size: 3.5rem; }
        p.description { font-size: .9rem; }
        h1 { font-size: 2rem; }
        h5 { font-size: 1rem; padding: 0 1rem; }
        .team-member h5 { padding: 0; font-size: 1rem; }
    }
</style>