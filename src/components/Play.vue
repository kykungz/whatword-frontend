<template lang="html">
  <div id="play">
    <div class="container-fluid">
      <div class="text-center">
        <h1>Score: {{ state.score }}</h1>
        <div class="container-fluid custom-border">
          <h1 class="word">กองภณ จรัญวัฒนากิจ</h1>
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
  destroyed () {
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

<style>
body {
  background-color: #F9A492;
}

.word {
  font-size: 10vw;
}

.custom-border {
  margin-top: 20vh;
  padding-top: 1em;
  background-color: white;
  border: 4px solid black;
  border-radius: 60px;
}
</style>
