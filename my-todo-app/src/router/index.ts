import Vue from "vue";
import VueRouter from "vue-router";
import TodoPage from "../pages/TodoPage.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/todo",
    name: "Todo",
    component: TodoPage,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
