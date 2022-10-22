<template>
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <PeakFinderLogo />
      </div>
    </div>

    <div class="row">
      <div class="col">
        <!-- <LargeButton isDisabled>
          Get my location
          <span class="material-icons" style="top: 5px"> explore </span>
        </LargeButton> -->
      </div>
    </div>

    <div v-if="test" class="row">
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

const test = ref(null);

onMounted(() => {
  const locator = navigator.geolocation;
  locator.getCurrentPosition((res) => {
    test.value = res.coords;
  });
});

const longitude = computed(() => test.value?.longitude);
const latitude = computed(() => test.value?.latitude);
const accuracy = computed(() => `+/-${test.value?.accuracy}m`);
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Aleo:wght@300&display=swap");

#app {
  font-family: "Aleo", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

* {
  box-sizing: border-box;
  /* Popcorn */
  color: #f7f9f3;
  position: relative;
}

body {
  /* Black Blue */
  background-color: #293435;
}
</style>
