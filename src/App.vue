<template>
  <div id="app">
 
 
  <router-view></router-view>
  <MenuItem/>
  </div>
</template>

<script>
import MenuItem from "./components/Menu.vue";

export default {
  name: 'App',
  components: { MenuItem }
}
</script>

<style>
#app {
  
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
