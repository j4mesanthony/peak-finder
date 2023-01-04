<template>
  <span
    class="material-symbols-outlined"
    style="position: fixed; top: 10px; right: 10px; cursor: pointer"
    @click="toggleMode"
  >
    {{ modeIcon }}
  </span>

  <PeakFinderLogo />
  <MainNavigation />
  <router-view></router-view>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useLocalStorage } from "./composables/useLocalStorage.composable";
import { DISPLAY_MODES } from "./constants/displayModes.consts";
import MainNavigation from "./components/menus/MainNavigation.vue";

const { getFromStorage, addToStorage } = useLocalStorage();

onMounted(() => {
  const storedMode = getFromStorage(DISPLAY_MODES.modeKey);
  const currentMode = storedMode ? storedMode : DISPLAY_MODES.light;
  if (!storedMode) addToStorage(DISPLAY_MODES.modeKey, currentMode);

  document.documentElement.className = currentMode;
  mode.value = currentMode;
});

const mode = ref(null);
const modeIcon = computed(() => {
  return mode.value === DISPLAY_MODES.light
    ? DISPLAY_MODES.dark
    : DISPLAY_MODES.light;
});

function toggleMode() {
  mode.value =
    mode.value === DISPLAY_MODES.light
      ? DISPLAY_MODES.dark
      : DISPLAY_MODES.light;

  addToStorage(DISPLAY_MODES.modeKey, mode.value);
  document.documentElement.className = mode.value;
}
</script>

<style lang="scss" src="./styles/global.scss"></style>
