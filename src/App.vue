<template>
  <PeakFinderLogo />
  <PrimaryMenu />
  <router-view></router-view>
</template>

<script setup>
import PrimaryMenu from "./components/menus/PrimaryMenu.vue";
</script>

<style lang="scss" src="./styles/global.scss"></style>
