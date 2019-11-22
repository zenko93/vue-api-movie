import axios from "axios";
import {apiKey, corsKey, url, url3} from "../../constants";

export default {
    state: {
        foundFilms: [],
    },
    mutations: {
        LIVE_SEARCH(state, payload) {
            state.foundFilms = payload;
        },
    },
    actions: {
        liveSearch({commit, rootState}, search) {
            axios
                .get(`${url3}search/multi${apiKey}&language=${rootState.selectedLanguage}&query=${search}&page=1&include_adult=true`,)
                .then(response => {
                    commit('LIVE_SEARCH', response.data.results);
                })
        },
    },
    getters: {

    }
}
