<template>
    <div>
    <div class="container">
      <div class="row">
      <div v-for='(image, index) in twoPictures' :key="index" class="col-sm-6">
          <div class="img-container">
            <div class="img-style" @click="setStep()">
              <img :src="image.url" height="400" width="400" >
            </div>
            {{image.id}}
          </div>
      </div>
    </div>
    </div>
  </div>
</template>
  

<script>
import Api from  '../cats.json'

export default {
    data () {
    return {
      randomImages : [],
      step: 1
    }
  },
  mounted () {
    let images = []
    Api.images.map(image => {
      images.push(image)
    })

    for (var i = images.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = images[j];
        
        this.randomImages.push(temp)
    }
    console.log(this.randomImages)
  },
  computed: {
      twoPictures() {
          let twoPictures = []
          if (this.step === 1){
            for (let i = 0; i <= this.step; i++){
                twoPictures.push(this.randomImages[i])
            }
          } else {
                for (let i = this.step-1    ; i <= this.step; i++){
                    twoPictures.push(this.randomImages[i])
                }
          }
          return twoPictures
      }
  },
  methods: {
      setStep() {
          this.step = this.step + 2
      }
  }
}
</script>

<style>
.img-container{
  border: 1px solid grey;
  border-radius: 5px;
  margin: 5px;
}
.img-style{
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
</style>