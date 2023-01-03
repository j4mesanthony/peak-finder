<template>
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <h4>API Playground</h4>

        <button @click="getStuff">Test Api</button>
        <pre v-if="response">{{ response }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useApi } from "@/composables/useApi.composable";

const { get } = useApi();
const response = ref(null);

function getStuff() {
  get("val/wxfcs/all/json/3840?res=3hourly").then(
    (data) => (response.value = data)
  );
}
</script>

<style lang="scss" scoped>
button {
  margin-top: 20px;
}

pre {
  background: #eee;
  border: 1px solid #333;
  border-radius: 4px;
  color: #333;
  margin: 10px;
  padding: 5px;
  user-select: text;
}

// TODO: Move to global styles
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
