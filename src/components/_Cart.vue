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
      checkoutSeen: false,
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
    cartEmpty() {
      return this.cartIds.length == 0;
    },
  },
  methods: {
    showCheckout() {
      this.checkoutSeen = !this.checkoutSeen;
    },
    redirectToShop() {
      this.$router.push("/explore");
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
  <div class="sizeContainer paddingBot minVH75 compensateForHeader">
    <div class="sectionTitle">CART</div>
    <div v-if="cartEmpty" class="emptyInfo">
      <div class="emptyHeading">Cart is empty</div>
      <div>
        <BaseButton
          @click="redirectToShop"
          textColor="var(--secondaryText)"
          backColor="var(--secondaryBackground)"
          >GO SHOPPING</BaseButton
        >
      </div>
    </div>
    <div v-else class="flexSimpleGrid">
      <div class="items">
        <template :key="id" v-for="id in cartIds">
          <CartItem
            v-if="fetchedItems[id]"
            :product="fetchedItems[id]"
            :number="cartContent[id]"
            :active="!checkoutSeen"
          ></CartItem>
          <div class="splitter"></div>
        </template>
      </div>
      <div class="totals">
        <div class="totalTitle">Total:</div>
        <div class="price">{{ totalPrice }}</div>
        <BaseButton
          @click="showCheckout"
          textColor="var(--secondaryText)"
          backColor="var(--secondaryBackground)"
        >
          {{ checkoutSeen ? "EDIT ORDER" : "PLACE ORDER" }}</BaseButton
        >
      </div>
    </div>
    <div :class="checkoutSeen ? '' : 'hide'" class="checkout">
      <div class="sectionTitle">CHECKOUT</div>
      <CheckoutForm></CheckoutForm>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hide {
  display: none;
}

.emptyInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.emptyHeading {
  font-size: 4rem;
  margin-bottom: 3rem;
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

.paddingBot {
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

.checkout {
  max-width: 50rem;
  margin: 0 auto;
}
</style>
