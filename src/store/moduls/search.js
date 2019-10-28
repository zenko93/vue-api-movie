import axios from "axios";
import {corsKey} from "../../constants";

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
                .get(`${corsKey}/https://www.themoviedb.org/search/trending?&query=${search}`,)
                .then(response => {
                    commit('LIVE_SEARCH', response.data.results);
                })
        },
    },
    getters: {

    }
}
