import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import JobOfferView from "../views/JobOfferView"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/offer/:offerId",
    name: "JobOffer",
    component: JobOfferView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
