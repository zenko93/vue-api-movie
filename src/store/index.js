import Vue from 'vue'
import Vuex from 'vuex'
import discover from './moduls/discover'
import search from './moduls/search'
import filmCard from './moduls/filmCard'
import home from './moduls/home'
import registration from './moduls/registration'
import axios from 'axios'
import {apiKey, url3} from "../constants";

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
        appBarLinks: [
            {title: 'Home', icon: 'mdi-home', url: '/'},
            {title: 'Discover', icon: 'mdi-movie-search', url: '/discover/movie'},
            {title: 'Registration', icon: 'mdi-account', url: '/registration'},
        ]
    },
    mutations: {

    },
    actions: {

    },
    getters: {},
})
