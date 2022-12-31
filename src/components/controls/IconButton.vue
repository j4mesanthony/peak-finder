<template>
  <a @mouseenter="toggleToolTip(true)" @mouseleave="toggleToolTip()">
    <span v-if="tooltip && isToolTipOn" class="tooltip-prop">{{
      tooltip
    }}</span>
    <span class="material-symbols-outlined" :class="{ active: props.isActive }">
      {{ props.icon }}
    </span>
  </a>
</template>

<script setup>
import { computed, ref } from "vue";
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
    left: 36px;
    color: var(--button-color);
  }

  span {
    color: var(--accent-color);

    &.active {
      color: var(--button-color);
    }
  }
}
</style>
