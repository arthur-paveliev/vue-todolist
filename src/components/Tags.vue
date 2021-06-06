<template>
  <ul class="tags">
    <li class="tag" v-for="tag in tags" :key="tag">{{ tag }}</li>
  </ul>
</template>

<style scoped>
  .tags {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
  }

  .tag {
    font-size: 1.25rem;

    &:not(:last-child) {
      margin-right: .75rem
    }
  }
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Tags extends Vue {
  @Prop() readonly tags!: string[]
}
</script>
