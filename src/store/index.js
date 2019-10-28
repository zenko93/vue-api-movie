import Vue from 'vue'
import Vuex from 'vuex'
import discover from './moduls/discover'
import search from './moduls/search'
import filmCard from './moduls/filmCard'
import home from './moduls/home'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        discover,
        search,
        filmCard,
        home
    },
    state: {},
    mutations: {},
    actions: {
        // filmById ({commit ,state}, filmId) {
        //     let film = state.searchPost.find(film => +film.id === +filmId);
        //             commit('getFilm', film);
        // },
    },
    getters: {},
})
