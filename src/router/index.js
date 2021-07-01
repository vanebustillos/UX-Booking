import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LoyaltyPage from "../views/LoyaltyProgram.vue";
import ThingToDo from "../views/ThingToDo.vue";
import Hospedaje from "../views/Lodgement.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/loyaltyProgram",
    name: "LoyaltyPage",
    component: LoyaltyPage,
  },
  {
    path: "/thing-to-do",
    name: "ThingToDo",
    component: ThingToDo,
  },
  {
    path: "/lodgement",
    name: "Lodgement",
    component: Hospedaje,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
