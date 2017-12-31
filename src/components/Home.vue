<template>
  <div class="container">
    <div id="home">
      <h1>What Word is it ?</h1>
      <hr>
      <div class="text-left content form-group">
        <label>Enter Game ID:</label>
        <input v-model="roomId" :class="{'is-invalid': error}" class="text-center form-control form-control-lg" style="margin-bottom:10px;" placeholder="GAME ID" required>
        <label v-if="error" class="text-danger">
          {{ errorMessage }}
        </label>
        <button :disabled="remoteLoading || playLoading" @click="remote()" class="btn btn-danger btn-lg btn-block">
          <icon v-show="remoteLoading" name="circle-o-notch" spin></icon>
          Remote
        </button>
        <button :disabled="remoteLoading || playLoading" @click="join()" style="margin-top:4px;" class="btn btn-primary btn-lg btn-block">
          <icon v-show="playLoading" name="circle-o-notch" spin></icon>
          Play
        </button>

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
    <div style="margin-top:20px" class="content text-right">
      <router-link :to="{ name: 'Home' }">
        <big>How to play?</big>
      </router-link>
    </div>
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
      errorMessage: '',
      remoteLoading: false,
      playLoading: false
    }
  },
  methods: {
    async remote () {
      this.remoteLoading = true
      try {
        await roomValidator.validate({id: this.roomId})
        this.$router.push({name: 'Remote', params: {id: this.roomId}})
      } catch (err) {
        this.error = true
        this.errorMessage = err.response.data
      } finally {
        this.remoteLoading = false
      }
    },
    async join () {
      this.playLoading = true
      try {
        await roomValidator.validate({id: this.roomId})
        this.$router.push({name: 'Play', params: {id: this.roomId}})
      } catch (err) {
        this.error = true
        this.errorMessage = err.response.data
      } finally {
        this.playLoading = false
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
