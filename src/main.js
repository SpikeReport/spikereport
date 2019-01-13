import Vue from "vue";
// Bootstrap to make it look nicer
import 'bootstrap/dist/css/bootstrap.css'
// Google maps for autocomplete feature
import * as VueGoogleMaps from 'vue2-google-maps'
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(VueGoogleMaps, {
  load: {
    key: '', // delete before git commits
    libraries: 'places,drawing,visualization'
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
