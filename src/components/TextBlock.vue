<template>
<div class="text-block">
  <div class="title">
    <div>
    <font-awesome-icon :icon="icon"></font-awesome-icon></div>
    <h1>{{title}}</h1>
  </div>
  <a :href="link" target="_blank" class="content" >{{content}}</a>
</div>
</template>

<script>
import {Options, Vue} from "vue-class-component";

@Options({
  name: "text-block",
  props:{
    title: String,
    icon: Array,
    content: String,
    link: String
  }
})
export default class TextBlock extends Vue{

}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.text-block{
  @apply bg-gray-700 rounded-md w-auto h-auto flex flex-col pl-2 pr-2 pt-1 pb-1 mt-2 mb-2;
}

.text-block > div{
  @apply flex flex-row gap-2;
}
.title{
  @apply font-bold text-2xl;
}
.content{

}
</style>
