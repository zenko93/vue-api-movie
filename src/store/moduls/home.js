import axios from "axios";
import {apiKey, url3} from "../../constants";

export default {
    state: {
        getPopular: []
    },
    mutations: {
        GET_POPULAR(state, payload) {
            state.getPopular = payload;
        },
    },
    actions: {
        getPopular({commit}) {
            axios
                .get(`${url3}movie/popular${apiKey}`,)
                .then(response => {
                    commit('GET_POPULAR', response.data.results);
                })
        },
    },
    getters: {

    }
}
