import Vue from 'vue';
import Router from 'vue-router'


import Home from '../components/Home.vue';
import About from '../components/About.vue';

Vue.use(Router);

export default new Router({
    mode:'history',
    routes:[
        {path:"/home",name:"Home",component:Home},
        {path:"/about",name:"About",component:About},
        {path:"",redirect:"/home"}
    ]
})