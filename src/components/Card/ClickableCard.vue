<template>
  <ClickableWrapper
    :title="title" @click.prevent="handleClick"
  >
    <Card v-bind="card"><slot /></Card>
  </ClickableWrapper>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import Card from './SimpleCard.vue'
import ClickableWrapper from './internal/ClickableWrapper.vue'
import { CardProps } from './Card'

@Component({
  components: {
    Card,
    ClickableWrapper
  }
})
export default class ClickableCard extends Vue {
  @Prop() readonly title!: string
  @Prop() readonly card!: CardProps

  @Emit('click')
  private handleClick (e: unknown): unknown {
    return e
  }
}
</script>
