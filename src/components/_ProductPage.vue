<script>
import productService from '../services/products';
import Button from './BaseButton.vue';
import ImageFlipper from './ImageGalleryFlipper.vue';
import DeliveryInfo from './DevilveryInfo.vue';

import formatter from '../services/priceFormatter';

export default {
  data() {
    return {
      product: null,
    };
  },
  methods: {
    getImgUrl(pic) {
      return require('../images/' + pic);
    },
    addToCart() {
      if (this.canAddMore) {
        this.$store.commit('ADD_TO_CART', this.product.id);
      }
    },
    formatCamelcase(input) {
      return input.replace(/([a-z])([A-Z])/g, '$1 $2');
    },
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    formattedPrice() {
      return formatter.format(this.product.price);
    },
    inCart() {
      return this.cart[this.product.id] || 0;
    },
    canAddMore() {
      return this.inCart < this.product.details.inStock;
    },
  },
  components: { Button, ImageFlipper, DeliveryInfo },
  mounted() {
    productService
      .getProduct(this.$route.params.id)
      .then((result) => (this.product = result));
  },
};
</script>

<template>
  <div
    v-if="product != null"
    class="bgSecColor wrapper minVH75 compensateForHeader"
  >
    <div class="sizeContainer">
      <div class="flexSimpleGrid">
        <div class="imageContainer">
          <ImageFlipper :images="product.images"> </ImageFlipper>
        </div>
        <div class="productInfo">
          <div class="mainTitle">{{ product.name }}</div>
          <div class="price">{{ formattedPrice }}</div>
          <div class="buttonContainer">
            <Button
              @click="addToCart()"
              :textColor="'var(--mainText)'"
              :backColor="'var(--mainBackground)'"
              :activated="canAddMore"
              >Add to Cart</Button
            >
            <transition name="fade">
              <div v-if="inCart > 0" class="counter">
                {{ inCart }}
              </div></transition
            >
          </div>
        </div>
      </div>
      <div class="flexSimpleGrid bottomSection">
        <div class="deliveryStatus"><DeliveryInfo></DeliveryInfo></div>
        <table class="specs">
          <tr :key="name" v-for="(value, name) in product.details">
            <td>
              {{ formatCamelcase(name) }}
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
  color: var(--secondaryText);
}

.wrapper {
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -1rem;
}

.bottomSection {
  margin-top: 5rem;
  @media (max-width: $bp-med) {
    flex-direction: column-reverse;
  }
  padding-bottom: 3rem;
}
.specs {
  border-collapse: collapse;
  margin: 0 2rem;
  text-transform: capitalize;

  tr:not(:last-of-type) {
    td {
      border-bottom: 0.1rem solid var(--mainBackgroundLight);
    }
  }
  & td {
    padding: 1.3rem;
    @media (max-width: $bp-med) {
      border-bottom: 0.1rem solid var(--mainBackgroundLight);
    }
  }
}

.deliveryStatus {
  width: 40%;
  border-right: 1px solid white;
  @media (max-width: $bp-med) {
    width: 100%;
    width: 90%;
    text-align: center;
    border: none;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
}

.price {
  font-weight: 100;
  font-size: 5rem;
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
    text-align: center;
    margin-left: 0;
    align-items: center;
    width: 80%;
  }

  .mainTitle {
    transition: 0.4s all;
    font-weight: 600;
    font-size: 5rem;
    line-height: 5.5rem;
    margin-top: 1rem;
  }
}

.buttonContainer {
  margin-top: 2rem;
  display: flex;
}

.counter {
  background-color: var(--mainBackground);
  color: var(--mainText);
  width: 5rem;
  margin-left: 1rem;
  border-radius: 0.25rem;
  font-weight: 300;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
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
