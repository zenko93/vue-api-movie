<template>
    <v-col
            class="d-flex "
            cols="15" sm="12" md="9"
    >
        <v-select
                v-model="selectedYear"
                :items="years"
                label=""
                solo
                @change="timeExpires"
        ></v-select>
        <v-select
                class="ml-2"
                :label="$t('genres')"
                v-model="selectedGenres"
                solo
                multiple
                :items="genres"
                item-text="name"
                item-value="id"
                @change="timeExpires"

        ></v-select>
        <v-select
                class="ml-2"
                :label="$t('sortBy')"
                v-model="selectedSortBy"
                :items="sortBy()"
                solo
                item-text="name"
                item-value="id"
                @change="timeExpires"

        ></v-select>
    </v-col>
</template>

<script>
    import {sortByEng, sortByRu} from "../dataSortByFilter";
    import { mapMutations, mapState } from 'vuex'
    import cookies from 'vue-cookies'

    export default {
        data(){
            return{
                years: [],
                sortByEng: sortByEng,
                sortByRu: sortByRu,
            }
        },
        methods: {
            timeExpires () {
                let token = cookies.get('Token');

                if (token) {
                    let realTime = new Date();
                    let endSession = new Date(token.expires_at);

                    if (realTime > endSession) {
                        this.$router.push('/registration')
                    }
                } else this.$router.push('/registration')
            },
            ...mapMutations([
                'SET_SELECTED_YEAR',
                'SET_SELECTED_GENRES',
                'SET_SELECTED_SORTBY',
            ]),
            sortBy() {
                return this.$i18n.locale === 'en-US' ? this.sortByEng : this.sortByRu
            },
            getDates() {
                let date = new Date;
                let startDate = 1900;
                let endDate = date.getFullYear();
                let result = [];

                for (let from = startDate; from<=endDate; from++) result.push(from);
                return this.years = result.reverse();
            }

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
                set (genre) {
                    this.$store.dispatch('changeGenres', genre)
                }
            },
            selectedSortBy: {
                get () {
                    return this.$store.state.discover.selectedSortBy;
                },
                set (sortBy) {
                    this.$store.dispatch('changeSortBy', sortBy)
                }
            },

        },
        mounted() {
            this.getDates();

            const params = this.$router.currentRoute.query; /////////////// подгрузка данных страницы по гет парамметрам
            if (this.selectedYear !== params.primary_release_year && params.primary_release_year) {
                this.selectedYear = +params.primary_release_year
            }
            if (this.selectedGenres !== params.with_genres && params.with_genres) {
                this.selectedGenres = params.with_genres.map(item => parseInt(item , 10));
            }
            if (this.selectedSortBy !== params.sort_by && params.sort_by) {
                this.selectedSortBy = params.sort_by
            }

        },
        name: "SelectsFilters"
    }
</script>

<style scoped>

</style>
