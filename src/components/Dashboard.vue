<template lang="html">
  <div id="dashboard">
    <div class="container">
      <h1 class="text-center">What Word is it ?</h1>
      <hr>
      <div class="content">
        <div class="text-center">
          <h2>Your game is ready</h2>
          <div class="form-group">
            <label for="">Game ID:</label>
            <h1 class="alert alert-info"> {{ id }} </h1>
          </div>
        </div>
        <h5>
          Remote URL:
          <router-link :to="{ name: 'Remote', params: { id }}">
            {{ remoteURL }}
          </router-link>
          <qr-code :text="remoteURL" class="mx-auto mt-3 mb-1" style="width: fit-content" />
          <div class="text-center"><small><i>Remote Control URL</i></small></div>
        </h5>
        <h5 class="mt-3">
          Play URL:
          <router-link :to="{ name: 'Play', params: { id }}">
            {{ playURL }}
          </router-link>
        </h5>
        <hr>
        <div class="text-right">
          <a @click="config()" href="javascript:void(0)">
            <h5>Game configuration</h5>
          </a>
        </div>
        <transition name="fade" mode="out-in" appear>
          <div v-show="showConfig">
            <wordbank
              ref="wordbank"
              :words="words"
              :color="color"
              @wordsChange="onWordsChange"
              @colorChange="onColorChange"
            />
            <button :disabled="loading" v-on:click="update()" class="mt-4 btn btn-warning btn-lg fullwidth">
              <icon v-show="loading" name="circle-o-notch" spin></icon>
              Update
            </button>
            <label v-if="success" class="text-success">
              Game updated! You must restart your game before the new setting takes effect.
            </label>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import config from '@/config'
import { roomValidator } from '@/libraries/util'
import { mapGetters } from 'vuex'
import customAxios from '@/libraries/customAxios'
import Wordbank from '@/components/Wordbank'

export default {
  props: ['id'],
  components: { Wordbank },
  data () {
    return {
      words: [],
      color: '#000',
      password: '',
      showConfig: false,
      remoteURL: `${config.ORIGIN_URL}/remote/${this.id}`,
      playURL: `${config.ORIGIN_URL}/play/${this.id}`,
      error: false,
      errorMessage: '',
      success: false,
      loading: false
    }
  },
  async mounted () {
    try {
      if (!this.admins.map((admin) => admin.id).includes(this.id)) {
        this.$router.replace({
          name: 'Auth',
          query: {
            id: this.id,
            target: 'Dashboard'
          }
        })
        return
      }
      this.password = this.admins.find((admin) => admin.id === this.id).password
      const result = await roomValidator.validate({
        id: this.id,
        password: this.password
      })
      this.color = result.room.color
      this.words = result.room.wordBank
      this.$refs.wordbank.forceUpdate(this.words)
    } catch (e) {
      this.$router.replace({name: '404'})
    }
  },
  methods: {
    config () {
      this.showConfig = !this.showConfig
    },
    onWordsChange (words) {
      this.words = words
    },
    onColorChange (color) {
      this.color = color
    },
    async update () {
      this.loading = true
      try {
        const result = await customAxios.post('/update', {
          id: this.id,
          password: this.password,
          wordBank: this.words,
          color: this.color
        })
        this.color = result.data.color
        this.words = result.data.wordBank
        this.$refs.wordbank.forceUpdate(this.words)
        this.success = true
        this.error = false
      } catch (e) {
        this.error = true
        this.success = false
        this.errorMessage = e.response.data
      } finally {
        this.loading = false
      }
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
#dashboard {
  margin-top: 60px;
  margin-bottom: 60px;
}
</style>
