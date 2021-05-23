import { createWebHistory, createRouter } from "vue-router";
import Home from "./Home.vue";
import Explore from "./Explore.vue";
import About from "./About.vue";
import ProductPage from "./ProductPage.vue";

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
