<template>
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <PeakFinderLogo />
      </div>
    </div>

    <div class="row">
      <div class="col">
        <LargeButton @click="navToAreas">
          Areas
          <span class="material-icons" style="top: 6px"> map </span>
        </LargeButton>
      </div>
    </div>

    <div v-if="coords" class="row">
      <div class="col">
        <br />
        <h5><small>Your Location</small></h5>
        <h4><b>Longitude:</b> {{ longitude }}</h4>
        <h4><b>Latitude</b>: {{ latitude }}</h4>
        <h4><b>Accuracy</b>: {{ accuracy }}</h4>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const coords = ref(null);

onMounted(() => {
  const locator = navigator.geolocation;
  locator.getCurrentPosition((res) => {
    coords.value = res.coords;
  });
});

const longitude = computed(() => coords.value?.longitude);
const latitude = computed(() => coords.value?.latitude);
const accuracy = computed(() => `+/-${coords.value?.accuracy}m`);

function navToAreas() {
  router.push("/areas");
}
</script>

<style lang="scss" scoped></style>
