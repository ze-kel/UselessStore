import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/_Home.vue";
import Explore from "./components/_Catalog.vue";
import About from "./components/_About.vue";
import ProductPage from "./components/_ProductPage.vue";
import Cart from "./components/_Cart.vue";
import OrderSuccess from "./components/_OrderSuccess.vue";

const routes = [
  {
    path: "/explore",
    name: "Explore",
    component: Explore,
  },
  {
    path: "/products/:id",
    name: "ProductPage",
    component: ProductPage,
  },

  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/cart/success",
    name: "Order Success",
    component: OrderSuccess,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
