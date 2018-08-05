<template lang="html">
  <div id="create">
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
        <div class="d-flex align-items-center justify-content-between mb-2">
          <h4 class="mb-0">Color:</h4>
          <div class="preview-color" :style="{ background: selectedColor }" />
        </div>
        <div class="d-flex align-items-center justify-content-between">
          <div class="d-flex">
            <div v-for="color in colors" @click="changeColor(color)" :class="['color', { 'selected': color === selectedColor }]" :style="{ background: color }" :key="color" />
          </div>
          <input v-model="selectedColor" size="4" class="ml-2 w-25 text-right form-control" placeholder="#000000" />
        </div>
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
        <button :disabled="loading" v-on:click="submit()" class="btn btn-warning btn-lg btn-block">
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
export default {
  data () {
    return {
      textArea: '',
      password: '',
      error: false,
      errorMessage: '',
      loading: false,
      selectedColor: '#fc5c65',
      colors: [
        '#fc5c65',
        '#fd9644',
        '#fed330',
        '#26de81',
        '#45aaf2',
        '#3867d6',
        '#a55eea',
        '#d1d8e0',
        '#4b6584'
      ]
    }
  },
  methods: {
    ...mapActions([
      'pushAdmin'
    ]),
    changeColor (color) {
      console.log(color)
      this.selectedColor = color
    },
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
          color: this.selectedColor,
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

.color {
  width: 30px;
  height: 30px;
  border-radius: 4px;
  cursor: pointer;
  border: thin solid white;
  transition: all 300ms;
}

.preview-color {
  width: 100%;
  height: 30px;
  margin-left: 1em;
  border-radius: 4px;
  transition: all 300ms;
}

.color:hover {
  border: thin solid #2e2e2e;
}

.selected {
  border: thin solid #2e2e2e;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
}

.color + .color {
  margin-left: .25em;
}
</style>
