<template>
  <button
    class="button"
    :class="activated ? '' : 'inactive'"
    :style="stylesValues"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    outline: {
      type: Boolean,
      default: false,
    },
    activated: {
      type: Boolean,
      default: true,
    },
    textColor: { type: String, default: "black" },
    backColor: { type: String, default: "white" },
  },
  computed: {
    stylesValues() {
      if (this.outline) {
        return {
          color: this.textColor,
          border: `.2rem solid ${this.backColor}`,
        };
      }
      return {
        color: this.textColor,
        backgroundColor: this.backColor,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  border: none;
  padding: 1.5rem 2.5rem;
  display: inline-block;
  cursor: pointer;
  font-weight: 500;
  transition: 0.1s all;
  user-select: none;

  transition: opacity 1s;

  &.inactive {
    opacity: 66%;
  }

  &:not(.inactive):hover {
    transform: scale(1.04);
  }
}
</style>
