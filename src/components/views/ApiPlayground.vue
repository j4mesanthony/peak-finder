<template>
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <h4>API Playground</h4>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useApi } from "@/composables/useApi.composable";

const { get } = useApi();
onMounted(() => get("routes/england/cumbria"));
</script>

<style lang="scss" scoped></style>
