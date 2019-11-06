import Vue from 'vue'
import Vuex from 'vuex'
import discover from './modules/discover'
import search from './modules/search'
import filmCard from './modules/filmCard'
import home from './modules/home'
import registration from './modules/registration'
import axios from "axios";
import {apiKey, url3} from "../constants";
import {router} from "../router";


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
        recomFilms: [],
        appBarLinks: [
            {title: '', icon: 'mdi-account'},

            {title: 'Home', icon: 'mdi-home', url: '/'},
            {title: 'Discover', icon: 'mdi-movie-search', url: '/discover/movie'},
            {title: 'Log Out', icon: 'mdi-exit-run', url: '/registration'}
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
            state.appBarLinks[0].title = state.registration.registeredUser.name
        },
        CHANGE_CONFIRM(state, payload) {
            state.confirm = payload
        },
        SET_RECOMMENDATIONS_FILMS(state, payload) {
            state.recomFilms = payload
        }
    },
    actions: {
        getRecommendations({state, commit}, payload) {
            let category = state.filmCard.categoryId;
            console.log(router.currentRoute.query)
            let id = router.currentRoute.query.id
            axios
                .get(`${url3}/${category}/${id}/recommendations${apiKey}`)
                .then(response => {
                    commit('SET_RECOMMENDATIONS_FILMS', response);
                    console.log(response)
                })
        }

    },
    getters: {},
})
