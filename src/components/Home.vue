<template>
  <div id="home">
    <div class="container">
      <h1>What Word is it ?</h1>
      <hr>
      <div style="margin-top:40px;">
        <div class="text-left content form-group">
          <label>Enter Game ID:</label>
          <input v-model="roomId" class="text-center form-control form-control-lg" style="margin-bottom:10px;" placeholder="GAME ID" required>
          <div v-if="error" class="alert alert-danger">
            {{ errorMessage }}
          </div>
          <button @click="join()" class="btn btn-primary btn-lg fullwidth">
            Join
          </button>
        </div>
      </div>
      <hr>
      <h3 class="text-center">OR</h3>
      <hr>
      <div class="content">
        <router-link :to="{ name: 'Create' }">
          <button class="btn btn-warning btn-lg fullwidth">
            Create New Game
          </button>
        </router-link>
      </div>
    </div>
    <p>Welcome to Guess What ?</p>
  </div>
</template>

<script>
import { roomValidator } from '@/libraries/util'
export default {
  name: 'hello',
  data () {
    return {
      roomId: '',
      msg: 'Welcome to Your Vue.js App',
      error: false,
      errorMessage: ''
    }
  },
  methods: {
    async join () {
      try {
        const result = await roomValidator.validate()
        console.log(result.data)
      } catch (err) {
        this.error = true
        this.errorMessage = err.response.data
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home {
  text-align: center;
  margin-top: 60px;
}
</style>
