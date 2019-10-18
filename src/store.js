import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {apiKey, url} from './components/constants'


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [],
    genres: [],
    film: []
  },
  mutations: {
      changeData(state, payload) {
          state.data = payload
      },
      getGenres(state, payload) {
          state.genres = payload
      },
      getFilm(state, payload) {
          state.film = payload
      }
  },
  actions: {
    getData({commit}){
      axios
          .get(`${url}movie/top_rated${apiKey}`)
          .then(response => {
            commit('changeData', response.data.results);
            return response.data.results
          })
    },
    getGenres({commit}){
        axios
            .get(`${url}genre/movie/list${apiKey}`)
            .then(response => {
                commit('getGenres', response.data.genres);
                return response
            })
        },
    filmById ({commit ,state}, filmId) {
        let film = state.data.find(film => +film.id === +filmId);
            if(film){
                commit('getFilm', film);
            }
            else{
                axios
                    .get(`${url}movie/${filmId}${apiKey}`)
                    .then(response => {
                        commit('getFilm', response.data.results);
                        return response.data.results
                    })
            }
    }
  },
    getters: {
        getData (state) {
            return state.data
        },
        film (state) {
            return state.film
        }

    },

})
