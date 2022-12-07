/* eslint-disable no-unused-vars */
import { defineStore } from "pinia";
import { ref } from "vue";

export const useRouteStore = defineStore("root", () => {
  // "Setup" store like Composition API -
  // "ref" as state
  // "computed" as getters
  // "function" as actions

  const isUserLoggedIn = ref(false);

  function toggleLogin(data) {
    isUserLoggedIn.value = data;
  }

  return {
    isUserLoggedIn,
    toggleLogin,
  };
});
