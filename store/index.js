import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import modules from "./modules/";

Vue.use(Vuex);

const store = () => {
  return new Vuex.Store({
    state: {},
    modules,
    plugins: [
      createPersistedState({
        storage: window.sessionStorage,
      }),
    ],
  });
};

export default store;
