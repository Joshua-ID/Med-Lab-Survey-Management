import { createRouter, createWebHistory } from "vue-router";

// Import Views
import Login from "../views/AuthLogin.vue";
import Register from "../views/Register.vue";
import Dashboard from "../views/Dashboard.vue";
import AdminPanel from "../views/AdminPanel.vue";

const routes = [
  { path: "/", redirect: "/auth-login" },
  { path: "/auth-login", component: Login },
  { path: "/register", component: Register },
  {
    path: "/dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: "/admin",
    component: AdminPanel,
    meta: { requiresAuth: true, requiresAdmin: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.meta.requiresAuth;
  const requiresAdmin = to.meta.requiresAdmin;
  const user = JSON.parse(localStorage.getItem("user")); // ✅ Get user from localStorage

  if (requiresAuth && !user) {
    next("/auth-login"); // Redirect to login if not authenticated
  } else if (requiresAdmin && (!user || user.role !== "admin")) {
    next("/dashboard"); // Redirect non-admin users to dashboard
  } else {
    next(); // Allow navigation
  }
});

export default router;
