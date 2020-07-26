<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <input class="aaa" />

  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script>
import HelloWorld from '/@/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style scoped lang="scss">
input {
  color: red;
}

.aaa {
  background-color: blue;
}
</style>
