import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: "/",
            components: {},
        },
        {
            path: "/Home",
            components: {},
        },
    ],
});

export default router;
