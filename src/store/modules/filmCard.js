import axios from "axios";
import {apiKey, url3} from "../../constants";
import {router} from "../../router";

export default {
    state: {
        film: '',
        categoryId: ''
    },
    mutations: {
        GET_FILM_BY_ID(state, payload) {
            state.film = payload
        },
        GET_CATEGORY_ID(state, payload) {
            state.categoryId = payload
        }
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
    },
    getters: {}
}
