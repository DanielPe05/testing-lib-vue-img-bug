<template>
  <div id="app">
    <img alt="Vue logo" :src="logoUrl" data-testid="logo" />
  </div>
</template>

<script>
export default {
  name: 'App',
  props: {
    defaultImage: Boolean
  },
  computed: {
    logoUrl() {
      const imagePath = this.defaultImage ? 'logo-default.png' : 'logo.png'
      return require(`./assets/${imagePath}`)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
