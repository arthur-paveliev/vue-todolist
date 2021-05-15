<template>
  <div :style="containerStyle" class="header-container">
    <h2 class="header">{{ text }}</h2>
  </div>
</template>

<style scoped>
  .header-container {
    background: darkblue;
    color: white;
    height: 6rem;
  }

  .header {
    position: relative;
    top: 100%;
    transform: translateY(-100%);
    padding: .5rem 1rem;
    margin: 0;
  }
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { getImageUrl } from '../getImageUrl'

@Component
export default class CardHeader extends Vue {
  @Prop() private readonly text!: string
  @Prop({ default: undefined }) private readonly img!: string

  get containerStyle (): Record<string, unknown> | undefined {
    const url = getImageUrl(this.img)

    return this.img ? { 'background-image': `url(${url})`, 'background-size': 'cover' } : undefined
  }
}
</script>
