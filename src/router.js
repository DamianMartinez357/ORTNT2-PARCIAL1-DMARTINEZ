import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Gastos from "./components/Gastos.vue";
import Respuestas from "./components/Respuestas.vue";

export const router = new VueRouter({
    mode:"history",
    routes:[
        {path:"/gastos", component: Gastos},
        {path:"/respuestas", component: Respuestas}
    ],
});
