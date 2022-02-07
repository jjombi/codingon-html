import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter); // vue 에서 vue router 를 사용하기 위해 알려줘야합니다.

const router = new VueRouter({
  mode: "history", // browser history mode 를 사용합니다.
  routes: [{ path: "/", component: "" }] // path 별 component 를 추가합니다.
});

export default router;
