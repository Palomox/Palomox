<template>
<div class="nav">
  <ul class="navlist">
    <li class="start"><router-link to="/"><img class="logo" src="@/assets/logo.png"></router-link></li>
    <li class="item" v-for="page in pages" ><router-link :to="page.route">{{page.label}}</router-link></li>
  </ul>
</div>
</template>

<script>
import {Options, Vue} from "vue-class-component";

@Options({
  name: "nav-bar",
  props:{
    pages: Array
  }
})
export default class NavBar extends Vue{

}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
html{
  @apply bg-gray-900 text-white;
}
.nav{
  @apply bg-gray-800 w-full h-auto;
}

.navlist{
  @apply p-3 flex flex-row justify-end items-center gap-3;
}
.item{
  @apply border border-gray-700 p-1;
}
.start{
  @apply mr-auto rounded-md p-0;
}
.logo{
  @apply rounded-md h-14;
}
</style>
