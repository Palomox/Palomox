<template>
  <div class="project-container">
    <h1>This are some projects I've done:</h1>
    <project v-for="project in projects" :project="project"/>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import Project from "../components/Project.vue";
import {ProjectType} from "@/Types"
@Options({
  components: {
    Project
  },
})
export default class Projects extends Vue {
  projects : Array<ProjectType> = [
    {
      name: "CutePigeons",
      description: "An application about pigeons. Powered by a Spring Boot backend that serves" +
          " images stored on a postgres database with a Vue 3 frontend. All the authorization is made via " +
          "auth0, the logging in the frontend and the validaiton in the backend.",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Homing_pigeon.jpg",
      picSide: "right"
    },
    {
      name: "test",
      description: "Testing",
      image: "",
      picSide: "left"
    }
  ]
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.project-container{
  @apply flex flex-col justify-start items-center gap-4;
}
</style>
