import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Team from '@/components/Team'
import Project from '@/components/Project'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'home',
        component: Home,
    }, {
        path: '/Project',
        name: 'project',
        component: Project,
    }, {
        path: '/Contact',
        name: 'contact',
        component: Contact,
        meta: {
            keepAlive: true
        }
    }, {
        path: '/Team',
        name: 'team',
        component: Team,
    }],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})
