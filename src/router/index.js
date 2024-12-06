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
  // console.log("beforeEach", to);

  const isAuthenticated = !!sessionStorage.getItem("token"); // 判断是否有登录标识（如 token）
  console.log("isAuthenticated", isAuthenticated);
  console.log("to.path", to.path);

  if (to.meta.requiresAuth && !isAuthenticated) {
    // 如果目标路由需要登录且用户未登录
    next("/login"); // 跳转到登录页
  } else if (isAuthenticated) {
    // 如果用户已登录，防止访问登录页或欢迎页
    if (to.path === "/login") {
      next("/home");
    } else if (to.path === "/intro") {
      next("/home");
    } else {
      next(); // 放行
    }
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
