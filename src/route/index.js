import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/supplier",
  },
  {
    path: "/supplier",
    name: "Supplier",
    component: () => import("@/src/views/supplier/supplierFirst.vue"),
    redirect: "/supplier/supplierFirst",
    children: [
      {
        path: "supplierFirst",
        name: "supplierFirst",
        component: () => import("@/src/views/supplier/supplierFirst.vue"),
      },
      {
        path: "supplierSecond",
        name: "supplierSecond",
        component: () => import("@/src/views/supplier/supplierSecond.vue"),
      },
      {
        path: "supplierThird",
        name: "supplierThird",
        component: () => import("@/src/views/supplier/supplierThird.vue"),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
