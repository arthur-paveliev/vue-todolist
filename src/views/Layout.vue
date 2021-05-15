<template>
    <div>
      <Menu :links="links" />
      <main>
        <slot />
      </main>
    </div>
</template>

<style scoped>
  .menu-container {
    position: absolute;
  }
</style>

<style>
  body,
  html {
    margin: 0;
  }

  main {
    margin-left: 2rem;
    padding: 2rem;
  }
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Menu from '@/components/Menu'

@Component({
  components: {
    Menu
  }
})
export default class Layout extends Vue {
  private links = [
    { url: '/', title: 'Home' },
    { url: '/projects', title: 'Projects' }
  ]
}
</script>
