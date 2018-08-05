<template lang="html">
  <div id="scoreboard" :style="{ background: state.color }">
    <div class="d-flex justify-content-center align-items-center h-100 w-100">
      <div class="custom-border">
        <div class="score-text">Score:</div>
        <div class="score">{{ state.score }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import * as io from 'socket.io-client'
import { ORIGIN_API_URL } from '@/libraries/variables'
import { roomValidator } from '@/libraries/util'
export default {
  props: ['id'],
  async mounted () {
    try {
      const result = await roomValidator.validate({
        id: this.id
      })
      this.state = result
      this.socket = io(ORIGIN_API_URL)
      this.socket.emit('join', {id: this.id})
      this.socket.on('state', state => {
        // FIXME: Fix this to use socket-io's namespace
        if (this.id === state.id) {
          this.state = state
        }
      })
    } catch (e) {
      this.$router.push({name: '404'})
    }
  },
  destroyed () {
    // TODO: fix bug no socket has no disconnect function
    if (this.socket) {
      this.socket.disconnect()
    }
  },
  data () {
    return {
      socket: {},
      state: {}
    }
  }
}
</script>

<style scoped>
#scoreboard {
  height: 100vh;
  background-color: #2e2e2e;
}

.score-text {
  margin-top: 60px;
  font-size: 30px;
}

.score {
  font-weight: bold;
  font-size: 180px;
}

.custom-border {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 2em;
  background-color: white;
  border: 4px solid black;
  border-radius: 60px;
}
</style>
