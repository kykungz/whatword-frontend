<template>
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
import io from 'socket.io-client'
import config from '@/config'
import GameApi from '@/lib/GameApi'
import { mapActions, mapGetters } from 'vuex'

export default {
  props: ['id'],
  data() {
    return {
      socket: undefined,
      state: {
        score: 0,
        color: '#2e2e2e',
      },
    }
  },
  computed: {
    ...mapGetters(['loading']),
  },
  methods: {
    ...mapActions(['setLoading']),
  },
  async mounted() {
    try {
      this.setLoading(true)

      await GameApi.getRoomInfo({ id: this.id })

      this.socket = io(config.ORIGIN_API_URL)
      this.socket.emit('join', { id: this.id })
      this.socket.on('state', state => {
        if (this.loading) {
          this.setLoading(false)
        }
        this.state = state
        document.body.style.background = state.color
      })
    } catch (e) {
      console.log(e)
      this.$router.push({ name: 'home' })
    }
  },
  destroyed() {
    if (this.socket) {
      this.socket.disconnect()
    }
  },
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
