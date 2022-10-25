import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from "../components/views/HomePage.vue";
import ViewByArea from "../components/views/ViewByArea.vue";

export default createRouter({
  history: createWebHashHistory(),

  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },

    {
      path: "/areas",
      name: "Areas",
      component: ViewByArea,
    },
  ],
});
