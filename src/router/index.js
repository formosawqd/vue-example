import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/home" }, // 访问根路径时重定向到 /home
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login/Login.vue"),
  },
  {
    path: "/welcome",
    name: "Welcome",
    component: () =>
      import(/* webpackChunkName: "Welcome" */ "../views/welcome/Welcome.vue"),
  },
];
const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = sessionStorage.getItem("token");
  console.log(to);

  if (!isLoggedIn && to.path !== "/login") {
    next("/login"); // 未登录时重定向到登录页
  } else {
    if (!isLoggedIn && to.path == "/welcome") {
      debugger;
      next("/welcome");
    } else {
      debugger;
      next(); // 正常访问
    }
  }
});

export const loadDynamicRoutes = (routes) => {
  routes.forEach((route) => {
    const component = () =>
      import(
        `@/views/${route.name.toLocaleLowerCase()}/${route.component}.vue`
      );
    router.addRoute({
      ...route,
      component,
    });
  });
};

export default router;
