<script>
import CartItem from "./CartItem.vue";
import BaseButton from "./BaseButton.vue";
import CheckoutForm from "./CheckoutForm.vue";

import productService from "../services/products";

import formatter from "../services/priceFormatter";

export default {
  data() {
    return {
      fetchedItems: {},
    };
  },
  computed: {
    cartContent() {
      return this.$store.state.cart;
    },
    cartIds() {
      return Object.keys(this.cartContent);
    },
    totalPrice() {
      let price = 0;
      for (const id of this.cartIds) {
        if (this.fetchedItems[id]) {
          price +=
            Number(this.fetchedItems[id].price) * Number(this.cartContent[id]);
        }
      }
      return formatter.format(price);
    },
  },
  watch: {
    cartIds: {
      immediate: true,
      handler() {
        const promises = this.cartIds.map((id) =>
          productService
            .getProduct(id)
            .then((val) => (this.fetchedItems[val.id] = val))
        );
      },
    },
  },
  components: { CartItem, BaseButton, CheckoutForm },
};
</script>

<template>
  <div class="sizeContainer padding2">
    <div class="cartHeader">CART</div>
    <div class="flexSimpleGrid">
      <div class="items">
        <template :key="id" v-for="id in cartIds">
          <CartItem
            v-if="fetchedItems[id]"
            :product="fetchedItems[id]"
            :number="cartContent[id]"
          ></CartItem>
          <div class="splitter"></div>
        </template>
      </div>
      <div class="totals">
        <div class="totalTitle">Total:</div>
        <div class="price">{{ totalPrice }}</div>
        <BaseButton
          textColor="var(--mainText)"
          backColor="var(--mainBackground)"
          >CHECKOUT</BaseButton
        >
      </div>
    </div>

    <div class="cartHeader">CHECKOUT</div>
    <CheckoutForm></CheckoutForm>
  </div>
</template>

<style lang="scss" scoped>
* {
  color: black;
}

.items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

.items > .splitter:not(:last-child) {
  width: 100%;
  border-bottom: 1px solid black;
  margin: 0.75rem 0;
  justify-content: center;
}

.cartHeader {
  margin-top: 3rem;
  margin-bottom: 5rem;
  font-size: 5rem;
  text-align: center;
  font-weight: 300;
}

.padding2 {
  padding-bottom: 6rem;
}

.totals {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.totalTitle {
  font-size: 4rem;
  font-weight: 700;
}

.price {
  font-weight: 300;
  font-size: 5rem;
  margin-bottom: 1.5rem;
}
</style>
