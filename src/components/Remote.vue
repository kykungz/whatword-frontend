<template lang="html">
  <div id="remote">
    <div class="remote-content">
      <div class="status alert alert-info text-center">
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
      </div>
    </div>
  </div>
</template>
<script>
import * as io from 'socket.io-client'
import { ORIGIN_API_URL } from '@/libraries/variables'
import { roomValidator } from '@/libraries/util'
import { mapGetters } from 'vuex'
export default {
  props: ['id'],
  async mounted () {
    try {
      if (!this.admins.map((admin) => admin.id).includes(this.id)) {
        this.$router.replace({name: 'Auth', query: {id: this.id, target: 'Remote'}})
        return
      }
      this.password = this.admins.find((admin) => admin.id === this.id).password
      const result = await roomValidator.validate({
        id: this.id,
        password: this.password
      })
      this.state = result
      this.socket = io(ORIGIN_API_URL)
      this.socket.emit('join', {id: this.id})
      this.socket.on('state', state => {
        console.log('incoming state', state)
        this.state = state
      })
    } catch (e) {
      this.$router.replace({name: '404'})
    }
  },
  data () {
    return {
      password: '',
      socket: {},
      state: {}
    }
  },
  methods: {
    async correct () {
      this.socket.emit('remote', {
        id: this.id,
        password: this.password,
        action: 'correct'
      })
    },
    async skip () {
      this.socket.emit('remote', {
        id: this.id,
        password: this.password,
        action: 'skip'
      })
    },
    async hide_show () {
      if (this.state.hiding) {
        this.socket.emit('remote', {
          id: this.id,
          password: this.password,
          action: 'show'
        })
      } else {
        this.socket.emit('remote', {
          id: this.id,
          password: this.password,
          action: 'hide'
        })
      }
    },
    async restart () {
      this.socket.emit('remote', {
        id: this.id,
        password: this.password,
        action: 'restart'
      })
    }
  },
  computed: {
    ...mapGetters([
      'admins'
    ])
  }
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
}

.status {
  margin: auto;
  height: 20%;
}

.btn-fullscreen {
  margin: auto;
  height: 100%;
}
</style>
