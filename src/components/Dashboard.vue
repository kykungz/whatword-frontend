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
            <h1 class="alert alert-info"> {{roomId}} </h1>
          </div>
        </div>
        <h5>
          Remote URL:
          <router-link :to="{ name: 'Remote', params: {id: roomId}}">
            {{ remoteURL }}
          </router-link>
        </h5>
        <h5>
          Play URL:
          <router-link :to="{ name: 'Play', params: {id: roomId}}">
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
            </div>
            <button v-on:click="update()" class="btn btn-warning btn-lg fullwidth">Update</button>
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
export default {
  async mounted () {
    try {
      await roomValidator.validate({
        id: this.$route.params.id,
        password: 'd'
      })
    } catch (e) {
      this.$router.push({name: 'NotFound'})
    }
  },
  data () {
    return {
      textArea: '',
      password: '',
      showConfig: false,
      roomId: this.$route.params.id,
      remoteURL: `${ORIGIN_URL}/remote/${this.$route.params.id}`,
      playURL: `${ORIGIN_URL}/play/${this.$route.params.id}`
    }
  },
  methods: {
    config () {
      this.showConfig = !this.showConfig
    },
    update () {
      console.log(2)
    }
  },
  computed: {
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
