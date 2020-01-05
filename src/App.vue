<template>
  <div id="app">
    <v-app>
      <page-header/>
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-image: linear-gradient(#9370DB 0%, #BA55D3);
  background-size: cover;
  background-repeat:   no-repeat;
  background-position: center center;
  font-family: Tahoma, Geneva, sans-serif;
}
</style>
