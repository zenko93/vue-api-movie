import Vue from 'vue'
import Router from 'vue-router'
import HomePage from "./components/HomePage"
import FilmCard from "./components/FilmCard";
import Discover from "./components/Discover";
import Registration from "./components/Registration";
import PersonalAccount from "./components/PersonalAccount";
import ContactUs from "./components/ContactUs";
import Error404 from "./components/Error404";
import cookies from 'vue-cookies'
import store from "./store";

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
  const token = cookies.get('Token');
  const flagLogIn = cookies.get('flagLogIn');


  if (!token) {
    store.commit('LOG_IN', false);
    next('/registration');
  }
  store.commit('LOG_IN', flagLogIn);
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
      path: '/movie/:id',
      props: true,
      component: FilmCard,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/tv/:id',
      props: true,
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
      path: '/contact-us',
      name: 'ContactUs',
      component: ContactUs,
      beforeEnter: ifNotAuthenticated,

    },
    {
      path: '/account/:id',
      props: true,
      name: 'PersonalAccount',
      component: PersonalAccount,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/page-not-found',
      name: Error404,
      component: Error404,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/*',
      redirect: {name: Error404}
    }

  ],
  scrollBehavior (to, from, savedPosition) {
    if(savedPosition){
      return savedPosition
    }
    if(to.hash){
      return {selector: to.hash}
    }
    return {
      x: 0,
      y: 0,
    }
  }
});

