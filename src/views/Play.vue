<template>
  <div id="play">
    <h1 class="display-4 fixed-top text-center mt-4">
      <b>Score: {{ state.score }}</b>
    </h1>
    <div class="d-flex justify-content-center align-items-center h-100 w-100 fixed-top">
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
import { mapActions, mapGetters } from 'vuex'

export default {
  props: ['id'],
  data() {
    return {
      socket: undefined,
      state: {
        score: 0,
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
    this.setLoading(true)

    try {
      await GameApi.getRoomInfo({ id: this.id })
    } catch (error) {
      return this.$router.push({ name: 'home' })
    }

    this.socket = io(config.ORIGIN_API_URL)
    this.socket.emit('join', { id: this.id })
    this.socket.on('state', state => {
      if (this.loading) {
        this.setLoading(false)
      }
      this.state = state
      document.body.style.background = state.color
    })
  },
  destroyed() {
    if (this.socket) {
      this.socket.disconnect()
    }
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
