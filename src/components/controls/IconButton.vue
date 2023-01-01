<template>
  <a @mouseenter="toggleToolTip(true)" @mouseleave="toggleToolTip()">
    <span v-if="tooltip && isToolTipOn" class="tooltip-prop">
      <div class="pointer"></div>
      {{ tooltip }}</span
    >
    <span class="material-symbols-outlined" :class="{ active: props.isActive }">
      {{ props.icon }}
    </span>
  </a>
</template>

<script setup>
import { computed, ref } from "vue";
import { ALLOWED_ICONS } from "../../constants/allowedIcons.consts";

// eslint-disable-next-line no-undef
const props = defineProps({
  icon: {
    type: String,
    required: true,
    validator: (value) => {
      const icons = Object.keys(ALLOWED_ICONS);
      return icons.includes(value);
    },
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

const isToolTipOn = ref(false);
const tooltip = computed(() => props.tooltip);

function toggleToolTip(show = false) {
  isToolTipOn.value = show;
}
</script>

<style lang="scss" scoped>
@import "../../styles/vars.scss";

a {
  cursor: pointer;
  height: 40px;
  padding: 5px;

  .tooltip-prop {
    font-size: 14px;
    position: absolute;
    top: 7px;
    left: 38px;
    color: var(--button-color);
    background-color: var(--accent-color);
    padding: 3px 6px;
    border-radius: 3px;

    .pointer {
      display: block;
      position: absolute;
      width: 8px;
      height: 8px;
      top: 8px;
      left: -3px;
      background-color: var(--accent-color);
      transform: rotate(45deg);
    }
  }

  span {
    color: var(--accent-color);

    &.active {
      color: var(--button-color);
    }
  }
}
</style>
