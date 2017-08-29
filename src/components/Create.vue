<template lang="html">
  <div id="create">
    <div class="container">
      <h1 class="text-center">What Word is it ??????</h1>
      <hr>
      <div class="content">
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
        <div class="form-group">
          <label>Remote password:</label>
          <input v-model="password" class="form-control" placeholder="Password" autocomplete="off" type="password"></input>
          <span class="form-text text-muted">
            Remote requires password in order to control the game.
          </span>
        </div>
        <div v-if="error" class="alert alert-warning" role="alert">
          {{ errorMessage }}
        </div>
        <button :disabled="loading" v-on:click="submit()" class="btn btn-warning btn-lg btn-block">
          <icon v-show="loading" name="circle-o-notch" spin></icon>
          Create
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import customAxios from '@/libraries/customAxios'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      textArea: '',
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
    async submit () {
      try {
        // validation
        if (!this.textArea.trim()) {
          this.error = true
          this.errorMessage = 'Word Bank is empty!'
          return
        }
        if (!this.password.trim()) {
          this.error = true
          this.errorMessage = 'Password is empty!'
          return
        }
        this.loading = true
        const result = await customAxios.post('/create', {
          wordBank: this.wordBank,
          password: this.password
        })
        this.pushAdmin({ id: result.data, password: this.password })
        this.$router.push({ name: 'Dashboard', params: { id: result.data } })
      } catch (e) {
        this.error = true
        this.errorMessage = e.response.data
      } finally {
        this.loading = false
      }
    }
  },
  computed: {
    wordBank () {
      return this.textArea.split('\n').filter((word) => word.trim() !== '')
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
