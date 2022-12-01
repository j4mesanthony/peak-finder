<template>
  <div class="container" style="padding: 30px 0">
    <nav class="nav nav-pills flex-column flex-sm-row">
      <a
        v-for="(route, i) in availableRoutes"
        :key="i"
        class="flex-sm-fill text-sm-center nav-link"
        :class="{ active: currentRouteName === route.name }"
        @click="navTo(route)"
        >{{ route.name }}</a
      >
    </nav>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

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

<style scoped lang="scss">
@import "../../styles/vars.scss";
.nav-link {
  cursor: pointer;

  &.active {
    background-color: $theme-light-secondaryColor;
    color: $theme-light-primaryColor;
  }
}
</style>
