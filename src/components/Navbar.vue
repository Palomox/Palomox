<template>
  <v-app-bar color="grey-darken-4" elevation="20" height="70">
    <v-row>
      <v-col>
        <ul class="navlist">
          <li class="start">
            <router-link to="/"><img class="logo" :src="require('@/assets/logo.png')"></router-link>
          </li>
          <li class="item" v-for="page in pages">
            <router-link :to="page.route">
              <v-btn color="grey-darken-3" text-color="white">{{ page.label }}</v-btn>
            </router-link>
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
import {Options, Vue} from "vue-class-component";

@Options({
  name: "nav-bar",
  props: {
    pages: Array
  }
})
export default class NavBar extends Vue {

}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
v-app {
  @apply bg-gray-900 text-white;
}

.nav {
  @apply w-full h-auto;
}

.navlist {
  @apply p-3 flex flex-row justify-end items-center gap-3;
}

.item {
  @apply p-1;
}

.start {
  @apply mr-auto rounded-md p-0;
}

.logo {
  @apply rounded-md h-14;
}

</style>
