import axios from "axios";
import {apiKey, url3} from "../../constants";
import {router} from "../../router";

export default {
    state: {
        getPopular: ''
    },
    mutations: {
        GET_POPULAR(state, payload) {
            state.getPopular = payload;
        },
    },
    actions: {
        getPopular({commit, rootState}) {
            commit("SET_CATEGORY_ID", 'movie', {root: true});
            axios
                .get(`${url3}movie/popular${apiKey}&language=${rootState.selectedLanguage}`,)
                .then(response => {
                    commit('GET_POPULAR', response.data.results);
                })
        },
    },
    getters: {

    }
}
