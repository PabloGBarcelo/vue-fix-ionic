import Vue from "vue";
import App from "./App.vue";
import IonicVue from "@ionic/vue";

Vue.use(IonicVue);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
