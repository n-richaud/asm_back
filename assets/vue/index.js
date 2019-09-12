import Vue from "vue";
import Vuex from "vuex";
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import App from "./App";
import router from "./router";
import store from "./store";
Vue.use(Vuex);
Vue.use(Buefy);
new Vue({
    components: { App },
    template: "<App/>",
    router,
    store
}).$mount("#app");