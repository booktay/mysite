import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Layout from "@/views/layouts/Layout.vue";
import Home from "@/views/Home.vue";
import Path from "@/views/Path.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        component: Home,
        name: "Home",
        meta: { title: "Home" }
      }
    ]
  },
  {
    path: "/path",
    component: Layout,
    children: [
      {
        path: "/path",
        component: Path,
        name: "Path",
        meta: { title: "Path" }
      },
      {
        path: "/resume",
        component: Path,
        name: "Resume",
        meta: { title: "Download Resume" }
      },
      {
        path: "/hireme",
        component: Path,
        name: "Hireme",
        meta: { title: "Hire Me" }
      }
    ]
  }
];

export default new VueRouter({
  routes: routes
});
