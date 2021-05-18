<template>
  <div :style="{ backgroundColor: backColor, color: textColor }" class="button">
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
};
</script>

<style lang="scss" scoped>
.button {
  padding: 15px 25px;
  display: inline-block;
}
</style>
