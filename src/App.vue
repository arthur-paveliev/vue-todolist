<template>
  <div id="app">
    <Layout>
      <router-view />
    </Layout>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Layout from '@/views/Layout.vue'

@Component({
  components: {
    Layout
  }
})
export default class App extends Vue {}
</script>
