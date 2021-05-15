<template>
    <div class="container" :class="{ open: isOpen }">
        <nav class="menu-nav">
            <ul class="links">
                <li v-for="link in links" :key="link.title" class="link">
                    <MenuLink :url="link.url" :title="link.title" />
                </li>
            </ul>
        </nav>
        <div class="toggle-container">
            <ToggleButton :open.sync="isOpen">Click Me</ToggleButton>
        </div>
    </div>
</template>

<style scoped>
    .container {
        height: 100vh;
        position: absolute;
        width: 12rem;
        transform: translateX(-10rem);
        transition: .5s transform ease-in-out;
        display: flex;

        &.open {
            transform: translateX(0);
        }
    }

    .toggle-container {
        height: 100%;
        width: 2rem;
        flex-shrink: 0;
    }

    .menu-nav {
        background: white;
        flex-grow: 1;
    }

    .links {
        margin: 0;
        padding: 0;
    }

    .link {
        list-style: none;
    }
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import MenuLink from './MenuLink.vue'
import ToggleButton from './ToggleButton.vue'

@Component({
  components: {
    MenuLink,
    ToggleButton
  }
})
export default class Menu extends Vue {
  @Prop() private links!: Array<{ url: string, title: string }>

  private isOpen = false
}
</script>
