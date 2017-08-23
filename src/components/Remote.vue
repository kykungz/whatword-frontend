<template lang="html">
  <div id="remote">
    <div class="remote-content">
      <div class="alert alert-info text-center btn-fullscreen">
        <h2>Score: 0</h2>
        <h1>Word</h1>
      </div>
      <div class="btn-group-vertical btn-block">
        <button class="btn btn-success btn-fullscreen"><h1>Correct</h1></button>
        <button class="btn btn-info btn-fullscreen"><h1>Skip</h1></button>
        <button class="btn btn-dark btn-fullscreen"><h1>Hide</h1></button>
        <button class="btn btn-danger btn-fullscreen"><h1>Restart</h1></button>
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
        this.state = state
      })
    } catch (e) {
      this.$router.replace({name: '404'})
    }
  },
  computed: {
    ...mapGetters([
      'admins'
    ])
  },
  data () {
    return {
      password: '',
      socket: {},
      state: {}
    }
  }
}
</script>

<style scoped>
.remote-content {
  max-width: 800px;
  margin: auto;
}

.btn-fullscreen {
  margin: auto;
  width: 100%;
  height: 20vh;
}
</style>
