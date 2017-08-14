<template lang="html">
  <div>
    <div class="container">
      <h1 class="text-center">What Word is it ?</h1>
      <hr>
      <div class="content text-center">
        <h1>Your game is ready</h1>
        <div class="form-group">
          <br>
          <label for="">Game ID:</label>
          <h1 class="alert alert-info"> {{roomId}} </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      roomId: this.$route.params.id
    }
  }
}
</script>

<style scoped>
.room {
}
</style>
