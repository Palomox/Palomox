<template>
  <div class="footer">
    <ul>
      <li>
        <text-block title="Discord" content="Palomox#3445" :icon="['fab', 'discord']"></text-block>
      </li>
      <li>
        <text-block title="GitHub" link="https://github.com/palomox" content="Palomox" :icon="['fab', 'github']"></text-block>
      </li>
      <li>
        <text-block title="Twitter" link="https://twitter.com/palomox55" content="Palomox55" :icon="['fab', 'twitter']"></text-block>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import {Options, Vue} from "vue-class-component";
import TextBlock from "@/components/TextBlock.vue";

@Options({
  name: "page-footer",
  components: {TextBlock},
  props: {}
})
export default class PageFooter extends Vue {
}
</script>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.footer {
  @apply bg-gray-800 text-white w-full h-auto;
}

.footer > ul {
  @apply flex flex-row gap-4 justify-center;
}

</style>
