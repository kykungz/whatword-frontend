<template>
  <div id="app">
    <transition name="fade" mode="out-in" appear>
      <PageLoader v-show="loading" />
    </transition>
    <transition name="fade" mode="out-in" appear>
      <div v-show="shouldShow()">
        <GithubCorner />
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
import PageLoader from '@/components/PageLoader'
import { mapGetters } from 'vuex'

export default {
  components: { GithubCorner, PageLoader },
  computed: {
    ...mapGetters(['loading']),
  },
  methods: {
    shouldShow() {
      return ['home', 'dashboard', 'create'].includes(this.$route.name)
    },
  },
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.header {
  margin-top: 60px;
}
</style>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.content {
  max-width: 500px;
  margin: auto;
}

.password {
  -webkit-text-security: disc;
}

.fa-icon {
  vertical-align: unset;
  margin-right: 4px;
}
</style>
