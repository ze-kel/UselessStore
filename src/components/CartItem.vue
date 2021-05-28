<template>
  <div class="itemContainer" v-if="product !== null">
    <div class="imageContainer">
      <img :src="getImgUrl(product.images[0])" />
    </div>
    <div class="textContainer">
      <div class="name">
        {{ product.name }}
      </div>

      <div class="num">x{{ number }}</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getImgUrl(pic) {
      return require("../images/" + pic);
    },
  },
  props: {
    product: Object,
    number: Number,
  },
};
</script>

<style lang="scss" scoped>
.itemContainer {
  height: 6rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
}

.num {
  font-weight: 700;
  font-size: 4rem;
  color: var(--secondaryText);
}

.name {
  font-size: 3rem;
  font-weight: 500;
  color: var(--secondaryText);
}

.textContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.imageContainer {
  height: 100%;
}

img {
  height: 100%;
}
</style>
