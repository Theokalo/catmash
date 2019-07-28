<template>
    <div>
    <div class="container">
      <h2 align="center">Choose the cutest!!</h2>
      <div class="row">
        <div v-for='(image, index) in twoRandomImages' :key="index" class="col-sm-6">
            <div class="pic-container">
              <div class="pic-style" @click="vote(image.id)">
                <img :src="image.url" height="400" width="400" class="pic-circle" >
              </div> 
            </div>
        </div>
    </div>
    </div>
  </div>
</template>
  

<script>
export default {
  data () {
    return {
      randomImages : [],
      step: 1
    }
  },
  created () {
   this.randomImages = this.images
  },
  computed: {
    // Checking the step 
    twoRandomImages() {
      let twoPictures = []
      let randomIndex, prevRandomIndex
      for (let i = 0; i <=1; i++) {
        prevRandomIndex = randomIndex || -1 
        randomIndex = Math.floor(Math.random(this.randomImages.length)* 100)
        // checking if the image is not the same like the previous one
        if (prevRandomIndex === randomIndex) {
          let check = true
          while (check) {
            randomIndex = Math.floor(Math.random(this.randomImages.length)* 100)
            if (randomIndex !== prevRandomIndex) {
              check = false
            }
          }
        }
        if (this.randomImages[randomIndex]) {
          twoPictures.push(this.randomImages[randomIndex])
        }
    }
    return twoPictures
      
      
      },
      images () {
        return this.$store.state.images
      }
  },
  methods: {
      vote(id) {
          this.step = this.step + 2
          this.$store.commit('SET_VOTE', id)
      }
  }
}
</script>

<style>
.pic-container{
  border-radius: 4px; 
}
.pic-container:hover{
  background-color: lightgrey;
  cursor: pointer;
}
.pic-style{
  display: flex;
  justify-content: center;
}
.pic-circle{
  border-radius: 50%;
  margin: 4px;
}
</style>