<template lang="html">
  <div>
    <div class="container">
      <h1 class="text-center">What Word is it ?</h1>
      <hr>
      <div class="content text-center">
        <h1>Your game is ready</h1>
        <div class="form-group">
          <br>
          <label for="">Game ID:</label>
          <h1 class="alert alert-info"> {{roomId}} </h1>
        </div>
      </div>
      <div class="content">
        <h5>
          Remote URL:
          <router-link :to="{ name: 'Remote', params: {id: roomId}}">
            {{ remoteURL }}
          </router-link>
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
import customAxios from '@/libraries/customAxios'
import { ORIGIN_URL } from '@/libraries/variables'
export default {
  mounted () {
    customAxios.get('/room', {params: {
      id: this.$route.params.id
    }}).catch((result) => {
      this.$router.push({path: '/'})
    })
  },
  data () {
    return {
      roomId: this.$route.params.id,
      remoteURL: `${ORIGIN_URL}/remote/${this.$route.params.id}`
    }
  }
}
</script>

<style scoped>
.room {
}
</style>
