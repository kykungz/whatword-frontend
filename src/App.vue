<template>
  <div id="app">
    <transition name="fade" mode="out-in" appear>
      <div v-if="shouldShow()">
        <github-corner />
        <div class="header container">
          <h1 class="text-center">What Word is it ?</h1>
          <hr>
        </div>
      </div>
    </transition>
    <transition name="fade" mode="out-in" appear>
      <router-view />
    </transition>
  </div>
</template>

<script>
import GithubCorner from '@/components/GithubCorner'

export default {
  name: 'app',
  components: { GithubCorner },
  methods: {
    shouldShow () {
      return ['Home', 'Dashboard', 'Create'].includes(this.$route.name)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.header {
  text-align: center;
  margin-top: 60px;
}

.content {
  max-width: 500px;
  margin: auto;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}

.fullwidth {
  width: 100%;
}

.password {
  -webkit-text-security: disc;
}
</style>
