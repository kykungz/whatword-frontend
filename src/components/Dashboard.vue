<template lang="html">
  <div id="dashboard">
    <div class="container">
      <h1 class="text-center">What Word is it ?</h1>
      <hr>
      <div class="content">
        <div class="text-center">
          <h1>Your game is ready</h1>
          <div class="form-group">
            <br>
            <label for="">Game ID:</label>
            <h1 class="alert alert-info"> {{ id }} </h1>
          </div>
        </div>
        <h5>
          Remote URL:
          <router-link :to="{ name: 'Remote', params: { id }}">
            {{ remoteURL }}
          </router-link>
        </h5>
        <h5>
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
            <div class="form-group">
               <div class="row">
                 <div class="col-6">
                   <h4>Word Bank:</h4>
                 </div>
                 <div class="col-6 text-right">
                   <h4>{{ wordBank.length }} Words</h4>
                 </div>
               </div>
               <textarea v-model="textArea" placeholder="Insert your words here" class="form-control" rows="18"></textarea>
               <label v-if="error" class="text-danger">
                 {{ errorMessage }}
               </label>
            </div>
            <button v-on:click="update()" class="btn btn-warning btn-lg fullwidth">Update</button>
            <label v-if="success" class="text-success">
              Game updated! You must restart your game before the new setting will take effect.
            </label>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
// import customAxios from '@/libraries/customAxios'
import { ORIGIN_URL } from '@/libraries/variables'
import { roomValidator } from '@/libraries/util'
import { mapGetters } from 'vuex'
import customAxios from '@/libraries/customAxios'
export default {
  props: ['id'],
  async mounted () {
    try {
      if (!this.admins.map((admin) => admin.id).includes(this.id)) {
        this.$router.replace({name: 'Auth', query: {id: this.id, target: 'Dashboard'}})
        return
      }
      this.password = this.admins.find((admin) => admin.id === this.id).password
      const result = await roomValidator.validate({
        id: this.id,
        password: this.password
      })
      this.textArea = result.room.wordBank.join('\n')
    } catch (e) {
      console.log(e)
      this.$router.replace({name: '404'})
    }
  },
  data () {
    return {
      textArea: '',
      password: '',
      showConfig: false,
      remoteURL: `${ORIGIN_URL}/remote/${this.id}`,
      playURL: `${ORIGIN_URL}/play/${this.id}`,
      error: false,
      errorMessage: '',
      success: false
    }
  },
  methods: {
    config () {
      this.showConfig = !this.showConfig
    },
    async update () {
      try {
        const result = await customAxios.post('/update', {
          id: this.id,
          password: this.password,
          wordBank: this.wordBank
        })
        this.textArea = result.data.wordBank.join('\n')
        this.success = true
        this.error = false
      } catch (e) {
        this.error = true
        this.success = false
        console.log(e.response.data)
        this.errorMessage = e.response.data
      }
    }
  },
  computed: {
    ...mapGetters([
      'admins'
    ]),
    wordBank () {
      return this.textArea.split('\n').filter((word) => {
        return word.trim() !== ''
      })
    }
  }
}
</script>

<style scoped>
#dashboard {
  margin-top: 60px;
  margin-bottom: 60px;
}
</style>
