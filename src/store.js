import { createStore } from "vuex";

export const store = createStore({
  state: {
    products: {},
    testData: "TETETETETETETET",
  },
  mutations: {
    ADD_PRODUCTS(state, products) {
      products.map((product) => (state.products[product.id] = product));
      console.log("NEW STATE", state.products);
    },
  },
});
