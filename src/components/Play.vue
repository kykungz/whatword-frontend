<template lang="html">

  <div class="">
    This is a msg :
    {{ msg }}
    <button v-on:click="clicked()"></button>
  </div>
</template>

<script>
import * as io from 'socket.io-client'
export default {
  mounted () {
    this.socket = io('localhost:5000')
    console.log('connected', this.socket)
  },
  destroyed () {
    this.socket.disconnect()
    console.log('destroyed')
  },
  data () {
    return {
      socket: undefined
    }
  },
  computed: {
    msg: () => {
      return JSON.stringify(this.$socket)
    }
  },
  methods: {
    clicked () {
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style scoped>
</style>
