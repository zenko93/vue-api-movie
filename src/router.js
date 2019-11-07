import Vue from 'vue'
import Router from 'vue-router'
import HomePage from "./components/HomePage"
import FilmCard from "./components/FilmCard";
import Discover from "./components/Discover";
import Registration from "./components/Registration";
import PersonalAccount from "./components/PersonalAccount";
import Error404 from "./components/Error404";
import cookies from 'vue-cookies'
import store from "./store";

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
  let token = cookies.get('Token');
  let flagLogIn = cookies.get('flagLogIn');

  if (!token) {
    store.commit('LOG_IN', false);
    next('/registration');
  }
  store.commit('LOG_IN', flagLogIn);
  store.commit('CHANGE_TITLE_LOGIN');
  next()
};

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,

  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/film-card/:id',
      props: true,
      name: 'FilmCard',
      component: FilmCard,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/discover/:id',
      props: true,
      name: 'Discover',
      component: Discover,
      beforeEnter: ifNotAuthenticated,
    },
    {
      path: '/registration',
      props: true,
      name: 'Registration',
      component: Registration
    },
    {
      path: '/account',
      props: true,
      name: 'PersonalAccount',
      component: PersonalAccount,
      beforeEnter: ifNotAuthenticated
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
