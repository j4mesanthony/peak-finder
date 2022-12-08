/* eslint-disable no-unused-vars */
import { defineStore } from "pinia";
import { ref } from "vue";

export const useRootStore = defineStore("root", () => {
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

// export const useRootStore = defineStore("root", {
// Options API version -
//   state: () => ({
//     isUserLoggedIn: false,
//   }),

//   getters: {},
//   actions: {
//     toggleLogin(data) {
//       this.isUserLoggedIn = data;
//     },
//   },
// });
