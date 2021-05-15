<template>
    <a
    href="#"
    role="button"
    :title="title" @click.prevent="handleClick"
    class="clickable-wrapper"
  >
    <slot />
  </a>
</template>

<style scoped>
  .clickable-wrapper {
    display: inline-block;
    transition: .5s background;
    color: black;

    &:focus {
      box-shadow: .25rem .25rem .25rem rgba(0, 0, 0, .3);
    }

    &:hover {
      background: lightgrey;
    }

    &,
    &:active,
    &:hover,
    &:visited {
      text-decoration: none;
    }
  }
</style>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'

@Component
export default class ClickableWrapper extends Vue {
  @Prop() readonly title!: string

  @Emit('click')
  private handleClick (e: unknown): unknown {
    return e
  }
}
</script>
