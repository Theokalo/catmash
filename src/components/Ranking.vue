<template>
  <div>
    <div class="container">
      <div class="row">
      <div v-for='(image, index) in totalVotes' :key="index" class="col-sm-4">
        <div class="card img-container" style="width: 18rem;">
          <img class="card-img-top" :src="image.url" alt="Card image cap" height="200" width="200">
          <div class="card-body">
            <h5 class="card-title">Votes: {{image.count}}</h5>
          </div>
        </div>
          
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    totalVotes () {
      let sortedArr = this.$store.state.images.sort((a, b) => Number(b.count) - Number(a.count))
      return sortedArr
    }
  }
}
</script>

<style>
.img-container{
  margin: 5px;
}
</style>
