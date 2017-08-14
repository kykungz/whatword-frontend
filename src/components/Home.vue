<template>
  <div id="home">
    <div class="container">
      <h1 class="text-center">What Word is it ?</h1>
      <hr>
      <div style="margin-top:40px;">
        <div class="content form-group">
          <label>Enter Game ID:</label>
          <input class="form-control form-control-lg" style="margin-bottom:10px;" placeholder="GAME ID" required>
          <button class="btn btn-primary btn-lg" type="submit" style="width:100%;">
            Join
          </button>
        </div>
      </div>
      <hr>
      <h3 class="text-center">OR</h3>
      <hr>
      <div class="content">
        <router-link :to="{ name: 'Create' }">
          <button class="btn btn-warning btn-lg" style="width:100%;">
            Create New Game
          </button>
        </router-link>
      </div>
    </div>
    <p>Welcome to Guess What ?</p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home {
  text-align: center;
}
</style>
