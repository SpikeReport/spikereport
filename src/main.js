import Vue from "vue";
// Bootstrap to make it look nicer
import 'bootstrap/dist/css/bootstrap.css'
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
