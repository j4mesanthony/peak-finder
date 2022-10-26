<template>
  <div class="container text-center">
    <div class="row">
      <div class="col-sm-6">
        <PeakFinderLogo />
        <ul class="nav nav-pills justify-content-center">
          <li class="nav-item">
            <router-link class="nav-link active" to="/"
              >Where am I?</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/areas">Areas</router-link>
          </li>
        </ul>
      </div>
      <div class="col-sm-6">
        <div v-if="coords" class="row">
          <div class="col">
            <br />
            <h5><small>Your Location</small></h5>
            <h5><b>Latitude</b>: {{ latitude }}&#176;</h5>
            <h5><b>Longitude:</b> {{ longitude }}&#176;</h5>
            <h5><b>Accuracy</b>: <small>~</small>{{ accuracy }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
// import { useRouter } from "vue-router";

// const router = useRouter();
const coords = ref(null);

onMounted(() => {
  const locator = navigator.geolocation;
  locator.getCurrentPosition((res) => {
    coords.value = res.coords;
  });
});

const longitude = computed(() => coords.value?.longitude);
const latitude = computed(() => coords.value?.latitude);
const accuracy = computed(
  () => `${parseFloat(coords.value?.accuracy).toFixed(1)}m`
);

// function navToAreas() {
//   router.push("/areas");
// }
</script>

<style lang="scss" scoped></style>
