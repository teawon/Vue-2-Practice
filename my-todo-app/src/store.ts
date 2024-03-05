// store.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

interface ThemeState {
  theme: "light" | "dark";
}

export default new Vuex.Store<ThemeState>({
  state: {
    theme: "light",
  },
  mutations: {
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.theme);
    },
  },
  actions: {
    initTheme({ commit }) {
      const savedTheme = localStorage.getItem("theme") || "light";
      commit("toggleTheme", savedTheme);
    },
  },
  getters: {
    currentTheme: (state) => state.theme,
  },
});
