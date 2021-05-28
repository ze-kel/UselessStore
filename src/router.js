import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/_Home.vue";
import Explore from "./components/_Catalog.vue";
import About from "./components/_About.vue";
import ProductPage from "./components/_ProductPage.vue";
import Cart from "./components/_Cart.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
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
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
