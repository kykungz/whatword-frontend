<template>
  <div class="full">
    <icon name="spinner" scale="10" spin />
  </div>
</template>

<style lang="scss" scoped>
.full {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.8);
}
</style>
