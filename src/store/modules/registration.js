import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import cookies from 'vue-cookies'
import {apiKey, url3} from "../../constants";
import {router} from "../../router"

Vue.use(Vuex);

export default {
    state: {
        registeredUser: '',
        newToken: '',
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
            commit('GET_USER_REGISTRATION', payload);

            let d = new Date();
            d.setTime(d.getTime() + (5*60*1000));
            let expires = "expires="+ d.toUTCString();
            axios
                .get(`${url3}/authentication/token/new${apiKey}`)
                .then(response => {
                    commit('GET_NEW_TOKEN', response.data)
                    cookies.set("Token", response.data, expires)
                })
                .then(() => router.push('/'))
                .then(() => commit('LOG_IN', true)
        )
        }
    },
    getters: {},
}
