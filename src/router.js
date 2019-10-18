import Vue from 'vue'
import Router from 'vue-router'
import HomePage from "./components/HomePage"
import FilmCard from "./components/FilmCard";

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/film-card/:id',
            props: true,
            name: 'FilmCard',
            component: FilmCard
        }

    ]
})
