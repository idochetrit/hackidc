<template>
    <div id="app">
        <app-nav></app-nav>
        <transition mode="out-in" enter-active-class="animated fadeIn">
            <app-loader v-if="loading"></app-loader>
            <router-view v-else></router-view>
        </transition>
        <app-footer></app-footer>
    </div>
</template>

<script>
  import axios from "axios";
  import linkedInIntegration from "./assets/linkedInIntegration";
  import Navigation from "./components/Navigation.vue";
  import Footer from "./components/Footer.vue";
  import Loader from "./components/Loader.vue";
  import BinaryLoader from "./components/BinaryLoader.vue";

  export default {
    computed: {
      loading() {
        return this.$store.getters.isLoading;
      }
    },
    methods: {
      fetchCurrentJudgingRound() {
        setInterval(() => {
          axios.get("/api/judges/round")
          .then(res => res.data)
          .then(data => {
            this.$store.dispatch("setJudgingRound", Number(data.round));
          })
        }, 3000)
      }
    },
    components: {
      "app-loader": BinaryLoader,
      "app-nav": Navigation,
      "app-footer": Footer
    },
    mixins: [linkedInIntegration],
    beforeMount() {
      return this.authRequest().then(() =>
        this.fetchCurrentJudgingRound()
      );
    },
    created() {
      return axios.interceptors.response.use(undefined, function(err) {
        return new Promise(() => {
          if (err.status === 401 && err.config) {
            this.$store.dispatch("signOut");
            this.$router.push({ name: "login" });
          }
          throw err;
        });
      });
    },
    name: "App"
  };
</script>

<style scoped>
    * {
        font-family: 'Rajdhani', sans-serif !important;
    }

    button {
        font-weight: bold !important;
    }

    #app {
        overflow: hidden;
    }
</style>
