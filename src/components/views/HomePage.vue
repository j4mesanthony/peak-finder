<template>
  <div class="container text-center">
    <div v-if="coords" class="row">
      <div class="col">
        <h4>Your Location</h4>

        <br />
        <h4><b>Longitude:</b> {{ longitude }}</h4>
        <h4><b>Latitude</b>: {{ latitude }}</h4>
        <h4><b>Accuracy</b>: {{ accuracy }}</h4>
      </div>
    </div>
    <div v-else>
      <br />
      <h5><span class="spinner material-icons"> sync </span></h5>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";

const coords = ref(null);
const latitude = computed(() => parseFloat(coords.value?.latitude).toFixed(5));
const longitude = computed(() =>
  parseFloat(coords.value?.longitude).toFixed(5)
);
const accuracy = computed(
  () => `${parseFloat(coords.value?.accuracy).toFixed(0)}m`
);

onMounted(() => {
  const locator = navigator.geolocation;
  locator.getCurrentPosition((res) => {
    coords.value = res.coords;
  });
});
</script>

<style lang="scss" scoped>
.spinner {
  animation: rotation 1.4s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-359deg);
  }
}
</style>
