import Vue from "vue";
import VueRouter from "vue-router";
import { routeList } from "./routes";
Vue.use(VueRouter);
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push;
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
const routes = [
  {
    path: "/",
    redirect: "/intro",
  }, // 访问根路径时重定向到 /home
  {
    path: "/home",
    name: "Home",
    // redirect: "/home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/home/home.vue"),
    children: [],
  }, // 访问根路径时重定向到 /home
  {
    path: "/intro",
    name: "intro",
    component: () =>
      import(/* webpackChunkName: "intro" */ "../views/intro/intro.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login/Login.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () =>
      import(/* webpackChunkName: "test" */ "../views/test/index.vue"),
  },
  // ...routeList,
];
const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  // console.log("beforeEach", to);

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

// Dynamic Import Function
// const loadComponent = (route) => import("@/views" + route.component + ".vue");
// Function to Transform Routes
const transformRoutes = (routes) => {
  return routes.map((route) => {
    const transformedRoute = {
      path: route.path,
      name: route.name,
      component: () =>
        import("@/views/" + route.folder + "/" + route.file + ".vue"), // 这里非得用+拼接才正常
      meta: route.meta || {},
      children: route.children ? transformRoutes(route.children) : undefined,
    };
    return transformedRoute;
  });
};

// Add Routes Dynamically
export const addDynamicRoutes = (backendRoutes) => {
  const transformedRoutes = transformRoutes(backendRoutes);
  const homeRoute = router.options.routes.find((route) => route.name == "Home");
  if (homeRoute && !homeRoute.children?.length) {
    homeRoute.children = [...homeRoute.children, ...transformedRoutes];
    router.addRoute(homeRoute); // 更新路由
  }
};

export default router;
