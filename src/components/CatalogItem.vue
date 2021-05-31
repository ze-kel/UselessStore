<script>
import ImageHoverFlipper from "./ImageHoverFlipper.vue";
import formatter from "../services/priceFormatter";

export default {
  props: {
    product: {},
  },
  computed: {
    formattedPirce() {
      return formatter.format(Number(this.product.price));
    },
    inStock() {
      if (this.product.details.inStock > 0) {
        return true;
      } else {
        return false;
      }
    },
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
  <div class="itemContainer" :class="inStock ? '' : 'outOfStock'">
    <div class="imageContainer">
      <ImageHoverFlipper :images="product.images"></ImageHoverFlipper>
    </div>
    <div class="text">
      <div class="name">
        {{ product.name }}
      </div>
      <div class="info">{{ product.collection }}</div>
      <div class="price">{{ inStock ? formattedPirce : "SOLD OUT" }}</div>
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

.outOfStock {
  opacity: 40%;
}

.imageContainer {
  width: 85%;

  @media (max-width: $bp-med) {
    width: 90%;
  }
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

.info {
  margin-top: 0.2rem;
}

.price {
  font-weight: 700;
  margin-top: 0.4rem;
}
</style>
