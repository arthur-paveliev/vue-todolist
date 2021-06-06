<template>
  <div>
    <h1>Projects</h1>
    <p v-if="isLoading">
      Loading...
    </p>
    <ul v-else class="projects">
      <li class="project" v-for="project in projects" :key="project.id">
        <ProjectCard v-bind="project" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .projects {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .project:not(.last-child) {
    margin-bottom: 1rem;
  }
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapGetters, mapActions } from 'vuex'

import ProjectCard from './ProjectCard.vue'

@Component({
  components: {
    ProjectCard
  },
  computed: {
    ...mapGetters({ projects: 'getProjects', isLoading: 'isLoading' })
  },
  methods: {
    ...mapActions(['getProjects'])
  }
})
export default class Projects extends Vue {
  private projects: unknown

  private getProjects!: CallableFunction

  created (): void {
    this.getProjects()
  }
}
</script>
