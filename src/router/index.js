import Vue from "vue";
import VueRouter from "vue-router";
import { routeList } from "./routes";
import { name } from "@/views/cjs";
Vue.use(VueRouter);
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push;
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
const routes = [
  {
    path: "/home",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/home/home.vue"),
    children: [],
  }, // 访问根路径时重定向到 /home
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

// Dynamic Import Function
const loadComponent = (route) => () =>
  import(`@/views/${route.name.toLocaleLowerCase()}/${route.component}.vue`); // Adjust the path as per your structure

// Function to Transform Routes
const transformRoutes = (routes) => {
  return routes.map((route) => {
    const transformedRoute = {
      path: route.path,
      name: route.name,
      component: loadComponent(route),
      meta: route.meta || {},
      children: route.children ? transformRoutes(route.children) : undefined,
    };
    return transformedRoute;
  });
};

// Add Routes Dynamically
export const addDynamicRoutes = (backendRoutes) => {
  const transformedRoutes = transformRoutes(backendRoutes);
  console.log("transformedRoutes", transformedRoutes);
  router.options.routes.forEach((el) => {
    if (el.name == "Home") {
      el.children.push(transformedRoutes);
    }
  });
  // transformedRoutes.forEach((route) => {
  //   console.log(router);
  //   if (condition) {

  //   }
  //   router.addRoute("home", route);
  //   // router.addRoute(route); // Add route to the router
  // });
  console.log(router);

  const routeNameList = router.getRoutes();
  console.log("routeNameList", routeNameList);
};

export default router;
