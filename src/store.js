import { createStore } from "vuex";

export const store = createStore({
  state: {
    cart: {},
  },
  mutations: {
    ADD_TO_CART(state, id) {
      if (state.cart[id]) {
        state.cart[id] += 1;
      } else {
        state.cart[id] = 1;
      }

      localStorage.setItem("cartState", JSON.stringify(state.cart));
    },
    MODIFY_QUANTITY(state, payload) {
      state.cart[payload.id] += Number(payload.add);
      localStorage.setItem("cartState", JSON.stringify(state.cart));
    },
    DELETE_FROM_CART(state, id) {
      delete state.cart[id];
      localStorage.setItem("cartState", JSON.stringify(state.cart));
    },
    INIT_STORE(state) {
      console.log("init");
      if (localStorage.getItem("cartState")) {
        state.cart = JSON.parse(localStorage.getItem("cartState"));
      }
    },
  },
});
