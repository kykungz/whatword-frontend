<template lang="html">
  <div id="auth">
    <div class="container">
      <div class="content">
        <form @submit.prevent="auth()">
          <label>Enter Game Password:</label>
          <input
            :class="[{'is-invalid': error}, 'password mb-2 text-center form-control form-control-lg']"
            placeholder="Password"
            v-model="password"
          >
          <label v-if="error" class="text-danger text-right">
            {{ error }}
          </label>
          <button :disabled="loading" @click="auth" type="submit" class="btn btn-lg btn-primary btn-block">
            <icon v-show="loading" name="circle-notch" spin /> Go
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import GameApi from '@/lib/GameApi'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      id: this.$route.query.id,
      redirect: this.$route.query.redirect,
      password: '',
      error: false,
      loading: false,
    }
  },
  async mounted() {
    try {
      if (!this.id || !this.redirect) throw new Error()
      this.setLoading(true)
      await GameApi.getRoomInfo({ id: this.id })
      this.setLoading(false)
    } catch (e) {
      this.$router.replace({ name: 'home' })
    }
  },
  methods: {
    ...mapActions(['setLoading', 'saveRoom']),
    async auth() {
      this.loading = true
      try {
        const { data: result } = await GameApi.getRoomInfo({
          id: this.id,
          password: this.password,
        })
        if (result.admin) {
          this.saveRoom({ id: this.id, password: this.password })
          this.$router.replace({ name: this.redirect, params: { id: this.id } })
        } else {
          this.error = 'Wrong password!'
        }
      } catch (e) {
        this.$router.replace({ name: 'home' })
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#auth {
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
