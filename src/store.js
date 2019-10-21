import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {apiKey, url} from './components/constants'


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [],
    genres: [],
<<<<<<< HEAD
    film: []
=======
    film: [],
    searchPost: []
>>>>>>> a6d6ac976d9bc3fb4d70964d980a54bf2aa541a1
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
<<<<<<< HEAD
=======
      },
      searchSubmit(state, payload) {
          state.searchPost = payload
>>>>>>> a6d6ac976d9bc3fb4d70964d980a54bf2aa541a1
      }
  },
  actions: {
    getData({commit}){
<<<<<<< HEAD

=======
>>>>>>> a6d6ac976d9bc3fb4d70964d980a54bf2aa541a1
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
<<<<<<< HEAD
            else{
                axios
                    .get(`${url}movie/${filmId}${apiKey}`)
                    .then(response => {
                        commit('getFilm', response.data.results);
                        return response.data.results
                    })
            }
    }
=======
            // else{
            //     axios
            //         .get(`${url}movie/${filmId}${apiKey}`)
            //         .then(response => {
            //             commit('getFilm', response.data.results);
            //             return response.data.results
            //         })
            // }
    },
      searchSubmit({commit}, value) {
          axios
              .get(`${url}search/collection${apiKey}&language=en-US&query=${value}}`)
              .then(response => {
                  commit('searchSubmit', response.data.results);
                  return response;
              })
              .then(data => console.log(data.data.results));
      }
>>>>>>> a6d6ac976d9bc3fb4d70964d980a54bf2aa541a1
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
