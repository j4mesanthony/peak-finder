import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from "../components/views/HomePage.vue";
import ViewByArea from "../components/views/ViewByArea.vue";
import WebResources from "../components/views/WebResources.vue";

export default createRouter({
  history: createWebHashHistory(),

  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
      meta: {
        isRootLevel: true,
      },
    },

    {
      path: "/areas",
      name: "Areas",
      component: ViewByArea,
      meta: {
        isRootLevel: true,
      },
    },

    {
      path: "/resources",
      name: "Resources",
      component: WebResources,
      meta: {
        isRootLevel: true,
      },
    },
  ],
});
