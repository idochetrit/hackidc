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
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Loader from './components/Loader'
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
    font-family: 'Roboto', sans-serif !important;
  }
</style>
