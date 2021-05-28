<script>
import productService from "../services/products";
import Button from "./BaseButton.vue";
import ImageFlipper from "./ImageGalleryFlipper.vue";

export default {
  data() {
    return {
      product: null,
    };
  },
  methods: {
    getImgUrl(pic) {
      return require("../images/" + pic);
    },
    addToCart() {
      this.$store.commit("ADD_TO_CART", this.product);
    },
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  components: { Button, ImageFlipper },
  mounted() {
    productService
      .getProduct(this.$route.params.id)
      .then((result) => (this.product = result));
  },
};
</script>

<template>
  <div v-if="product != null" class="bgMainColor wrapper">
    <div class="sizeContainer">
      <div class="flexSimpleGrid">
        <div class="imageContainer">
          <ImageFlipper :images="product.images"> </ImageFlipper>
        </div>
        <div class="productInfo">
          <div class="mainTitle">{{ product.name }}</div>
          <div class="price">{{ product.price }} ₽</div>
          <Button
            @click="addToCart()"
            :textColor="'var(--secondaryText)'"
            :backColor="'white'"
            >Add to Cart</Button
          >
        </div>
      </div>
      <div class="flexSimpleGrid marginTop2">
        <div class="deliveryStatus">DEL</div>
        <table class="specs">
          <tr :key="name" v-for="(value, name) in product.details">
            <td>
              {{ name }}
            </td>
            <td>
              {{ value }}
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  color: var(--mainText);
}

.wrapper {
  padding-bottom: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.marginTop2 {
  margin-top: 2rem;
}
.specs {
  border-collapse: collapse;

  margin: 0 2rem;

  & td {
    border-top: 0.1rem solid var(--secondaryBackgroundLight);
    padding: 1rem;
  }
}

.deliveryStatus {
  width: 40%;
  background-color: red;
  @media (max-width: $bp-med) {
    margin-top: 2rem;
    width: 90%;
    text-align: center;
  }
}

.price {
  font-weight: 200;
  font-size: 4rem;
  margin-top: 1rem;
}

img {
  width: 100%;
  height: 100%;
}

.imageContainer {
  margin-top: 1rem;
}

.productInfo {
  margin-top: 4rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  font-size: 1.3rem;

  margin-left: 5rem;
  @media (max-width: $bp-med) {
    margin-left: 0;
    align-items: center;
    width: 60%;
  }

  .mainTitle {
    transition: 0.4s all;
    font-weight: 600;
    font-size: 5rem;
    line-height: 5.5rem;
    margin-top: 1rem;
  }

  .button {
    margin-top: 2rem;
  }
}

.image {
  transition: 0.4s all;
  object-position: center;
  object-fit: contain;
  @media (max-width: $bp-med) {
    height: 45%;
  }
}
</style>
