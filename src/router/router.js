import { createWebHistory, createRouter } from "vue-router";
import Intro from "../components/Intro.vue";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";

const routes = [
  {
    path: "/",
    component: Intro,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
