import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import CV from "../views/CV/Edit";
import AdminUser from "../views/admin/User";
Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        { path: "/home", name: 'home', component: Home },
        { path: "/cv",name: 'cv', component: CV },
        { path: "/admin/user",name:'adminUser', component: AdminUser}

    ]
});
