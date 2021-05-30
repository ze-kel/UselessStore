<script>
import ImageHoverFlipper from "./ImageHoverFlipper.vue";

export default {
  props: {
    product: {},
  },
  methods: {
    getImgUrl(pic) {
      return require("../images/" + pic);
    },
  },
  components: { ImageHoverFlipper },
};
</script>

<template>
  <div class="itemContainer">
    <div class="imageContainer">
      <ImageHoverFlipper :images="product.images"></ImageHoverFlipper>
    </div>
    <div class="text">
      <div class="name">
        {{ product.name }}
      </div>
      <div class="info">{{ product.collection }}</div>
      <div class="price">{{ product.price }} ₽</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.itemContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0rem;
  border-radius: 0.2rem;
  border: 0.1rem solid transparent;

  transition: 0.2s all;

  &:hover {
    border: 0.1rem solid var(--mainText);

    .imageContainer {
      transform: scale(1.05) translateY(-0.5rem);
    }
  }
}

.imageContainer {
  margin: 0 0.1rem;
  width: 85%;
  height: 20rem;
}

.text > * {
  text-align: center;
  display: flex;
  flex-direction: column;
}

.name {
  font-weight: 600;
  font-size: 2rem;
}

.price {
  font-weight: 700;
}
</style>
