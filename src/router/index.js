import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/logging",
    name: "Logging",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "logging" */ "../views/logging/index.vue")
  },
  {
    path: "/3DMap",
    name: "3DMap",
    component: () =>
      import(/* webpackChunkName: "3DMap" */ "../views/3DMap/index.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
