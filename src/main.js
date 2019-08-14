import Vue from "vue";
import App from "./App.vue";
import VueGrapesjs from '@/components/editor/grapes'
Vue.use(VueGrapesjs)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
