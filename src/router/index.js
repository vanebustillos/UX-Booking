import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LoyaltyPage from "../views/LoyaltyProgram.vue"
import Hospedaje from "../views/Hospedaje.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/ProgramaDeFidelidad",
    name: "LoyaltyPage",
    component: LoyaltyPage,
  },
  {
    path: "/Hospedaje",
    name: "Hospedaje",
    component: Hospedaje,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
