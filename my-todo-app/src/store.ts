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
      document.body.setAttribute("data-theme", state.theme);
    },
  },
  actions: {
    initTheme() {
      const savedTheme = localStorage.getItem("theme") || "light";
      document.body.setAttribute("data-theme", savedTheme);
    },
  },
  getters: {
    currentTheme: (state) => state.theme,
  },
});
