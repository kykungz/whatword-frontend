<template>
  <div class="container">
    <div id="home">
      <div class="text-left content form-group">
        <label>Enter Game ID:</label>
        <input v-model="roomId" :class="{'is-invalid': error}" class="mb-2 text-center form-control form-control-lg" placeholder="GAME ID">
        <label v-show="error" class="text-danger">
          {{ error }}
        </label>
        <div class="options">
          <button :disabled="loading" @click="redirect('Play')" class="btn btn-primary btn-lg btn-block">
            <icon v-if="loading" name="circle-notch" spin />
            <icon v-else name="rocket" /> Play
          </button>
          <div class="d-flex admin">
            <button :disabled="loading" @click="redirect('Scoreboard')" class="w-50 btn btn-danger btn-lg">
              <icon v-if="loading" name="circle-notch" spin />
              <icon v-else name="star" /> Scoreboard
            </button>
            <button :disabled="loading" @click="redirect('Dashboard')" class="w-50 btn btn-dark btn-lg">
              <icon v-if="loading" name="circle-notch" spin />
              <icon v-else name="sliders-h" /> Dashboard
            </button>
          </div>
        </div>
      </div>
      <hr>
      <h3 class="text-center">OR</h3>
      <hr>
      <div class="content">
        <router-link :to="{ name: 'create' }" :disabled="loading" class="btn btn-warning btn-lg btn-block">
          <icon v-if="loading" name="circle-notch" spin />
          <icon v-else name="pencil-alt" /> Create New Game
        </router-link>
      </div>
    </div>
    <div class="mt-4 content d-flex justify-content-between align-items-center">
      <router-link :to="{ name: 'home' }">
        <big>How to play?</big>
      </router-link>
      <big>
        Made by
        <a href="https://github.com/kykungz">Kongpon C.</a>
      </big>
    </div>
  </div>
</template>

<script>
import GameApi from '@/lib/GameApi'

export default {
  data() {
    return {
      roomId: '',
      error: '',
      loading: false,
    }
  },
  methods: {
    async redirect(name) {
      try {
        this.loading = true
        await GameApi.getRoomInfo({ id: this.roomId })
        this.$router.push({ name, params: { id: this.roomId } })
      } catch (err) {
        this.error = err.message || err.response.data
      } finally {
        this.loading = false
      }
    },
  },
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
