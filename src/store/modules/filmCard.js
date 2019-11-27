import axios from "axios";
import {apiKey, corsKey, url, url3, userId} from "../../constants";
import {router} from "../../router";
import cookies from "vue-cookies";

export default {
    state: {
        film: '',
        categoryId: '',
        recomFilms: [],
        trailerKey: [],
        trailer: '',
        alert:
            {
                a404: {
                    show: false,
                    type: 'error',
                    text: 'The resource you requested could not be found.'
                },
                a401: {
                    show: false,
                    type: 'warning',
                    text: 'Authentication failed: You do not have permissions to access the service.'
                }
            },
    },
    mutations: {
        GET_FILM_BY_ID(state, payload) {
            state.film = payload
        },
        SET_FILMS_BY_PERSON(state, payload) {
            state.recomFilms = payload
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
        ALERT_401(state, payload) {
            state.alert.a401.show = payload
        },
        ALERT_404(state, payload) {
            state.alert.a404.show = payload
        },
    },
    actions: {
        getFilm({commit, dispatch}, payload) {
            dispatch('filmById', payload);
            dispatch('getRecommendations', payload);
            dispatch('getKeyTrailer', payload);
            commit('SET_TRAILER', '')
        },
        filmById({commit, rootState}, payload ) {
            axios
                .get(`${url3}${rootState.discover.categoryId}/${payload}${apiKey}&language=${rootState.selectedLanguage}`)
                .then(response => {
                    commit('GET_FILM_BY_ID', response.data);
                })
                .catch(response => {
                response.response.status === 404 ? router.replace('/page-not-found') : null;
            });
        },
        getRecommendations({commit, rootState}, payload) {
            axios
                .get(`${url3}${rootState.discover.categoryId}/${payload}/recommendations${apiKey}&language=${rootState.selectedLanguage}`)
                .then(response => {
                    commit('SET_RECOMMENDATIONS_FILMS', response.data.results);
                })
        },
        getKeyTrailer({commit, rootState}, payload) {
            axios
                .get(`${url3}${rootState.discover.categoryId}/${payload}/videos${apiKey}&language=${rootState.selectedLanguage}`)
                .then(response => {
                    commit('SET_TRAILER_KEY', response.data.results);
                    response.data.results.length === 0 ? commit('SET_TRAILER', '<div>Trailer is not available </div>') : null;
                })
        },
        getTrailer({state, commit} ) {
            let trailerKey = state.trailerKey[0].key;
                axios
                .get(`${corsKey}/${url}video/play?key=${trailerKey}&width=961&height=540&_=1573116214803`)
                .then(response => {
                    commit('SET_TRAILER', response.data);
                    router.push({hash: '#scroll'})
                })
        },
        getFilmsByPerson({rootState, commit}, payload) {
            axios
                .get(`${url3}person/${payload}/combined_credits${apiKey}&language=${rootState.selectedLanguage}`)
                .then((response) => commit('SET_FILMS_BY_PERSON', response.data.cast))
        },
        markAsFavorite({rootState, commit, dispatch}, payload) {
            const sessionId = rootState.registration.newSessionId.length ? rootState.registration.newSessionId : cookies.get('SessionId');

            axios
                .post(`${url3}account/${userId}/favorite${apiKey}&session_id=${sessionId}`,{
                    media_type: payload.media_type,
                    media_id: payload.media_id,
                    favorite: payload.favorite
            })
                .then(response => {

                    if(response.data.status_code === 12 || response.data.status_code === 1){
                        dispatch('getFavorite', null, { root: true })
                    }
                    else if(response.data.status_code === 13){
                        const fav = rootState.favorites.filter(item => item.id !== +payload.media_id);
                        commit('SET_FAVORITES', fav, { root: true });

                        setTimeout(() => {
                            commit('ALERT_404', false)
                        }, 3000);
                        commit('ALERT_404', true)
                    }
                    else if(response.data.status_code === 3) {
                        setTimeout(() => {
                            commit('ALERT_401', false)
                        }, 3000);
                        commit('ALERT_401', true)
                    }
                    else if(response.data.status_code === 34) {
                        setTimeout(() => {
                            commit('ALERT_404', false)
                        }, 3000);
                        commit('ALERT_404', true)
                    }
                })
                .catch(respons => console.log(respons))
        }
    },
    getters: {}
}
