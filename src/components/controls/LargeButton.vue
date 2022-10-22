<template>
  <button
    type="button"
    class="btn btn-primary btn-lg"
    :class="{ disabled: isDisabled }"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { computed } from "vue";

// eslint-disable-next-line no-undef
const props = defineProps({
  isDisabled: {
    type: Boolean,
    default: false,
  },
});

const isDisabled = computed(() => props.isDisabled);
</script>

<style lang="scss" scoped>
// .btn {
//   &.btn-primary {
//     &.btn-lg {
//       background-color: #f7f9f3;
//       border-color: #f7f9f3;
//       color: #293435;
//     }
//   }
// }
</style>
