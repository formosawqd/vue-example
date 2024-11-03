import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/home/Home.vue"),
  },

  {
    path: "/upload",
    name: "upload",
    component: () =>
      import(/* webpackChunkName: "upload" */ "../views/upload/upload.vue"),
  },
  {
    path: "/parent",
    name: "parent",
    component: () =>
      import(/* webpackChunkName: "parent" */ "../views/parent/parent.vue"),
  },
  {
    path: "/child",
    name: "child",
    component: () =>
      import(/* webpackChunkName: "child" */ "../views/parent/child.vue"),
  },
  {
    path: "/debounce",
    name: "debounce",
    component: () =>
      import(
        /* webpackChunkName: "debounce" */ "../views/debounce/debounce.vue"
      ),
  },
  {
    path: "/Login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/login/Login.vue"),
  },
  {
    path: "/protected",
    name: "protected",
    component: () =>
      import(/* webpackChunkName: "protected" */ "../components/Protected.vue"),
  },
  {
    path: "/table",
    name: "table",
    component: () => import(/* webpackChunkName: "form  " */ "../views/Table"),
    path: "/tableSel",
    name: "tableSel",
    component: () =>
      import(
        /* webpackChunkName: "tableSel" */ "../views/TableSelect/index.vue"
      ),
  },
  {
    path: "/singleSelect",
    name: "singleSelect",
    component: () =>
      import(
        /* webpackChunkName: "singleSelect" */ "../views/TableSelect/singleSelect.vue"
      ),
  },
  {
    path: "/singleSelect1",
    name: "singleSelect1",
    component: () =>
      import(
        /* webpackChunkName: "singleSelect" */ "../views/TableSelect/singleSelect1.vue"
      ),
  },
  {
    path: "/merge",
    name: "merge",
    component: () =>
      import(
        /* webpackChunkName: "singleSelect" */ "../views/tableMerge/index.vue"
      ),
  },
  {
    path: "/tree",
    name: "tree",
    component: () =>
      import(/* webpackChunkName: "singleSelect" */ "../views/tree/index.vue"),
  },
  {
    path: "/props",
    name: "props",
    component: () =>
      import(
        /* webpackChunkName: "singleSelect" */ "../views/props/parent.vue"
      ),
  },
  {
    path: "/edittable",
    name: "edittable",
    component: () =>
      import(
        /* webpackChunkName: "singleSelect" */ "../views/editTable/editTable.vue"
      ),
  },
  {
    path: "/pubu",
    name: "pubu",
    component: () =>
      import(/* webpackChunkName: "singleSelect" */ "../views/pubu/index.vue"),
  },
  {
    path: "/cjs",
    name: "cjs",
    component: () =>
      import(/* webpackChunkName: "singleSelect" */ "../views/cjs/index.vue"),
  },
  {
    path: "/esm",
    name: "esm",
    component: () =>
      import(/* webpackChunkName: "singleSelect" */ "../views/esm/index.vue"),
  },
  {
    path: "/testantd",
    name: "testantd",
    component: () =>
      import(
        /* webpackChunkName: "singleSelect" */ "../views/testantd/index.vue"
      ),
  },
  {
    path: "/slots",
    name: "slots",
    component: () =>
      import(/* webpackChunkName: "singleSelect" */ "../views/slots/index.vue"),
  },
  {
    path: "/slots2",
    name: "slots2",
    component: () =>
      import(
        /* webpackChunkName: "singleSelect" */ "../views/slots/index1.vue"
      ),
  },
  {
    path: "/apply",
    name: "apply",
    component: () =>
      import(/* webpackChunkName: "singleSelect" */ "../views/apply/index.vue"),
  },
  {
    path: "/call",
    name: "call",
    component: () =>
      import(/* webpackChunkName: "singleSelect" */ "../views/call/index.vue"),
  },
  {
    path: "/tableheightlight",
    name: "tableheightlight",
    component: () =>
      import(
        /* webpackChunkName: "tableheightlight" */ "../views/tableheightlight/index.vue"
      ),
  },
  {
    path: "/attrs",
    name: "attrs",
    component: () =>
      import(/* webpackChunkName: "attrs" */ "../views/attrs/index.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () =>
      import(/* webpackChunkName: "test" */ "../views/test/index.vue"),
  },
  {
    path: "/tablefz1",
    name: "tablefz1",
    component: () =>
      import(/* webpackChunkName: "tablefz1" */ "../views/tablefz/index1.vue"),
  },
  {
    path: "/tablefz2",
    name: "tablefz2",
    component: () =>
      import(/* webpackChunkName: "tablefz2" */ "../views/tablefz/index2.vue"),
  },
  {
    path: "/tree1",
    name: "tree1",
    component: () =>
      import(/* webpackChunkName: "tree" */ "../views/tree1/index.vue"),
  },
  {
    path: "/tree2",
    name: "tree2",
    component: () =>
      import(/* webpackChunkName: "tree" */ "../views/tree2/index.vue"),
  },
  {
    path: "/tree3",
    name: "tree3",
    component: () =>
      import(/* webpackChunkName: "tree" */ "../views/tree3/index.vue"),
  },
  {
    path: "/article",
    name: "article",
    component: () =>
      import(/* webpackChunkName: "tree" */ "../views/article/index.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
