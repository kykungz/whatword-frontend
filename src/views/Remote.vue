<template>
  <div id="remote">
    <div class="remote-content">
      <div class="remote-status alert-info text-center">
        <div class="d-flex justify-content-around text-danger mt-3 w-100">
          <h2>Score: {{ this.state.score }}</h2>
          <h2>Left: {{ this.state.remaining }}</h2>
        </div>
        <div class="d-flex justify-content-center align-items-center word">
          <div v-if="this.isOver" class="badge badge-pill badge-danger">
            Game Over
          </div>
          <div v-else-if="this.isHiding" class="badge badge-pill badge-danger">
            Hiding
          </div>
          <div v-else>
            {{ this.state.currentWord }}
          </div>
        </div>
      </div>
      <button
        :disabled="isHiding"
        @click="remote('correct')"
        :class="['remote-button btn text-center', isHiding ? 'btn-dark' : 'btn-success']"
      >
        <h1><icon name="check-circle" scale="2" /> Correct</h1>
      </button>
      <button
        :disabled="isHiding || isLast"
        @click="remote('skip')"
        :class="['remote-button btn text-center', skipBtnColor]"
      >
        <h1><icon name="forward" scale="2" /> Skip</h1>
      </button>
      <button
        :disabled="isOver || isLast"
        @click="remote(isHiding ? 'show' : 'hide')"
        :class="['remote-button btn text-center', visibilityBtnColor]"
      >
        <h1 v-if="isHiding"><icon name="eye" scale="2" /> Show</h1>
        <h1 v-else><icon name="eye-slash" scale="2" /> Hide</h1>
      </button>
      <button
        @click="restart()"
        class="remote-button btn btn-danger text-center"
      >
        <h1><icon name="sync-alt" scale="2" /> Restart</h1>
      </button>
    </div>
  </div>
</template>
<script>
import io from 'socket.io-client'
import config from '@/config'
import GameApi from '@/lib/GameApi'
import { mapGetters, mapActions } from 'vuex'

export default {
  props: ['id'],
  data() {
    return {
      socket: undefined,
      state: {
        score: 0,
        remaining: 0,
      },
    }
  },
  computed: {
    ...mapGetters(['loading', 'rooms']),
    isHiding() {
      return this.state.currentWord === undefined
    },
    isOver() {
      return this.state.currentWord === undefined && this.state.remaining === 0
    },
    isLast() {
      return this.state.remaining === 0
    },
    visibilityBtnColor() {
      if (this.isOver || this.isLast) {
        return 'btn-dark' // disabled
      } else if (this.isHiding) {
        return 'btn-warning' // show
      } else {
        return 'btn-dark' // hide
      }
    },
    skipBtnColor() {
      return this.isHiding || this.isLast ? 'btn-dark' : 'btn-info'
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
          this.state = state
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
    async remote(action) {
      try {
        await GameApi.remote({
          id: this.id,
          password: this.rooms[this.id],
          action,
        })
      } catch (error) {
        this.$router.push({ name: 'home' })
      }
    },
    restart() {
      const confirm = window.confirm('Are you sure to restart the game?')
      if (confirm) {
        this.remote('restart')
      }
    },
  },
}
</script>

<style scoped>
#remote {
  height: 100vh;
}

h1 {
  margin: 0;
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
