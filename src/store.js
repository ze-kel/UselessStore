import { createStore } from "vuex";

export const store = createStore({
  state: {
    cart: {
      2: 4,
      1: 1,
    },
  },
  mutations: {
    ADD_TO_CART(state, id) {
      console.log("mutation");
      if (state.cart[id]) {
        state.cart[id] += 1;
      } else {
        state.cart[id] = number;
      }
    },
  },
});
