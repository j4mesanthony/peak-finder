<template>
  <span
    class="material-symbols-outlined"
    style="position: fixed; top: 10px; right: 10px; cursor: pointer"
    @click="toggleMode"
  >
    {{ modeIcon }}
  </span>

  <PeakFinderLogo />
  <PrimaryMenu />
  <router-view></router-view>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import PrimaryMenu from "./components/menus/PrimaryMenu.vue";
import { useLocalStorage } from "./composables/useLocalStorage.composable";

const { getFromStorage, addToStorage } = useLocalStorage();

// Move these constants to a consts file.
// const 

onMounted(() => {
  const storedMode = getFromStorage("display-mode");
  const currentMode = storedMode ? storedMode : "light-mode";
  if (!storedMode) addToStorage("display-mode", currentMode);

  // TODO: Maybe have a consts file for multiple view modes e.g. dark/nightvision/light
  document.documentElement.className = currentMode;
  mode.value = currentMode;
});

const mode = ref(null);
const modeIcon = computed(() => {
  return mode.value === "light-mode" ? "dark_mode" : "light_mode";
});

function toggleMode() {
  mode.value = mode.value === "light-mode" ? "dark-mode" : "light-mode";

  addToStorage("display-mode", mode.value);
  document.documentElement.className = mode.value;
}
</script>

<style lang="scss" src="./styles/global.scss"></style>
