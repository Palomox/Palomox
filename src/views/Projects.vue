<template>
  <div class="project-container">
    <h1>This are some projects I've done:</h1>
    <!--project v-for="project in projects" :project="project"/-->
    <v-col v-for="project in projects" :key="project" cols="12">
      <v-card>
        <v-row no-gutters>
          <v-col>
            <v-card-title>{{ project.name }}</v-card-title>
            <v-card-text>{{ project.description }}</v-card-text>
            <v-card-actions position="bottom">
              <v-btn position="bottom" color="yellow-darken-3" text-color="black" :href="project.link">Check it out!</v-btn>
            </v-card-actions>
          </v-col>
          <v-col>
            <v-img :src="project.image" cover="true" height="35vh"/>
          </v-col>
        </v-row>

      </v-card>
    </v-col>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import Project from "../components/Project.vue";
import {ProjectType} from "@/Types"
import * as config from "@/config.json"
@Options({
  components: {
    Project
  },
})
export default class Projects extends Vue {
  projects = config.projects

}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.project-container {
  @apply flex flex-col justify-start items-center gap-4;
}

v-card {
  @apply from-purple-800 to-blue-800 bg-gradient-to-br
}
</style>
