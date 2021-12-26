<template>
  <v-card text-color="white" color="grey-darken-3" height="60" width="160" class="" elevation="10">
    <v-col align="center">
    <v-row no-gutters="true" align="center">
      <v-card-title class="title">
        <font-awesome-icon :icon="icon"/>
        {{ title }}
      </v-card-title>
    </v-row>
    <v-row no-gutters="true"  align="" align-content="center">
      <v-card-text :href="link" target="_blank" class="link">{{ content }}</v-card-text>
    </v-row>
    </v-col>
  </v-card>
</template>

<script>
import {Options, Vue} from "vue-class-component";

@Options({
  name: "text-block",
  props: {
    title: String,
    icon: Array,
    content: String,
    link: String
  }
})
export default class TextBlock extends Vue {

}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.text-block {
  @apply bg-gray-700 rounded-md w-auto h-auto flex flex-col pl-2 pr-2 pt-1 pb-1 mt-2 mb-2;
}

.text-block > div {
  @apply flex flex-row gap-2;
}

.title {
}

.link {
  @apply text-lg;
}

v-card {

}
</style>
