<template>
    <div>
        <div class="row">
            <div v-for='(image, index) in twoRandomImages' :key="index" class="col-sm-6">
                <Picture :image="image"/>
            </div>
        </div>
    </div>
</template>

<script>
import Picture from './Picture'
export default {
    components: {
        Picture
    },
    props:['images'],
    computed: {
      // Array of two random Images
      twoRandomImages() {
          let twoPictures = []
          let randomIndex, prevRandomIndex
          for (let i = 0; i <=1; i++) {
              prevRandomIndex = randomIndex || -1 
              randomIndex = Math.floor(Math.random(this.images.length)* 100)
              // checking if the image is not the same like the previous one
              if (prevRandomIndex === randomIndex) {
              let check = true
              while (check) {
                  randomIndex = Math.floor(Math.random(this.images.length)* 100)
                  if (randomIndex !== prevRandomIndex) {
                  check = false
                  }
              }
              }
              if (this.images[randomIndex]) {
              twoPictures.push(this.images[randomIndex])
              }
          }
          return twoPictures
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