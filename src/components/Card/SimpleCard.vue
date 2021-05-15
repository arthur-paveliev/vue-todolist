<template>
  <section class="container">
    <CardHeader v-if="!!header || !!img" :text="header" :img="img" />
    <section class="content"><slot /></section>
  </section>
</template>

<style scoped>
  .container {
    height: 18rem;
    width: 15rem;
  }

  .content {
    padding: 1rem;
  }
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import CardHeader from './internal/CardHeader.vue'

@Component({
  components: {
    CardHeader
  }
})
export default class Card extends Vue {
  @Prop() readonly header!: string;
  @Prop() readonly body!: string;
  @Prop() readonly img!: string;
}
</script>
