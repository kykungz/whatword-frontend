<template lang="html">
  <div id="play">
    <div class="container-fluid">
      <div class="text-center">
        <h1>Score: {{ state.score }}</h1>
        <div class="container-fluid custom-border">
          <h1 class="word">
            <div v-show="state.currentWord === undefined" class="hidden-word">
              &nbsp;
            </div>
            {{ state.currentWord }}
          </h1>
        </div>
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
        this.state = state
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
#play {
  padding-top: 60px;
  height: 100vh;
  background-color: #ff9b86;
}

.word {
  font-size: 10vw;
  margin-top: 0.3em;
}

.hidden-word {
  margin-top: -0.2em;
  background-color: black;
  width: 100%;
  height: 100%;
}

.custom-border {
  margin-top: 20vh;
  background-color: white;
  border: 4px solid black;
  border-radius: 60px;
}
</style>
