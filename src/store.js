import { createStore } from "vuex";

export const store = createStore({
  state: {
    cart: {},
  },
  mutations: {
    ADD_TO_CART(state, productId) {
      console.log("in mutation", productId);
      if (state.cart[productId]) {
        state.cart[productId] += 1;
      } else {
        state.cart[productId] = 1;
      }
    },
  },
});
