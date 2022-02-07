import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";

Vue.use(VueRouter);

createApp(App).mount('#app')
const router = new VueRouter({
    mode: "history", // browser history mode 를 사용합니다.
    routes: [{ path: "/", component: "" }] // path 별 component 를 추가합니다.
  });
  
  export default router;
  