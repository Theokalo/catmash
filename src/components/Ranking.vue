<template>
  <div>
    <div class="container">
      <div class="row">
      <div v-for='(image, index) in totalVotes' :key="index" class="col-sm-4">
          <div class="img-container">
            <div class="img-style">
              <img :src="image.url" height="200" width="200" >
            </div>
                <h3>Votes: {{image.count}}</h3>
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
      images: []
    }
  },
  mounted () {
    // Api.images.map(image => {
    //   //this.images.push(image)
    //   // this.$store.commit('GET_IMAGES', image)
    // })
    console.log(this.$store.state.images)
  },
  computed: {
    totalVotes () {
      return this.$store.state.images
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
