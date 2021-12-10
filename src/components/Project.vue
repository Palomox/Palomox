<template>
  <div class="main-project-container" :class="picSideCheck(project.picSide)">
    <div class="project-text">
      <h1>{{ project.name }}</h1>
      <p>{{ project.description }}</p>
    </div>
    <div class="image-container">
      <img :src="project.image">
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {ProjectClass, ProjectType} from "@/Types";

@Options({
  name: "project",
  props: {
    project: ProjectClass
  }
})
export default class Project extends Vue {
  picSideCheck(picSide: string) {
    if (picSide == "left") {
      return "reverse"
    }
    return "normal"
  }
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.main-project-container {
  @apply rounded-md from-purple-800 to-blue-800 bg-gradient-to-tr flex  gap-2 w-3/4 p-2 text-justify;
}

.main-project-container > div > img {
  @apply object-cover object-center;

}
.image-container{
  max-height: 50%;
}
.project-text {
  max-width: 50%;
}

.project-text > h1 {
  @apply font-bold text-2xl;
}

.normal {
  @apply flex-row;
}

.reverse {
  @apply flex-row-reverse;
}
</style>
