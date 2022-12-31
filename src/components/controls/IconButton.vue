<template>
  <a>
    <span class="material-symbols-outlined" :class="{ active: props.isActive }">
      {{ props.icon }}
    </span>
  </a>
</template>

<script setup>
// import { ALLOWED_ICONS } from "../../constants/allowedIcons.consts";

// eslint-disable-next-line no-undef
const props = defineProps({
  icon: {
    type: String,
    required: true,
    // TODO: Implement validator
    // validator: (value) => ALLOWED_ICONS.includes(value),
  },

  isActive: {
    type: Boolean,
    default: false,
  },

  tooltip: {
    type: String,
    default: null,
  },
});
</script>

<style lang="scss" scoped>
@import "../../styles/vars.scss";

a {
  cursor: pointer;
  height: 40px;
  padding: 5px;

  span {
    color: var(--accent-color);

    &.active {
      color: var(--button-color);
    }
  }
}
</style>
