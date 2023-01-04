<template>
  <span class="material-icons" style="font-size: 70px">landscape</span>
  <h1 v-html="title"></h1>
</template>

<script setup>
import { computed } from "vue";

const title = computed(() => {
  const env = process.env.VUE_APP_ENVIRONMENT_NAME;
  const app = "Peak Finder";
  return env ? `${app} : <small style="color:orange">${env}</small>` : app;
});
</script>

<style lang="scss" scoped>
h1 {
  font-size: 32px;
}
</style>
