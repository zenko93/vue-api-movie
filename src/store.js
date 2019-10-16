import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: ''
  },
  mutations: {
    changeData(state, payload){
      state.data = payload
    }
  },
  actions: {
    getData({commit}){
      const apiKey = '?api_key=97bb1a5627fcf0148c38c1a52c2823fd';
      axios
          .get(`https://api.themoviedb.org/3/movie/top_rated${apiKey}`)
          .then(data => {
            commit('changeData', data.data.results);
            return data
          })
          .then(response => {console.log(response)})

          }
    }

})
