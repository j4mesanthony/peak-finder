<template>
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <PeakFinderLogo />
      </div>
    </div>

    <div class="row">
      <div class="col">
        <LargeButton @click="navback">
          My Location
          <span class="material-icons" style="top: 6px"> explore </span>
        </LargeButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function navback() {
  router.push("/");
}
</script>

<style lang="scss" scoped></style>
