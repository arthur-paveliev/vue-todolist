<template>
  <button @click="handleClick" :class="side">
    <transition name="fade" mode="out-in">
      <section v-if="side === 'front'" key="front">
        <slot name="front" />
      </section>
      <section v-else key="back" class="back">
        <slot name="back" />
      </section>
    </transition>
  </button>
</template>

<style scoped>
  button {
    background: none;
    border: none;
    display: inline-block;
    position: relative;
    transform: rotateY(0);
    transition: transform 1s;

    &:hover {
      box-shadow: .25rem .25rem .5rem darkgrey;
      background-color: lightgrey;
    }

    &.back {
      transform: rotateY(.5turn);
    }
  }

  .back {
    transform: rotateY(-.5turn);
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>

<script lang="ts">
import { Vue, Component, Emit } from 'vue-property-decorator'

@Component
export default class Flip extends Vue {
  private side: 'front' | 'back' = 'front'

  @Emit('click') handleClick (): 'front' | 'back' {
    if (this.side === 'front') {
      this.side = 'back'
    } else {
      this.side = 'front'
    }

    return this.side
  }
}
</script>
