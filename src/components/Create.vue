<template lang="html">
  <div id="create">
    <div class="container">
      <h1 class="text-center">What Word is it ?</h1>
      <hr>
      <div class="content">
        <wordbank
          :words="words"
          :color="color"
          @wordsChange="onWordsChange"
          @colorChange="onColorChange"
        />
        <div class="form-group mt-2">
          <label>Remote password:</label>
          <input v-model="password" class="form-control password" placeholder="Password" />
          <span class="form-text text-muted">
            Remote requires password in order to control the game.
          </span>
        </div>
        <div v-if="error" class="alert alert-warning" role="alert">
          {{ errorMessage }}
        </div>
        <button
          class="btn btn-warning btn-lg btn-block"
          v-on:click="submit()"
          :disabled="isDisabled()"
        >
          <icon v-show="loading" name="circle-o-notch" spin></icon>
          {{ this.loading ? 'Creating...' : 'Create' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import customAxios from '@/libraries/customAxios'
import { mapActions } from 'vuex'
import Wordbank from '@/components/Wordbank'

export default {
  components: { Wordbank },
  data () {
    return {
      words: [],
      color: '#fc5c65',
      password: '',
      error: false,
      errorMessage: '',
      loading: false
    }
  },
  methods: {
    ...mapActions([
      'pushAdmin'
    ]),
    onWordsChange (words) {
      this.words = words
    },
    onColorChange (color) {
      this.color = color
    },
    isDisabled () {
      return this.loading || this.words.length <= 0 || !this.password
    },
    async submit () {
      try {
        this.loading = true
        const result = await customAxios.post('/create', {
          wordBank: this.words,
          color: this.color,
          password: this.password
        })
        this.pushAdmin({ id: result.data, password: this.password })
        this.$router.push({ name: 'Dashboard', params: { id: result.data } })
      } catch (e) {
        console.log(e)
        this.error = true
        this.errorMessage = e.response.data
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
#create {
  margin-bottom: 60px;
  margin-top: 60px;
}
</style>
