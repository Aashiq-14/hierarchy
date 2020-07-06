<template>
  <div id="app">
    <Hierarchy/>
  </div>
</template>

<script>
import Hierarchy from './components/Hierarchy.vue';

export default {
  name: 'App',
  components: {
    Hierarchy
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
