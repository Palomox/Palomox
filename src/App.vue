<template>
  <nav-bar id="nav" class="nav" :pages="routes"></nav-bar>
  <div ref="view">
    <router-view/>
  </div>
  <footer>
    <page-footer id="footer" class="footer"></page-footer>
  </footer>
</template>
<script lang="ts">
import {Options, Vue} from "vue-class-component";
import NavBar from "@/components/Navbar.vue";
import {Route} from "@/Types";
import PageFooter from "@/components/Footer.vue";

@Options({
  components: {
    NavBar,
    PageFooter
  }
})
export default class App extends Vue {
  routes: Array<Route> = [
    {
      name: "home",
      label: "Home",
      route: "/"
    },
    {
      name: "projects",
      label: "Projects",
      route: "projects"
    },
    {
      name: "about",
      label: "About",
      route: "about"
    },
  ]
  viewHeight: number | undefined = undefined

  stringifyHeight(){
    return "min-height: "+this.viewHeight+"px;"
  }

  mounted() {
    const view = (this.$refs.view as HTMLElement).style.minHeight = this.setHeight()+"px"
    this.setHeight()
  }

  render() {
    this.setHeight()
  }

  setHeight() {
    let nav = document.getElementById("nav")
    let footer = document.getElementById("footer")
    let navHeight: number = 0
    let footerHeight: number = 0;
    if (nav != null) {
      navHeight = nav.clientHeight
    }
    if (footer != null) {
      footerHeight = footer.clientHeight
    }
    let viewHeight = window.innerHeight - navHeight - footerHeight
    this.viewHeight = viewHeight
    return viewHeight
  }
}
</script>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scrollbar-width: thin;
  scrollbar-track-color: #6e7179;
}

router-view {
  @apply min-h-screen;
}

html::-webkit-scrollbar {
  width: 10px;
}

html::-webkit-scrollbar-thumb {
  background: #6e7179;
}

.nav {
  @apply sticky top-0;
}
</style>
