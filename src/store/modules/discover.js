import axios from "axios";
import {apiKey, url3} from "../../constants";
import {router} from "../../router";

export default {
    state: {
        selectedYear: 2019,
        selectedGenres: [],
        selectedSortBy: [],
        selectedPage: 1,
        categoryId: 'movie',
        filteredPosts: '',
        genresList: [],
        totalPages: 0,
        queryParams: {},
        getParams: {}
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
        FILTERED_POSTS(state, payload) {
            state.filteredPosts = payload;
        },
        SET_TOTAL_PAGES(state, payload) {
            state.totalPages = payload;
        },
        SET_GENRES(state, payload) {
            state.genresList = payload
        },
        SET_CATEGORY_ID(state, payload) {
            state.categoryId = payload;
        },
        SET_QUERIES(state, payload) {
            state.queryParams = payload;
        },
    },
    actions: {
        filteredPosts({state, commit, rootState}) {
            commit('SET_QUERIES', router.currentRoute.query);
            commit('SET_CATEGORY_ID', router.currentRoute.params.id);
            axios
                .get(`${url3}discover/${state.categoryId}${apiKey}&language=${rootState.selectedLanguage}&page=${state.selectedPage}&sort_by=${state.selectedSortBy}&first_air_date_year=${state.selectedYear}&primary_release_year=${state.selectedYear}&with_genres=${state.selectedGenres}`)
                .then(response => {
                    commit('FILTERED_POSTS', response.data.results);
                    commit('SET_TOTAL_PAGES', response.data.total_pages);
                })
                .then(() => router.replace({query: {
                        page: state.selectedPage,
                        sort_by: state.selectedSortBy,
                        primary_release_year: state.selectedYear,
                        with_genres: state.selectedGenres
                    }}))
                .catch(response => {
                    response.response.status === 404 ? router.push('/page-not-found') : null;
                });
        },
        getGenres({commit, rootState}) {
            axios
                .get(`${url3}genre/movie/list${apiKey}&language=${rootState.selectedLanguage}`)
                .then(response => {
                    commit('SET_GENRES', response.data.genres);
                })
        },
        changeYear({commit, state}, payload) {
            commit('SET_SELECTED_YEAR', payload);
            router.push({ query: {...router.currentRoute.query, primary_release_year: state.selectedYear}} ).catch(err => console.log(err))
        },
        changeGenres({commit, state}, payload) {
            commit('SET_SELECTED_GENRES', payload);
            router.push({ query: {...router.currentRoute.query, with_genres: state.selectedGenres}} ).catch(err => console.log(err))
        },
        changeSortBy({commit, state}, payload) {
            commit('SET_SELECTED_SORTBY', payload);
            router.push({ query: {...router.currentRoute.query, sort_by: state.selectedSortBy}} ).catch(err => console.log(err))
        },
        changePage({commit, state}, payload) {
            commit('SET_SELECTED_PAGE', payload);
            router.push({ query: {...router.currentRoute.query, page: state.selectedPage}} ).catch(err => console.log(err))
        },

    },
    getters: {

    }
}
