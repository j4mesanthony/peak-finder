<template>
  <div>
    <!-- TODO: Refactor to bottom fixed nav -->
    <nav class="slide-menu">
      <IconButton
        v-for="(route, i) in availableRoutes"
        :key="i"
        :isActive="currentRouteName === route.name"
        :icon="route.meta.icon"
        @click="navTo(route)"
      />
    </nav>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import IconButton from "../controls/IconButton.vue";

const router = useRouter();
const currentRouteName = computed(() => router.currentRoute.value.name);
const availableRoutes = computed(() => {
  let rootLevelRoutes = router.getRoutes().filter((x) => x.meta.isRootLevel);
  return rootLevelRoutes;
});

function navTo({ path }) {
  router.push(path);
}
</script>

<style lang="scss" scoped>
@import "../../styles/vars.scss";

.slide-menu {
  background-color: var(--background-color-primary);
  box-shadow: 0px -10px 40px -30px #000;
  position: fixed;
  bottom: 0px;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  z-index: 9;
}
</style>
