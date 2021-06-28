import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import ThingToDo from "../views/ThingToDo.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
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
