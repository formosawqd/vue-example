import Vue from "vue";
import VueRouter from "vue-router";
import { routeList } from "./routes";
Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/home" }, // 访问根路径时重定向到 /home
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login/Login.vue"),
  },
  // ...routeList,
];
const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!sessionStorage.getItem("token"); // 判断是否有登录标识（如 token）

  if (to.meta.requiresAuth && !isAuthenticated) {
    // 如果目标路由需要登录且用户未登录
    next("/login"); // 跳转到登录页
  } else if (to.path === "/login" && isAuthenticated) {
    // 如果用户已登录，防止访问登录页或欢迎页
    next("/home");
  } else {
    next(); // 放行
  }
});

export const loadDynamicRoutes = (routes) => {
  const routeNameList = router.getRoutes().map((el) => el.name); //这里非得这样才能查询到目前存在的路由  router.options.routes 看不到动态添加的路由
  routes.forEach((route) => {
    if (routeNameList.includes(route.name)) {
      //如果已经加了路由了，就不需要再添加了
      return;
    }
    const component = () =>
      import(
        `@/views/${route.name.toLocaleLowerCase()}/${route.component}.vue`
      );
    // 这里就是动态的添加路由
    router.addRoute({
      ...route,
      component,
    });
  });
};

export default router;
