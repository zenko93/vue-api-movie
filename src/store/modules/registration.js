import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import cookies from 'vue-cookies'
import {apiKey, corsKey, url3} from "../../constants";
import {router} from "../../router"

Vue.use(Vuex);

export default {
    state: {
        registeredUser: '',
        newToken: '',
        newSessionId: ''
    },
    mutations: {
        GET_USER_REGISTRATION(state, payload) {
            state.registeredUser = payload
        },
        GET_NEW_TOKEN(state, payload) {
            state.newToken = payload
        },
        SET_SESSION(state, payload) {
            state.newSessionId = payload
        }
    },
    actions: {
        registeredUser({ commit, state }, payload){
            commit('GET_USER_REGISTRATION', payload);
            cookies.set('user', payload, timeExpires())
            commit('LOG_IN', true)
            cookies.set("flagLogIn", true, timeExpires())
            cookies.set("Token", state.newToken, timeExpires())
        },
        getToken({commit}) {
            axios
                .get(`${url3}/authentication/token/new${apiKey}`)
                .then(response => {
                    commit('GET_NEW_TOKEN', response.data)
                })
        },
        approveToken({state}){
            window.location.replace(`https://www.themoviedb.org/authenticate/${state.newToken.request_token}?redirect_to=http://localhost:8080/`)
        },
        createSession({commit}, payload) {
            axios
                .post(`${url3}authentication/session/new${apiKey}`, {
                    request_token: payload
                })
                .then(response => {
                    commit('SET_SESSION', response.data.session_id)
                    cookies.set("SessionId", response.data.session_id, timeExpires())
                })
        },
    },
    getters: {},
}

function timeExpires() {
    let d = new Date();
    d.setTime(d.getTime() + (60*60*1000));
    let expires = "expires="+ d.toUTCString();
    return expires
}
