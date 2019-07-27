<template>
  <div>
    <div class="container">
      <div class="row">
      <div v-for='(image, index) in images' :key="index" class="col-sm-4">
          <div class="img-container">
            <div class="img-style">
              <img :src="image.url" height="200" width="200" >
            </div>
            <div>
              <h3>Votes:</h3>
            </div>
          </div>
      </div>
    </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
import Api from  '../cats.json'

export default {
    data () {
    return {
      images : []
    }
  },
  mounted () {
    console.log(Api)
    Api.images.map(image => {
      this.images.push(image)
    })
    console.log(this.images)
    // axios
    //   .get('https://latelier.co/data/cats.json')
    //   .then(response => (this.info = response))
    //   console.log(this.info)
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
