<template lang="html">
  <div id="dashboard">
    <div class="container">
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
          <router-link :to="{ name: 'remote', params: { id }}">
            {{ remoteURL }}
          </router-link>
          <qr-code :text="remoteURL" class="mx-auto mt-3 mb-1" style="width: fit-content" />
          <div class="text-center"><small><i>Remote Control URL</i></small></div>
        </h5>
        <h5 class="mt-3">
          Play URL:
          <router-link :to="{ name: 'play', params: { id }}">
            {{ playURL }}
          </router-link>
        </h5>
        <h5 class="mt-3">
          Score URL:
          <router-link :to="{ name: 'scoreboard', params: { id }}">
            {{ scoreboardURL }}
          </router-link>
        </h5>
        <hr>
        <div class="text-right">
          <a @click="toggleConfig()" href="javascript:void(0)">
            <h5>Game configuration</h5>
          </a>
        </div>
        <transition name="fade" mode="out-in" appear>
          <div v-show="showConfig">
            <Wordbank
              ref="wordbank"
              :words="words"
              :color="color"
              @wordsChange="onWordsChange"
              @colorChange="onColorChange"
            />
            <button :disabled="loading" v-on:click="update()" class="mt-4 btn btn-warning btn-lg btn-block">
              <icon v-show="loading" name="circle-notch" spin />
              Update
            </button>
            <label v-if="updated" class="text-success">
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
import GameApi from '@/lib/GameApi'
import Wordbank from '@/components/Wordbank'
import { mapGetters } from 'vuex'

export default {
  props: ['id'],
  components: { Wordbank },
  data() {
    return {
      words: [],
      color: '#000',
      showConfig: false,
      remoteURL: `${config.ORIGIN_URL}/remote/${this.id}`,
      playURL: `${config.ORIGIN_URL}/play/${this.id}`,
      scoreboardURL: `${config.ORIGIN_URL}/scoreboard/${this.id}`,
      updated: false,
      loading: false,
    }
  },
  computed: {
    ...mapGetters(['rooms']),
  },
  async mounted() {
    try {
      const { data: result } = await GameApi.getRoomInfo({
        id: this.id,
        password: this.rooms[this.id],
      })

      if (result.admin) {
        this.color = result.room.color
        this.words = result.room.wordBank
        this.$refs.wordbank.forceUpdate(this.words)
      } else {
        this.$router.replace({
          name: 'auth',
          query: {
            id: this.id,
            redirect: 'dashboard',
          },
        })
      }
    } catch (error) {
      this.$router.push({ name: 'home' })
    }
  },
  methods: {
    toggleConfig() {
      this.showConfig = !this.showConfig
    },
    onWordsChange(words) {
      this.words = words
    },
    onColorChange(color) {
      this.color = color
    },
    async update() {
      this.loading = true
      try {
        const { data: result } = await GameApi.update({
          id: this.id,
          password: this.rooms[this.id],
          wordBank: this.words,
          color: this.color,
        })
        this.color = result.color
        this.words = result.wordBank
        this.$refs.wordbank.forceUpdate(this.words)
        this.updated = true
      } catch (e) {
        this.updated = false
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style scoped>
#dashboard {
  margin-bottom: 60px;
}
</style>
