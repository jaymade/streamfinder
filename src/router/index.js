import { createRouter, createWebHistory } from "vue-router";
import SearchView from "../views/SearchView.vue";
import SubscriptionsView from "../views/SubscriptionsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: SearchView },
    { path: "/subscriptions", component: SubscriptionsView },
  ],
});

export default router;
