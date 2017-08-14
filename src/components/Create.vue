<template lang="html">
  <div>
    <div class="container">
      <h1 class="text-center">What Word is it ?</h1>
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
          <label>Remote Password:</label>
          <input v-model="password" class="form-control" placeholder="Password" type="password"></textarea>
        </div>
        <div v-if="error" class="alert alert-warning" role="alert">
          {{ errorMessage }}
        </div>
        <button v-on:click="submit()" style="width:100%;" class="btn btn-warning btn-lg">Create</button>
      </div>
    </div>
  </div>
</template>

<script>
import customAxios from '@/libraries/customAxios'
export default {
  data () {
    return {
      textArea: '',
      password: '',
      error: false,
      errorMessage: ''
    }
  },
  methods: {
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
        const result = await customAxios.post('/create', {
          wordBank: this.wordBank,
          password: this.password
        })
        console.log('ok')
        this.$router.push({name: 'Dashboard', params: {id: result.data}})
      } catch (e) {
        console.log('400')
        this.error = true
        this.errorMessage = e.response.data
      }
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
</style>
