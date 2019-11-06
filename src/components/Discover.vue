<template>
    <v-app>
        <v-flex class="flex column">
            <v-card
                    flat
                    class="mx-auto"
            >
                <v-card-text
                        class="text--primary headline"
                >
                    Discover New Movies & TV Shows
                </v-card-text>
                <v-bottom-navigation
                        v-model="activeButton"
                        color="deep-purple accent-4"
                >
                    <v-btn exact
                           value="movie"
                           :to="{path: '/discover/movie'}"
                           @click="changeCategory('movie')"

                    >
                        <span>Movies</span>
                    </v-btn>

                    <v-btn exact
                           value="tv"
                           :to="{path: '/discover/tv'}"
                           @click="changeCategory('tv')"

                    >
                        <span>Tv Shows</span>
                    </v-btn>
                </v-bottom-navigation>

            </v-card>
            <SelectsFilters></SelectsFilters>
            <FilmsList :posts="cPosts"></FilmsList>
            <Pagination></Pagination>

        </v-flex>
    </v-app>
</template>

<script>
    import SelectsFilters from './SelectsFilters'
    import FilmsList from './FilmsList'
    import Pagination from './Pagination'
    import cookies from 'vue-cookies'
    import {mapState, mapMutations} from 'vuex'

    export default {
        props: ['id'],
        data() {
            return {
            }
        },
        created() {
            this.$store.dispatch('getGenres');
        },
        methods: {
            ...mapMutations([
                'SET_CATEGORY',
            ]),
            changeCategory(category) {
                return this.SET_CATEGORY(category);
            },
            verificationSessionExpire() {
                let token = cookies.get('Token');

                if (token) {
                    let realTime = new Date();
                    let endSession = new Date(token.expires_at);

                    if (realTime > endSession) {
                        this.$router.push('/registration')
                    }
                } else this.$router.push('/registration')
            }

        },
        computed: {
            ...mapState({
                page: state => state.discover.selectedPage,
                filteredPosts: state => state.discover.filteredPosts,
                sort_by: state => state.discover.selectedSortBy,
                year: state => state.discover.selectedYear,
                genres: state => state.discover.selectedGenres,
                media_type: state => state.discover.categoryId
            }),
            activeButton: {
                get() {
                    return this.$route.params.id
                },
                set(val) {
                    this.value = val
                }
            },
            cPosts() {
                return this.filteredPosts
            },
        },
        mounted() {
            this.$store.dispatch('filteredPosts');
            this.verificationSessionExpire()
        },
        watch: {
            '$route'() {
                this.$store.dispatch('filteredPosts');
            },
        },
        components: {
            SelectsFilters,
            FilmsList,
            Pagination
        },
        name: "Discover"
    }
</script>

<style scoped>

</style>
