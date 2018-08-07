<template lang="html">
  <div id="play" :style="{ background: state.color }">
    <h1 class="display-4 fixed-top text-center mt-4">
      <b>Score: {{ state.score }}</b>
    </h1>
    <div class="d-flex justify-content-center align-items-center h-100 w-100">
      <div class="custom-border">
        <h1 class="word">
          <div v-if="state.currentWord === undefined" class="hidden-word">
            &nbsp;
          </div>
          <div v-else>
            {{ state.currentWord }}
          </div>
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import * as io from 'socket.io-client'
import config from '@/config'
import GameApi from '@/lib/GameApi'

export default {
  props: ['id'],
  async mounted() {
    try {
      const result = await GameApi.getRoomInfo({
        id: this.id,
      })
      this.state = result
      this.socket = io(config.ORIGIN_API_URL)
      this.socket.emit('join', { id: this.id })
      this.socket.on('state', state => {
        // FIXME: Fix this to use socket-io's namespace
        if (this.id === state.id) {
          this.state = state
        }
      })
    } catch (e) {
      this.$router.push({ name: '404' })
    }
  },
  destroyed() {
    // TODO: fix bug no socket has no disconnect function
    if (this.socket) {
      this.socket.disconnect()
    }
  },
  data() {
    return {
      socket: {},
      state: {},
    }
  },
}
</script>

<style lang="scss" scoped>
#play {
  height: 100vh;
  background-color: #ff9b86;
}

.word {
  font-size: 10vw;
  margin-top: 0.3em;
}

.hidden-word {
  margin: auto;
  margin-top: -0.2em;
  background-color: black;
  width: 95%;
  height: 100%;
}

.custom-border {
  margin: 2em;
  width: 100%;
  text-align: center;
  background-color: white;
  border: 4px solid black;
  border-radius: 60px;
}
</style>
