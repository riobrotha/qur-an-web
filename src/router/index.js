import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NProgress from "nprogress";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      alias: "/surat",
      component: HomeView,
    },
    {
      path: "/surat/:id",
      name: "surat",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/SuratDetailView.vue"),
    },
  ],
  scrollBehavior: function (to, from, savedPositions) {
    window.scrollTo = {
      x: 0,
    };
  },
});

NProgress.configure({ easing: "ease-in-out", speed: 400, showSpinner: false });

router.beforeResolve((to, from, next) => {
  if (to.path) {
    NProgress.start();
  }

  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
