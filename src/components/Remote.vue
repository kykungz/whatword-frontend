<template lang="html">
  <div id="remote" class="fullscreen">
    <div class="remote-content">
      <div class="alert alert-info text-center btn-fullscreen">
        <h2>Score: 0</h2>
        <h1>Word</h1>
      </div>
      <div class="btn-group-vertical btn-group-fullscreen">
        <button class="btn btn-success btn-fullscreen"><h1>Correct</h1></button>
        <button class="btn btn-info btn-fullscreen"><h1>Skip</h1></button>
        <button class="btn btn-dark btn-fullscreen"><h1>Hide word</h1></button>
        <button class="btn btn-danger btn-fullscreen"><h1>Restart</h1></button>
      </div>
    </div>
  </div>
</template>
<script>
import * as io from 'socket.io-client'
import { ORIGIN_API_URL } from '@/libraries/variables'
import { roomValidator } from '@/libraries/util'
export default {
  async mounted () {
    try {
      const result = await roomValidator.validate(this.$route.params.id)
      this.state = result
      this.socket = io(ORIGIN_API_URL)
      this.socket.emit('join', {roomId: this.$route.params.id})
      this.socket.on('state', state => {
        this.state = state
      })
    } catch (e) {
      this.$router.push({path: '/'})
    }
  },
  data () {
    return {
      roomId: this.$route.params.id,
      socket: {},
      state: {}
    }
  }
}
</script>

<style scoped>
.remote-content {
  max-width: 800px;
  margin: auto;
}
.half-horizontal-screen{
  float: left;
  width: 50%;
}
.btn-fullscreen {
  margin: auto;
  width: 100%;
  height: 20vh;
}

.btn-group-fullscreen {
  width: 100%;
}

.fullscreen {
  width: 100%;
  height: 100vh;
}
</style>
