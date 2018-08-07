<template lang="html">
  <div id="play">
    <h1 class="display-4 fixed-top text-center mt-4">
      <b>Score: {{ state.score }}</b>
    </h1>
    <div class="d-flex justify-content-center align-items-center h-100 w-100">
      <div class="word-container">
        <h1 class="word">
          <div v-if="state.currentWord === undefined" class="hidden-word">
            ??????
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
import io from 'socket.io-client'
import config from '@/config'
import GameApi from '@/lib/GameApi'

export default {
  props: ['id'],
  data() {
    return {
      socket: {},
      state: {
        currentWord: undefined,
        score: 0,
      },
    }
  },
  async mounted() {
    try {
      const { color } = await GameApi.getRoomInfo({ id: this.id })
      document.body.style.background = color

      this.socket = io(config.ORIGIN_API_URL)
      this.socket.emit('join', { id: this.id })
      this.socket.on('state', state => {
        // FIXME: Fix this to use socket-io's namespace
        if (this.id === state.id) {
          this.state = state
          document.body.style.background = state.color
        }
      })
    } catch (e) {
      this.$router.push({ name: '404' })
    }
  },
  destroyed() {
    if (this.socket) {
      this.socket.disconnect()
    }
    document.body.style.background = 'white'
  },
}
</script>

<style lang="scss" scoped>
#play {
  height: 100vh;
}

.word {
  font-size: 10vw;
  margin-top: 0.3em;
}

.hidden-word {
  margin: auto;
  margin-top: -0.2em;
  background-color: black;
  color: white;
  letter-spacing: 0.5em;
  width: 95%;
  height: 100%;
}

.word-container {
  margin: 2em;
  width: 100%;
  text-align: center;
  background-color: white;
  border: 4px solid black;
  border-radius: 60px;
}
</style>
