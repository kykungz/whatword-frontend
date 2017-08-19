<template lang="html">
  <div id="auth">
    <div class="container">
      <div class="content">
        <label>Enter Game Password:</label>
        <input v-model="password" :class="{'is-invalid': error}" class="text-center form-control form-control-lg" style="margin-bottom:10px;" placeholder="Password" required>
        <label v-if="error" class="text-danger text-right">
          {{ errorMessage }}
        </label>
        <button @click="auth" type="submit" class="btn btn-lg btn-primary btn-block">
          Go
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { roomValidator } from '@/libraries/util'
import { mapActions } from 'vuex'
export default {
  mounted () {
    try {
      this.id = this.$route.query.id
      this.target = this.$route.query.target
      if (!this.id || !this.target) throw new Error()
    } catch (e) {
      this.$router.replace({name: '404'})
    }
  },
  data () {
    return {
      id: '',
      password: '',
      target: '',
      error: false,
      errorMessage: ''
    }
  },
  methods: {
    ...mapActions([
      'pushAdmin'
    ]),
    async auth () {
      try {
        const result = await roomValidator.validate({
          id: this.id,
          password: this.password
        })
        if (result.admin) {
          this.pushAdmin({id: this.id, password: this.password})
          this.$router.replace({name: this.target, params: {id: this.id}})
        } else {
          this.error = true
          this.errorMessage = 'Wrong password!'
        }
      } catch (e) {
        this.$router.replace({name: '404'})
      }
    }
  }
}
</script>

<style scoped>
#auth {
  margin-top: 30vh;
}
</style>
