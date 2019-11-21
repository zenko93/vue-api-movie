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
import { i18n } from '../plugins/VueI18n'


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
        selectedLanguage: 'ru-RU',
    },
    mutations: {
        LOG_IN(state, payload) {
            state.logIn = payload
        },
        CHANGE_CONFIRM(state, payload) {
            state.confirm = payload
        },
        SET_FAVORITES(state, payload) {
            state.favorites = payload
        },
        SET_SELECTED_LANG(state, payload) {
            state.selectedLanguage = payload
            router.replace({ query: {...router.currentRoute.query, language : payload}} ).catch(err => console.log(err))
        }
    },
    actions: {
        getFavorite({commit, rootState, state}, payload) {
            let sessionId = rootState.registration.newSessionId.length ? rootState.registration.newSessionId : cookies.get('SessionId');
            axios
                .get(`${url3}account/${userId}/favorite/${payload || 'movies'}${apiKey}&session_id=${sessionId}&language=${state.selectedLanguage}&sort_by=created_at.desc&page=1`)
                .then(response => {
                        commit('SET_FAVORITES', response.data.results)
                })
        }
    },
    getters: {},
})
