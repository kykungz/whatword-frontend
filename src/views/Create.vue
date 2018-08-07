<template>
  <div id="create">
    <div class="container">
      <div class="content">
        <Wordbank
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
          {{ error }}
        </div>
        <button
          class="btn btn-warning btn-lg btn-block"
          v-on:click="submit()"
          :disabled="isDisabled()"
        >
          <icon v-show="loading" name="circle-notch" spin></icon>
          {{ this.loading ? 'Creating...' : 'Create' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import GameApi from '@/lib/GameApi'
import { mapActions } from 'vuex'
import Wordbank from '@/components/Wordbank'

export default {
  components: { Wordbank },
  data() {
    return {
      words: [],
      color: '#fc5c65',
      password: '',
      error: '',
      loading: false,
    }
  },
  methods: {
    ...mapActions(['pushAdmin']),
    onWordsChange(words) {
      this.words = words
    },
    onColorChange(color) {
      this.color = color
    },
    isDisabled() {
      return this.loading || this.words.length <= 0 || !this.password
    },
    async submit() {
      try {
        this.loading = true
        const { data: id } = await GameApi.create({
          wordBank: this.words,
          color: this.color,
          password: this.password,
        })
        this.pushAdmin({ id, password: this.password })
        this.$router.push({ name: 'dashboard', params: { id } })
      } catch (err) {
        this.error = err.message || err.response.data
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#create {
  margin-bottom: 60px;
}
</style>
