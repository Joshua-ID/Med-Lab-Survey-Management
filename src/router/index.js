import { createRouter, createWebHistory } from "vue-router";

// Import Views
import Login from "../views/AuthLogin.vue";
import Register from "../views/Register.vue";
import Dashboard from "../views/Dashboard.vue";
import AdminPanel from "../views/AdminPanel.vue";
import NotFoundPage from "../views/NotFoundPage.vue";

const routes = [
  // login
  { path: "/", redirect: "/auth-login" },
  { path: "/auth-login", component: Login },
  { path: "/register", component: Register },

  // dashboard
  {
    path: "/dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: "/admin",
    component: AdminPanel,
  },

  // pages
  {
    path: "/patient",
    component: () => import("../views/PatientControl.vue"),
  },
  {
    path: "/view-staff",
    component: () => import("../views/StaffUsers.vue"),
  },
  {
    path: "/view-doctor",
    component: () => import("../views/DoctorsView.vue"),
  },
  {
    path: "/admin-users",
    component: () => import("../views/AdminUsers.vue"),
  },

  // 404 page
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (to.meta.requiresAuth && !user) {
    next("/auth-login");
  } else if (to.meta.requiresAdmin && user.role !== "admin") {
    next("/dashboard");
  } else {
    next();
  }
});

export default router;
