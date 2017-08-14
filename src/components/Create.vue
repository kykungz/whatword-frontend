<template lang="html">
  <div>
    <div class="container" style="margin-top:40px;">
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
        <router-link :to="{ name: 'Play', params: {id: 123} }">
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
}
</script>

<style scoped>
</style>
