import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {apiKey, url3} from "../../constants";

Vue.use(Vuex);

export default {
    state: {
        registeredUser: '',
        newToken: 'alala',
    },
    mutations: {
        GET_USER_REGISTRATION(state, payload) {
            state.registeredUser = payload
        },
        GET_NEW_TOKEN(state, payload) {
            state.newToken = payload
        }
    },
    actions: {
        registeredUser({ commit }, payload){
            console.log(payload);
            commit('GET_USER_REGISTRATION', payload);
            axios
                .get(`${url3}/authentication/token/new${apiKey}`)
                .then(response => {
                    commit('GET_NEW_TOKEN', response.data)
                })
        }
    },
    getters: {},
}
