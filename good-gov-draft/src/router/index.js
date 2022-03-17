import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Candidates from '../views/Candidates'
import Conventions from '../views/Conventions'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/About',
        name: 'About',
        component: About
    },
    {
        path: '/Candidates',
        name: 'Candidates',
        component: Candidates
    },
    {
        path: '/Conventions',
        name: 'Conventions',
        component: Conventions
    },
]

const router = createRouter( {
    history: createWebHistory(process.env.BASE_URL),
    routes
} )

export default router