<template>
  <div id="app">
  <transition name="fade" mode="out-in" appear>
    <router-view />
  </transition>
  </div>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
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

.fa-icon {
  vertical-align: unset;
  margin-right: 4px;
}
</style>
