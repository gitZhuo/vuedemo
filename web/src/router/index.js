import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Motor from '../itemmotor/Motor.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: '',
        component: Motor
    }]
})