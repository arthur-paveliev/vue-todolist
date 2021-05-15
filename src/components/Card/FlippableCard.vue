<template>
  <div
    class="flippable-card-container"
    :class="side"
    role="button"
    tabindex="0"
    @click="handleClick"
  >
    <transition name="fade">
      <section v-if="side === 'front'" key="front" class="side-container front">
        <Card v-bind="card">
          <slot name="front" />
        </Card>
      </section>
      <section v-else class="side-container back" key="side">
        <Card>
          <slot name="back" />
        </Card>
      </section>
    </transition>
  </div>
</template>

<style scoped>
  .flippable-card-container {
    display: block;
    position: relative;
    transform: rotateY(0);
    transition: transform 1s, background .3s;
    width: 15rem;
    height: 18rem;
    cursor: pointer;

    &:hover {
      background: lightgrey;
    }

    &.back {
      transform: rotateY(.5turn);
    }

    &:focus {
      & .side-container {
        box-shadow: .25rem .25rem .25rem rgba(0, 0, 0, .3);
      }
    }
  }

  .side-container {
    position: absolute;
    top: 0;

    &.back {
      transform: rotateY(-180deg);
    }
  }

  .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter-active {
    transition: opacity .5s .25s;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-to {
    opacity: 1;
  }

  .fade-leave {
    opacity: 1;
  }

  .fade-leave-to {
    opacity: 0;
  }
</style>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import Card from './SimpleCard.vue'
import { CardProps } from './Card'

@Component({
  components: {
    Card
  }
})
export default class FlippableCard extends Vue {
  @Prop() readonly title!: string
  @Prop() readonly card!: CardProps

  private side: 'front' | 'back' = 'front'

  @Emit('click')
  private handleClick (): 'front' | 'back' {
    if (this.side === 'front') {
      this.side = 'back'
    } else {
      this.side = 'front'
    }

    return this.side
  }
}
</script>
