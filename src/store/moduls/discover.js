import axios from "axios";
import {apiKey, url3} from "../../constants";
import {router} from "../../router";

export default {
    state: {
        selectedYear: 2019,
        selectedGenres: '',
        selectedSortBy: '',
        selectedPage: 1,
        selectedCategory: 'movie',
        categoryId: '',
        filteredPosts: '',
        genresList: [],
        totalPages: 0
    },
    mutations: {
        SET_SELECTED_YEAR(state, payload) {
            state.selectedYear = payload;
        },
        SET_SELECTED_GENRES(state, payload) {
            state.selectedGenres = payload;
        },
        SET_SELECTED_SORTBY(state, payload) {
            state.selectedSortBy = payload;
        },
        SET_SELECTED_PAGE(state, payload) {
            state.selectedPage = payload;
        },
        SET_CATEGORY(state, payload) {
            state.selectedCategory = payload;
        },
        FILTERED_POSTS(state, payload) {
            state.filteredPosts = payload;
        },
        GET_TOTAL_PAGES(state, payload) {
            state.totalPages = payload;
        },
        GET_GENRES(state, payload) {
            state.genresList = payload
        },
        SET_CATEGORY_ID(state) {
            state.categoryId = router.currentRoute.params.id;
        }

    },
    actions: {
        filteredPosts({state, commit}) {
            commit('SET_CATEGORY_ID');
            axios
                .get(`${url3}discover/${state.categoryId}${apiKey}&media_type=movie&page=${state.selectedPage}&sort_by=${state.selectedSortBy}&first_air_date_year=${state.selectedYear}&primary_release_year=${state.selectedYear}&with_genres=${state.selectedGenres}`)
                .then(response => {
                    commit('FILTERED_POSTS', response.data.results);
                    commit('GET_TOTAL_PAGES', response.data.total_pages);
                })
                .catch(response => {
                    response.response.status === 404 ? router.push('/page-not-found') : null;
                });
        },
        getGenres({commit}) {
            axios
                .get(`${url3}genre/movie/list${apiKey}`)
                .then(response => {
                    commit('GET_GENRES', response.data.genres);
                })
        },
    },
    getters: {

    }
}
