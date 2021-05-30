<script>
import BaseButton from "./BaseButton.vue";
export default {
  components: { BaseButton },
};
</script>

<template>
  <div class="sizeContainer">
    <div class="centerAll minHeight">
      <div class="checkMark">✓</div>
      <div class="sectionTitle">Your order was placed!</div>
      <div class="text">
        Thanks! Our non existing manager will contact you soon.
      </div>

      <div class="links"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.minHeight {
  min-height: 70vh;
}

.checkMark {
  font-size: 10rem;
  font-weight: 900;
}

.centerAll {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.text {
  font-size: 2rem;
}
</style>
