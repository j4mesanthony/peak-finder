<template>
  <div class="container text-center">
    <div class="row">
      <div class="col-sm-6">
        <PeakFinderLogo />
        <ul class="nav nav-pills justify-content-center">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Where am I?</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/areas">Areas</router-link>
          </li>
        </ul>
      </div>
      <div class="col-sm-6">
        <div v-if="coords" class="row">
          <div class="col">
            <br />
            <!-- CONTENT TO COME -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { useRouter } from "vue-router";

// const router = useRouter();

// function navback() {
//   router.push("/");
// }
</script>

<style lang="scss" scoped></style>
