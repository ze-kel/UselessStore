<template>
  <div
    class="button"
    @click="console.log(this.stylesValues)"
    :style="stylesValues"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    outline: {
      type: Boolean,
      default: false,
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
      return { color: this.textColor, backgroundColor: this.backColor };
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  padding: 1.5rem 2.5rem;
  display: inline-block;
  cursor: pointer;
  font-weight: 500;
  transition: 0.1s all;

  &:hover {
    transform: scale(1.04);
  }
}
</style>
