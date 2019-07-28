<template>
  <div id="app">
    <navbar></navbar>
    <div class="text-center" style="margin: 10px;">
      <img :src="require('./assets/footprint.png')" width="300" height="100"/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: {
    'Navbar' : Navbar
  },
  mounted () {
    this.$store.commit('LOAD_IMAGES')
  }
}
</script>