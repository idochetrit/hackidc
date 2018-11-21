<template>
    <div class="container-fluid">
        <div class="side-nav">
            <ul>
                <li class="active"><span class="fas fa-user"></span> My Profile</li>
                <li><span class="fas fa-users"></span> My Team</li>
            </ul>
        </div>
        <div class="main-view">
            <div class="dashboard-header">
                <img v-if="!user.userPicture" src="https://hairo.e.f1v.co/wp-content/themes/romisa/images/placeholder.jpg"
                     class="img-responsive img-thumbnail userThumbnail">
                <img v-else :src="user.userPicture" class="img-responsive img-thumbnail userThumbnail">
                <div class="dashboard-username">
                    <h2>{{ user.name | nameFormatter }}</h2>
                    <h5>{{ user.fieldOfStudy | fieldFormatter | nameFormatter }}</h5>
                    <a href="#" target="_blank" class="btn btn-md linkedinBtn"><span class="fab fa-linkedin-in fa-lg"></span></a>
                </div>
            </div>
            <hr>
            <div class="dashboard-body">
                {{ user.rawLinkedin }}
                <h3>Bio</h3>
                <p>{{ user.bio }}</p>
            </div>

        </div>
    </div>
</template>

<script>
import linkedInIntegration from '../assets/linkedInIntegration'
export default {
  filters: {
    nameFormatter(v) {
      let firstName = v.split(" ")[0];
      let lastName = v.split(" ")[1];
      return "" + firstName.substring(0,1).toUpperCase() + firstName.substring(1) + " " +
        lastName.substring(0,1).toUpperCase() + lastName.substring(1)
    },
    fieldFormatter(v) {
      return v.replace('-', ' ');
    }
  },
  mixins: [linkedInIntegration],
  computed: {
    user() {return this.$store.getters.getUser;}
  },
  created() {
    this.authRequest();
  }
}
</script>

<style scoped>
    .container-fluid {
        padding: 0;
        margin-top: 3rem;
        min-height: 1000px;
        background-color: #f7f7f7;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .side-nav {
        margin-top: 3rem;
        flex-basis: 20%;
        background-color: #212426;
    }
    .main-view {
        margin-top: 3rem;
        flex-basis: 80%;
        padding: 3rem;
    }
    .side-nav ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
    }
    .side-nav li {
        padding: .5rem 0 .5rem 2rem;
        color: #fff;
    }
    .side-nav li.active {
        background-color: #373737;
        border-right: 6px solid #1fbed5;
    }
    .side-nav li:hover {
        cursor: pointer;
    }
    h2 {font-weight: bold;}
    .userThumbnail {
        border-radius: 50%;
        width: 150px;
        margin-right: 1rem;
    }
    .dashboard-header {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: flex-start;
    }
    .dashboard-username {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: .5rem 1rem;
    }
    .linkedinBtn {
        background-color: #0077B5;
        color: #fff;
        font-weight: bold;
        display: flex;
        align-items: center;
        padding: .5rem;
    }
    a.linkedinBtn, a.linkedinBtn:hover {color: #fff;}
    .dashboard-body {
        padding: 2rem 0;
    }
</style>