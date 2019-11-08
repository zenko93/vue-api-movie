import axios from "axios";
import {corsKey, url} from "../../constants";

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
        liveSearch({commit}, search) {
            axios
                .get(`${corsKey}/${url}search/trending?&query=${search}`,)
                .then(response => {
                    commit('LIVE_SEARCH', response.data.results);
                })
        },
    },
    getters: {

    }
}
