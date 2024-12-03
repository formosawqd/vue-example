import Vue from "vue";
import VueRouter from "vue-router";
import { routeList } from "./routes";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
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
    console.log(1);
    // 如果目标路由需要登录且用户未登录
    next("/login"); // 跳转到登录页
  } else if (to.path === "/login" && isAuthenticated) {
    console.log(2);
    // 如果用户已登录，防止访问登录页或欢迎页
    next("/home");
  } else {
    console.log(3);
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
  transformedRoutes.forEach((route) => {
    router.addRoute(route); // Add route to the router
  });
};

// Add routes when the app initializes

// export const loadDynamicRoutes = (routes) => {
//   const routeNameList = router.getRoutes().map((el) => el.name); //这里非得这样才能查询到目前存在的路由  router.options.routes 看不到动态添加的路由
//   console.log(routeNameList);

//   routes.forEach((route) => {
//     if (route.children?.length) {
//       loadDynamicRoutes(route.children);
//     }
//     if (routeNameList.includes(route.name)) {
//       //如果已经加了路由了，就不需要再添加了
//       return;
//     }

//     const component = () =>
//       import(
//         `@/views/${route.name.toLocaleLowerCase()}/${route.component}.vue`
//       );
//     // 这里就是动态的添加路由
//     router.addRoute({
//       ...route,
//       component,
//     });
//   });
// };

export default router;
