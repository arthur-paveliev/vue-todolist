<template>
  <router-link :to="{ name: 'project', params: { id }}" class="router-link">
    <div class="container" :style="{ 'border-left-color': color }">
      <h2 class="title">{{ title }}</h2>
      <Tags v-if="tags.length" :tags="tags" />
    </div>
  </router-link>
</template>

<style scoped>
  .container {
    padding: 1.5rem;
    border-left: .5rem solid;
    border-radius: .25rem;
    cursor: pointer;
    transition: background .5s;

    &:hover {
      background: lightgray;
    }

    &:active {
      background: grey;
    }
  }

  .title {
    margin: 0;
    font-size: 2rem;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
</style>

<style>
  .router-link,
  .router-link:hover,
  .router-link:active,
  .router-link:visited {
    color: black;
    text-decoration: none;
  }
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Tags from '@/components/Tags.vue'

@Component({
  components: {
    Tags
  }
})
export default class Flip extends Vue {
  @Prop() readonly title!: string
  @Prop({ default: 'purple' }) readonly color!: string
  @Prop({ default: [] }) readonly tags!: string[]
  @Prop() readonly id!: string | number
}
</script>
