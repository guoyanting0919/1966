import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Driver from "../views/Driver.vue";
import DriverDetail from "../views/DriverDetail.vue";
import Convoy from "../views/Convoy.vue";
import ConvoyDetail from "../views/ConvoyDetail.vue";
import North from "../views/North.vue";
import NorthHome from "../views/NorthHome.vue";
import South from "../views/South.vue";
import SouthHome from "../views/SouthHome.vue";

import East from "../views/East.vue";
import EastHome from "../views/EastHome.vue";

import Central from "../views/Central.vue";
import CentralHome from "../views/CentralHome.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    component: Home,
    redirect: "Home",
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
    path: "/North",
    name: "NorthHome",
    component: North,
    children: [
      {
        path: "",
        name: "North",
        component: NorthHome,
      },
      {
        path: "Driver/:id",
        name: "NorthDriverDetail",
        component: DriverDetail,
      },
    ],
  },
  {
    path: "/South",
    name: "SouthHome",
    component: South,
    children: [
      {
        path: "",
        name: "South",
        component: SouthHome,
      },
      {
        path: "Driver/:id",
        name: "SouthDriverDetail",
        component: DriverDetail,
      },
    ],
  },
  {
    path: "/East",
    name: "EastHome",
    component: East,
    children: [
      {
        path: "",
        name: "East",
        component: EastHome,
      },
      {
        path: "Driver/:id",
        name: "EastDriverDetail",
        component: DriverDetail,
      },
    ],
  },
  {
    path: "/Central",
    name: "CentralHome",
    component: Central,
    children: [
      {
        path: "",
        name: "Central",
        component: CentralHome,
      },
      {
        path: "Driver/:id",
        name: "CentralDriverDetail",
        component: DriverDetail,
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
