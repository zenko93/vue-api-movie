import Vue from 'vue'
import Vuex from 'vuex'
import discover from './modules/discover'
import search from './modules/search'
import filmCard from './modules/filmCard'
import home from './modules/home'
import registration from './modules/registration'
import axios from "axios";
import {apiKey, corsKey, url, url3, userId} from "../constants";
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
        favorites: [],
        languages: [
            {
                name:'Русский',
                id: 'ru-RU'
            },
            {
                name: 'English',
                id: 'en-US'
            }
            ],
        selectedLanguage: 'en-US',

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
            let user = cookies.get('user')
            state.appBarLinks[0].title = state.registration.registeredUser.name || user.name
        },
        CHANGE_CONFIRM(state, payload) {
            state.confirm = payload
        },
        SET_FAVORITES(state, payload) {
            state.favorites = payload
        },
        SET_SELECTED_LANG(state, payload) {
            state.selectedLanguage = payload
        }
    },
    actions: {
        getFavorite({commit, rootState, state}) {
            let sessionId = rootState.registration.newSessionId.length ? rootState.registration.newSessionId : cookies.get('SessionId');
            let media_type = rootState.discover.categoryId === "movie" ? "movies" : "tv";
            axios
                .get(`${url3}account/${userId}/favorite/${media_type}${apiKey}&session_id=${sessionId}&language=${state.selectedLanguage}&sort_by=created_at.desc&page=1`)
                .then(response => {
                    commit('SET_FAVORITES', response.data.results)
                    console.log(response.data)
                })
        }
    },
    getters: {},
})
