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
           <textarea v-model="textArea" class="form-control" rows="18"></textarea>
        </div>
        <div class="form-group">
          <label>Remote Password:</label>
          <input v-model="password" class="form-control" type="password"></textarea>
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
      password: ''
    }
  },
  methods: {
    async submit () {
      const result = await customAxios.post('/create', {
        wordBank: this.wordBank,
        password: this.password
      })
      this.$router.push({name: 'Dashboard', params: {id: result.data}})
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
