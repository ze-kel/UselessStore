<script>
import CartItem from "./CartItem.vue";

import productService from "../services/products";

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
      for (const item of Object.entries(this.fetchedItems)) {
        console.log("item price", Number(item[1].price));
        price += Number(item[1].price) * Number(this.cartContent[item[1].id]);
      }
      return price;
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
  components: { CartItem },
};
</script>

<template>
  <div class="sizeContainer padding2">
    <div class="cartHeader">CART</div>
    <div class="flexSimpleGrid">
      <div class="items">
        <CartItem
          :key="item[0]"
          :product="item[1]"
          :number="cartContent[item[0]]"
          v-for="item in Object.entries(fetchedItems)"
        ></CartItem>
      </div>
      <div class="totals">{{ totalPrice }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  color: black;
}

.cartHeader {
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 5rem;
  text-align: center;
  font-weight: 300;
}

.padding2 {
  padding-bottom: 6rem;
}
</style>
