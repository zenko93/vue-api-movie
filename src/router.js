import Vue from 'vue'
import Router from 'vue-router'
import HomePage from "./components/HomePage"
import FilmCard from "./components/FilmCard";
import Discover from "./components/Discover";
import Registration from "./components/Registration";
import Error404 from "./components/Error404";

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,

  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/film-card/:id',
      props: true,
      name: 'FilmCard',
      component: FilmCard
    },
    {
      path: '/discover/:id',
      props: true,
      name: 'Discover',
      component: Discover
    },
    {
      path: '/registration',
      props: true,
      name: 'Registration',
      component: Registration
    },
    {
      path: '/page-not-found',
      name: Error404,
      component: Error404
    },
    {
      path: '/*',
      redirect: {name: Error404}
    }

  ]
});

// router.beforeRouteLeave((to, from, next) => {
//   console.log('beforeRouteLeave');
//   next(false)
// });

// router.beforeResolve((to, from, next) => {
//   console.log('from', from)
//   console.log('to', to)
//   // router.push({query: Object.assign(from.query, {a: 1})})
//   // to.query = {q: 'q'}
//   console.log(to.query)
//   next()
// })
