
import Vue from "vue";

import App from "./App.vue";
import scss from './asserts/css/index.scss';

new Vue({
    el:"#app",
    render:(h) =>{
        return h(App)
    }
})

new Promise(resolve =>{
    resolve("柳智超")
}).then((value) =>{
    console.log(value);
})