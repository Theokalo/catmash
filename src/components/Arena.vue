<template>
    <div>
    <div class="container">
      <h2 align="center">Choose the cutest!!</h2>
       <pictures :images="images"/>
    </div>
  </div>
</template>
  

<script>
import Pictures from './Pictures'
export default {
  components: {
    Pictures
  },
  computed: {
    // Checking the step 
    images () {
      return this.$store.state.images
    }
  }
}
</script>

