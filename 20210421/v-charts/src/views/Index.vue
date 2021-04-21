<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" :class="{ active: '/home' === $route.path }"
        >Index</router-link
      >
      |
      <router-link to="/line" :class="{ active: '/line' === $route.path }"
        >Line</router-link
      >
      |
      <router-link to="/pie" :class="{ active: '/pie' === $route.path }"
        >Pie</router-link
      >
      |
      <router-link to="/bar" :class="{ active: '/bar' === $route.path }"
        >Bar</router-link
      >
    </div>
    <router-view />
  </div>
</template>
<script>
export default {}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
  }
}
.active {
  color: #42b983 !important;
}
</style>
