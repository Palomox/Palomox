<template>
  <div class="centered">
    <div>
      <h1>Welcome!</h1>
      <p>You may know me as Palomox, I'm a 15-year-old student who has some computer-related projects that I dedicate my
        free time to.</p>
    </div>
  </div>
</template>

<script lang="ts">

import {Options, Vue} from "vue-class-component";


@Options({
  components: {}
})
export default class Home extends Vue {

}
</script>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.centered {
  @apply flex flex-col items-center justify-center;
}
</style>
