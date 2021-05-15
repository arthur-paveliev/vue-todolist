<template>
  <router-link :to="url">{{ title }}</router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class MenuLink extends Vue {
  @Prop() private title!: string
  @Prop() private url!: string
}
</script>
