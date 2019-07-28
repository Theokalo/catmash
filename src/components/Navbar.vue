<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1" aria-controls="navbar1"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-md-center" id="navbar1">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Arena</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/ranking">Ranking</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      auth: '',
      token: localStorage.usertoken
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('usertoken')
    }
  }
}
</script>