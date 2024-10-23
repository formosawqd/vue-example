import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/tree",
    name: "tree",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/tree/index.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
