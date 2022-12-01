<template>
  <PeakFinderLogo />
  <PrimaryMenu />
  <router-view></router-view>
</template>

<script setup>
import { onMounted } from "vue";
import PrimaryMenu from "./components/menus/PrimaryMenu.vue";

onMounted(() => {
  document.documentElement.className = "dark-mode";
});
</script>

<style lang="scss" src="./styles/global.scss"></style>
