<template>
    <div>
        <div class="pic-container">
            <div class="pic-style" @click="vote(image.id)">
                <img :src="image.url" height="400" width="400" class="pic-circle" >
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    props:['image'],
    methods: {
      vote(id) {
          this.step = this.step + 2
          this.$store.commit('SET_VOTE', id)
      }
    }
}
</script>
