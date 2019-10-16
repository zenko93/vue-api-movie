import Vue from 'vue'
import Router from 'vue-router'
import FilmsList from "./components/FilmsList";
import HomePage from "./components/HomePage"

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
      path: '/FilmsList',
      name: 'FilmsList',
      component: FilmsList
    }
  ]
})
