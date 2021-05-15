<template>
  <div>
    <h1>Projects</h1>
    <ul>
      <li v-for="project in projects" :key="project.id">
        <router-link :to="{ name: 'project', params: { id: project.id }}">{{ project.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Layout extends Vue {
  private projects = [
    { id: 1, title: 'Lorem Ipsum', shortDescription: 'Lorem ipsum dolar sit amet' },
    { id: 2, title: 'Dolar sit', shortDescription: 'Lorem ipsum dolar sit amet' }
  ]
}
</script>
