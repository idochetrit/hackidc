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
import Navigation from "./components/Navigation.vue"
import Footer from './components/Footer.vue'
import Loader from './components/Loader.vue'
export default {
  computed: {
    loading() {return this.$store.getters.isLoading},
  },
  components: {
    'app-loader': Loader,
    'app-nav': Navigation,
    'app-footer': Footer,
  },
  name: 'App'
}
</script>

<style scoped>
  * {
    font-family: 'Rajdhani', sans-serif !important;
  }
  #app {
    overflow: hidden;
  }
</style>
