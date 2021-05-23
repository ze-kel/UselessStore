<template>
  <div class="featureContainer sizeContainer" v-if="product !== null">
    <img class="image" :src="getImgUrl(product.image)" />
    <div class="description">
      <div class="additionalInfo">{{ product.additionalLine }}</div>
      <div class="mainTitle">{{ testdata }} {{ product.title }}</div>
      <div class="subText">
        {{ product.text }}
      </div>
      <Button :textColor="'white'" :backColor="'black'">Add to Cart</Button>
    </div>
  </div>
</template>

<script>
import productService from "../services/products";
import Button from "../components/Button.vue";

export default {
  methods: {
    getImgUrl(pic) {
      return require("../images/" + pic);
    },
  },

  computed: {
    product() {
      if (this.$store.state.products[this.$route.params.id]) {
        return this.$store.state.products[this.$route.params.id];
      } else {
        productService.getProduct(this.$route.params.id);
        return null;
      }
    },
  },
  components: { Button },
};
</script>

<style lang="scss" scoped>
.featureContainer {
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    .image {
      transform: scale(1.025);
    }
  }
}

.description,
.image {
  width: 48%;
  @media (max-width: 768px) {
    width: 90%;
    text-align: center;
  }
}

.description {
  margin-top: 4rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  font-size: 1.3rem;

  margin-left: 5rem;
  &.noLeftMargin {
    margin-left: 0;
  }

  & > * {
    color: var(--secondaryText);
  }

  @media (max-width: 768px) {
    margin-left: 0;
    align-items: center;
    width: 60%;
  }
}

.image {
  transition: 0.4s all;
  object-position: center;
  object-fit: contain;
  @media (max-width: 768px) {
    height: 45%;
  }
}

.mainTitle {
  transition: 0.4s all;
  font-weight: 600;
  font-size: 5rem;
  line-height: 5.5rem;
  margin-top: 1rem;
}

.subText {
  margin-top: 1.5rem;
}

.button {
  margin-top: 2rem;
}

.additionalInfo {
  font-size: 1.5rem;
  font-weight: 100;
  letter-spacing: 1rem;
  text-transform: uppercase;
}
</style>
