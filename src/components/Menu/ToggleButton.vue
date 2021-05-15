<template>
  <button class="toggle-button" @click="handleClick">{{ isActive ? '|' : '||' }}</button>
</template>

<style scoped>
  .toggle-button {
    border: none;
    width: 2rem;
    height: 100%;
    background: lightgrey;
    color: black;
    text-align: center;
    color: white;
    transition: .5s background ease;
    font-size: 2.5rem;
    cursor: pointer;

    &:hover {
      background: grey;
    }
  }
</style>

<script lang="ts">
import { Vue, Component, Emit } from 'vue-property-decorator'

@Component
export default class Menu extends Vue {
  isActive = false

  @Emit('update:open')
  handleClick (): boolean {
    this.isActive = !this.isActive

    return this.isActive
  }
}
</script>
