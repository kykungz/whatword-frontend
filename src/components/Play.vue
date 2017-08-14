<template lang="html">
  <div>
    <h1>{{ state.score }}</h1>
    <h1>{{ state.currentWord }}</h1>
  </div>
</template>

<script>
import * as io from 'socket.io-client'
import { ORIGIN_API_URL } from '@/libraries/variables'
// import { validator } from '@/libraries/util'
import customAxios from '@/libraries/customAxios'
export default {
  mounted () {
    customAxios.get('/room', {params: {
      id: this.$route.params.id
    }}).then((result) => {
      this.socket = io(ORIGIN_API_URL)
      this.socket.emit('play', {roomId: this.$route.params.id})
      this.socket.on('state', state => {
        this.state = state
      })
      this.state = result
    }).catch((result) => {
      this.$router.push({path: '/'})
    })
  },
  destroyed () {
    if (this.socket) {
      this.socket.disconnect()
    }
  },
  data () {
    return {
      socket: undefined,
      state: 43234
    }
  }
}
</script>

<style scoped>
</style>
