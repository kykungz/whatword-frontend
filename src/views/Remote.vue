<template lang="html">
  <div id="remote">
    <div class="remote-content">
      <div class="remote-status alert-info text-center">
        <div class="d-flex justify-content-around text-danger mt-3 w-100">
          <div><h2>Score: {{ this.state.score }}</h2></div>
          <div><h2>Left: {{ this.state.remaining }}</h2></div>
        </div>
        <div class="d-flex justify-content-center align-items-center word">
          <div v-if="this.isHiding" class="badge badge-pill badge-danger">
            Hiding
          </div>
          <div v-else>{{ this.state.currentWord }}</div>
        </div>
      </div>
      <button class="remote-button btn btn-success text-center">
        <h1>Correct</h1>
      </button>
      <button class="remote-button btn btn-info text-center">
        <h1>Skip</h1>
      </button>
      <button class="remote-button btn btn-dark text-center">
        <h1>Hide</h1>
      </button>
      <button class="remote-button btn btn-danger text-center">
        <h1>Restart</h1>
      </button>
      <!-- <div class="status alert alert-info text-center">
        <div class="row">
          <div class="col-6">
            <h2>Score: {{ this.state.score }}</h2>
          </div>
          <div class="col-6">
            <h2>Left: {{ this.state.remaining }}</h2>
          </div>
        </div>
        <h1>
          <div class="d-inline-flex">
            <small v-if="this.state.remaining !== 0 && this.state.hiding" class="badge badge-pill badge-danger">
              Hiding
            </small>
            <small v-if="this.state.remaining === 0 && this.state.hiding" class="badge badge-pill badge-danger">
              Game Over
            </small>
          </div>
          {{ this.state.currentWord }}
        </h1>
      </div>
      <div style="height: 80%" class="btn-group-vertical btn-block">
        <button :disabled="this.state.hiding" @click="correct" class="btn btn-success btn-fullscreen"><h1>Correct</h1></button>
        <button :disabled="this.state.hiding" @click="skip" class="btn btn-info btn-fullscreen"><h1>Skip</h1></button>
        <button :disabled="this.state.remaining === 0 && this.state.hiding" @click="hide_show"
          :class="{'btn-dark': !this.state.hiding, 'btn-light': this.state.hiding}"
          class="btn btn-fullscreen">
          <h1>
            {{ this.state.hiding ? 'Show' : 'Hide'}}
          </h1>
        </button>
        <button @click="restart" class="btn btn-danger btn-fullscreen"><h1>Restart</h1></button>
      </div> -->
    </div>
  </div>
</template>
<script>
import * as io from 'socket.io-client'
import config from '@/config'
import GameApi from '@/lib/GameApi'
import { mapGetters, mapActions } from 'vuex'

export default {
  props: ['id'],
  data() {
    return {
      socket: {},
      state: {},
    }
  },
  computed: {
    ...mapGetters(['loading', 'rooms']),
    isHiding() {
      return this.state.currentWord === undefined
    },
  },
  async mounted() {
    try {
      this.setLoading(true)

      const { data: result } = await GameApi.getRoomInfo({
        id: this.id,
        password: this.rooms[this.id],
      })

      if (result.admin) {
        this.socket = io(config.ORIGIN_API_URL)
        this.socket.emit('join', { id: this.id })
        this.socket.on('state', state => {
          if (this.loading) {
            this.setLoading(false)
          }
          // FIXME: Fix this to use socket-io's namespace
          if (this.id === state.id) {
            this.state = state
          }
        })
      } else {
        this.$router.replace({
          name: 'auth',
          query: {
            id: this.id,
            redirect: 'remote',
          },
        })
      }
    } catch (e) {
      this.$router.push({ name: 'home' })
    }
  },
  methods: {
    ...mapActions(['setLoading']),
    async correct() {
      this.socket.emit('remote', {
        id: this.id,
        password: this.rooms[this.id],
        action: 'correct',
      })
    },
    async skip() {
      this.socket.emit('remote', {
        id: this.id,
        password: this.rooms[this.id],
        action: 'skip',
      })
    },
    async hide_show() {
      if (this.state.hiding) {
        this.socket.emit('remote', {
          id: this.id,
          password: this.rooms[this.id],
          action: 'show',
        })
      } else {
        this.socket.emit('remote', {
          id: this.id,
          password: this.rooms[this.id],
          action: 'hide',
        })
      }
    },
    async restart() {
      this.socket.emit('remote', {
        id: this.id,
        password: this.rooms[this.id],
        action: 'restart',
      })
    },
  },
}
</script>

<style scoped>
#remote {
  height: 100vh;
}

.remote-content {
  margin: auto;
  max-width: 800px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.remote-button {
  flex: 1;
  width: 100%;
  border-radius: 0;
}

.remote-status {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 2;
  width: 100%;
  border-radius: 0;
}

.word {
  flex: 1;
  font-size: 36px;
  line-height: 1.2em;
  font-weight: 500;
}
</style>
