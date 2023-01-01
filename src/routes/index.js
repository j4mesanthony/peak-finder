import { createRouter, createWebHistory } from "vue-router";

// TODO: Use index file (index.views?)
import HomePage from "../components/views/HomePage.vue";
import ViewByArea from "../components/views/ViewByArea.vue";
import WebResources from "../components/views/WebResources.vue";
import ApiPlayground from "../components/views/ApiPlayground.vue";

export default createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
      meta: {
        isRootLevel: true,
        icon: "explore",
      },
    },

    {
      path: "/areas",
      name: "Areas",
      component: ViewByArea,
      meta: {
        isRootLevel: true,
        icon: "landscape",
      },
    },

    {
      path: "/resources",
      name: "Resources",
      component: WebResources,
      meta: {
        isRootLevel: true,
        icon: "map",
      },
    },

    {
      path: "/apiPlayground",
      name: "API",
      component: ApiPlayground,
      meta: {
        isRootLevel: true,
        icon: "cloud_download",
      },
    },
  ],
});
