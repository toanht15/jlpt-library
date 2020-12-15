require('./bootstrap');

import Vue from 'vue';
import VueRouter from "vue-router";
import Vuetify from "vuetify";

import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { colors } from "vuetify/lib";

Vue.use(VueRouter);
Vue.use(Vuetify);

//Routes
import { routes } from './routes';

//Register Routes
const router = new VueRouter({
    routes,
    mode: 'hash'
})

import App from "../views/App";

const app = new Vue({
    el: "#app",
    router,
    vuetify: new Vuetify({
        icons: {
            iconfont: 'md' || 'fa',
        },
        theme: {
            themes: {
                light: {
                    background: colors.blue.accent2
                },
                dark: {
                    background: colors.blue
                }
            }

        }
    }),
    components: { App }
});
