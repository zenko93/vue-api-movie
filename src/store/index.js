import Vue from 'vue'
import Vuex from 'vuex'
import discover from './modules/discover'
import search from './modules/search'
import filmCard from './modules/filmCard'
import home from './modules/home'
import registration from './modules/registration'
import router from './../router'


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
