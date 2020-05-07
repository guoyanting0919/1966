import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Driver from "../views/Driver.vue";
import DriverDetail from "../views/DriverDetail.vue";
import Convoy from "../views/Convoy.vue";
import ConvoyDetail from "../views/ConvoyDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "Home",
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
    children: [
      {
        path: "Driver",
        name: "Driver",
        component: Driver,
      },
      {
        path: "Driver/:id",
        name: "DriverDetail",
        component: DriverDetail,
      },
      {
        path: "Convoy",
        name: "Convoy",
        component: Convoy,
      },

      {
        path: "Convoy/:id",
        name: "ConvoyDetail",
        component: ConvoyDetail,
      },
    ],
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
