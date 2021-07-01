import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LoyaltyPage from "../views/LoyaltyProgram.vue";
import ThingToDo from "../views/ThingToDo.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/LoyaltyProgram",
    name: "LoyaltyPage",
    component: LoyaltyPage,
  },
  {
    path: "/thing-to-do",
    name: "ThingToDo",
    component: ThingToDo,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
