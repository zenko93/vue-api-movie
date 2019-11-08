import axios from "axios";
import {apiKey, corsKey, url, url3} from "../../constants";
import {router} from "../../router";

export default {
    state: {
        film: '',
        categoryId: '',
        recomFilms: [],
        trailerKey: [],
        trailer: '',
    },
    mutations: {
        GET_FILM_BY_ID(state, payload) {
            state.film = payload
        },
        GET_CATEGORY_ID(state, payload) {
            state.categoryId = payload
        },
        SET_RECOMMENDATIONS_FILMS(state, payload) {
            state.recomFilms = payload
        },
        SET_TRAILER_KEY(state, payload) {
            state.trailerKey = payload
        },
        SET_TRAILER(state, payload) {
            state.trailer = payload
        },
    },
    actions: {
        filmById({state, commit, rootState}, filmId ) {
            commit('GET_CATEGORY_ID', rootState.discover.categoryId);
            axios
                .get(`${url3}${state.categoryId || 'movie'}/${filmId}${apiKey}`)
                .then(response => {
                    commit('GET_FILM_BY_ID', response.data);
                })
                .catch(response => {
                response.response.status === 404 ? router.replace('/page-not-found') : null;
            });
        },
        getRecommendations({state, commit}, payload) {
            axios
                .get(`${url3}${state.categoryId}/${payload.id}/recommendations${apiKey}`)
                .then(response => {
                    commit('SET_RECOMMENDATIONS_FILMS', response.data.results);
                })
        },
        getKeyTrailer({state, commit}, payload) {
            axios
                .get(`${url3}${state.categoryId}/${payload.id}/videos${apiKey}`)
                .then(response => {
                    commit('SET_TRAILER_KEY', response.data.results);
                })
        },
        getTrailer({state, commit} ) {
            let trailerKey = state.trailerKey[0].key
            axios
                .get(`${corsKey}/${url}video/play?key=${trailerKey}&width=961&height=540&_=1573116214803`)
                .then(response => {
                    commit('SET_TRAILER', response.data);
                })
        },
    },
    getters: {}
}
