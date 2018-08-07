<template>
  <div class="container">
    <div id="home">
      <div class="text-left content form-group">
        <label>Enter Game ID:</label>
        <input v-model="roomId" :class="{'is-invalid': error}" class="mb-2 text-center form-control form-control-lg" placeholder="GAME ID" required>
        <label v-if="error" class="text-danger">
          {{ errorMessage }}
        </label>
        <div class="options">
          <button :disabled="loading" @click="redirect('Play')" class="btn btn-primary btn-lg btn-block">
            <icon v-show="loading" name="circle-o-notch" spin />
            Play
          </button>
          <div class="d-flex admin">
            <button :disabled="loading" @click="redirect('Scoreboard')" class="w-50 btn btn-danger btn-lg">
              <icon v-show="loading" name="circle-o-notch" spin />
              Scoreboard
            </button>
            <button :disabled="loading" @click="redirect('Dashboard')" class="w-50 btn btn-dark btn-lg">
              <icon v-show="loading" name="circle-o-notch" spin />
              Dashboard
            </button>
          </div>
        </div>
      </div>
      <hr>
      <h3 class="text-center">OR</h3>
      <hr>
      <div class="content">
        <router-link :to="{ name: 'Create' }">
          <button :disabled="loading" class="btn btn-warning btn-lg fullwidth">
            <icon v-show="loading" name="circle-o-notch" spin />
            Create New Game
          </button>
        </router-link>
      </div>
    </div>
    <div class="mt-4 content d-flex justify-content-between align-items-center">
      <router-link :to="{ name: 'Home' }">
        <big>How to play?</big>
      </router-link>
      <big>
        Made by <a href="https://github.com/kykungz">@kykungz</a>
      </big>
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
      loading: false
    }
  },
  methods: {
    async redirect (name) {
      this.loading = true
      try {
        await roomValidator.validate({ id: this.roomId })
        this.$router.push({ name, params: { id: this.roomId } })
      } catch (err) {
        this.error = true
        this.errorMessage = err.response.data
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.options > * + * {
  margin-top: 4px;
}

.admin > .btn + .btn {
  margin-left: 4px;
}
</style>
