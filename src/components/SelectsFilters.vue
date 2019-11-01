<template>
    <v-col
            class="d-flex "
            cols="15" sm="12" md="9"
    >
        <v-select
                v-model="selectedYear"
                :items="years"
                label="Year"
                solo
                @change="dispatchFilterPosts"
        ></v-select>
        <v-select
                class="ml-2"
                label="Genres"
                v-model="selectedGenres"
                solo
                multiple
                :items="genres"
                item-text="name"
                item-value="id"
                @change="dispatchFilterPosts"

        ></v-select>
        <v-select
                class="ml-2"
                label="Sort by..."
                v-model="selectedSortBy"
                :items="sortBy"
                solo
                item-text="name"
                item-value="id"
                @change="dispatchFilterPosts"

        ></v-select>
    </v-col>
</template>

<script>
    import {sortBy} from "../dataSortByFilter";
    import { mapMutations, mapState } from 'vuex'

    export default {
        data(){
            return{
                years: [],
                sortBy: sortBy,
            }
        },
        methods: {
            dispatchFilterPosts () {
                this.$store.dispatch("filteredPosts", {
                    year: this.selectedYear,
                    genre: this.selectedGenres,
                    sortBy: this.selectedSortBy,
                    page: this.selectedPage
                });
            },
            ...mapMutations([
                'SET_SELECTED_YEAR',
                'SET_SELECTED_GENRES',
                'SET_SELECTED_SORTBY',
            ]),
        },
        computed: {
            ...mapState({
                page: state => state.discover.selectedPage,
                genres: state => state.discover.genresList
            }),
            selectedYear: {
                get () {
                    return this.$store.state.discover.selectedYear;
                },
                set (year) {
                    this.$store.dispatch('changeYear', year)
                }
            },
            selectedGenres: {
                get () {
                    return this.$store.state.discover.selectedGenres;
                },
                set (genres) {
                    // this.SET_SELECTED_GENRES(genres);
                    this.$store.dispatch('changeGenres', genres)

                }
            },
            selectedSortBy: {
                get () {
                    return this.$store.state.discover.selectedSortBy;
                },
                set (sortBy) {
                    // this.SET_SELECTED_SORTBY(sortBy);
                    this.$store.dispatch('changeSortBy', sortBy)
                }
            },
        },
        mounted() {
            let date = new Date;
            let startDate = 1900;
            let endDate = date.getFullYear();
            let result = [];

            for (let from = startDate; from<=endDate; from++)
                result.push(from);
            this.years = result.reverse();
        },
        name: "SelectsFilters"
    }
</script>

<style scoped>

</style>
