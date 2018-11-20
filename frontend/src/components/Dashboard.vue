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
                <img v-else src="user.userPicture" class="img-responsive img-thumbnail">
                <h2>{{ user.name | displayName }}</h2>
            </div>
            <hr>

        </div>
    </div>
</template>

<script>
export default {
  filters: {
    displayName(v) {
      let firstName = v.split(" ")[0];
      let lastName = v.split(" ")[1];
      return "" + firstName.substring(0,1).toUpperCase() + firstName.substring(1) + " " +
        lastName.substring(0,1).toUpperCase() + lastName.substring(1)
    }
  },
  computed: {
    user() {return this.$store.getters.getUser;}
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
</style>