import Vue from 'vue'
import Vuex from 'vuex'
import discover from './modules/discover'
import search from './modules/search'
import filmCard from './modules/filmCard'
import home from './modules/home'
import registration from './modules/registration'
import axios from "axios";
import {apiKey, corsKey, url, url3} from "../constants";
import {router} from "../router";
import cookies from "vue-cookies";


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        discover,
        search,
        filmCard,
        home,
        registration
    },
    state: {
        logIn: false,
        confirm: false,
        addFavoriteMovie: [],

        appBarLinks: [
            {title: '', icon: 'mdi-account', url: '/account'},

            {title: 'Home', icon: 'mdi-home', url: '/'},
            {title: 'Discover', icon: 'mdi-movie-search', url: '/discover/movie'},
            {title: 'Log Out', icon: 'mdi-exit-run'}
        ],
        logInUserIcon: [
            {title: 'Log In', icon: 'mdi-account'},
            ]
    },
    mutations: {
        LOG_IN(state, payload) {
            state.logIn = payload
        },
        CHANGE_TITLE_LOGIN(state) {
            state.appBarLinks[0].title = state.registration.registeredUser.name || cookies.get('userName')
        },
        CHANGE_CONFIRM(state, payload) {
            state.confirm = payload
        },
        ADD_FAVORITE_MOVIE(state, payload) {
            state.addFavoriteMovie.push(payload)
        }

    },
    actions: {},
    getters: {},
})
