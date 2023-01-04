<template>
  <div>
    <!-- TODO: Refactor to bottom fixed nav -->
    <nav class="slide-menu">
      <IconButton
        v-for="(route, i) in availableRoutes"
        :key="i"
        :isActive="currentRouteName === route.name"
        :icon="route.meta.icon"
        :tooltip="route.name"
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
  position: fixed;
  top: 5px;
  left: 5px;
  display: flex;
  flex-direction: column;
}
</style>
