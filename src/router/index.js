import Vue from "vue";
import VueRouter from "vue-router";
import { routeList } from "./routes";
import { isLogin } from "@/utils/index";
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
  {
    path: "*", // 捕获所有未匹配到的路由
    component: () =>
      import(/* webpackChunkName: "intro" */ "../views/NotFound.vue"), // 404 页面
  },
  // ...routeList,
];
const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  console.log("加载了router.beforeEach");
  console.log("是否登录:", isLogin());
  console.log("目标路径:", to.path);

  if (!isLogin() && to.path !== "/login") {
    // 用户未登录，且目标路径不是登录页，跳转到登录页
    console.log("未登录，跳转到登录页");
    return next("/login");
  }

  if (isLogin() && (to.path === "/login" || to.path === "/intro")) {
    // 已登录用户访问登录页或欢迎页，跳转到主页
    console.log("已登录用户，重定向到主页");
    return next("/home");
  }

  // 其他情况放行
  console.log("放行目标路径");
  next();
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
        // 这里的异步加载组件得注意写法，如果全是变量，好像就不行，
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
    // 这里是直接把新的home组件，覆盖了之前的home组件，addRoute好像只能添加最外层的路由，如果要添加子路由，就要自己找到对应的路由，操作children
    router.addRoute(homeRoute); // 更新路由
  }
};

export default router;
