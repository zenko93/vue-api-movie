<template>
    <v-app>
        <v-flex class="flex column">
            <AppBar></AppBar>
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
                           to="/discover/movie"
                           @click="changeCategory('movie')"

                    >
                        <span>Movies</span>
                    </v-btn>

                    <v-btn exact
                           value="tv"
                           to="/discover/tv"
                           @click="changeCategory('tv')"

                    >
                        <span>Tv Shows</span>
                    </v-btn>
                </v-bottom-navigation>

            </v-card>
            <SelectsFilters></SelectsFilters>
            <FilmsList :posts="posts"></FilmsList>
            <AppFooter></AppFooter>
        </v-flex>
    </v-app>
</template>

<script>
    import AppBar from './AppBar'
    import SelectsFilters from './SelectsFilters'
    import FilmsList from './FilmsList'
    import AppFooter from './AppFooter'
    import {mapState, mapMutations} from 'vuex'

    export default {
        props: ['id'],
        data() {
            return {
            }
        },
        methods: {
            ...mapMutations([
                'SET_CATEGORY',
            ]),
            changeCategory(category) {
                return this.SET_CATEGORY(category);
            },
        },
        computed: {
            ...mapState({
                page: state => state.discover.selectedPage,
                filteredPosts: state => state.discover.filteredPosts,
            }),
            activeButton: {
                get() {
                    return this.$route.params.id
                },
                set(val) {
                    this.value = val
                }
            },
            posts() {
                return this.filteredPosts
            },
        },
        mounted() {
            this.$store.dispatch('filteredPosts');
            this.$store.dispatch('getGenres');
        },
        watch: {
            '$route'() {
                this.$store.dispatch('filteredPosts');
            }
        },
        components: {
            AppBar,
            SelectsFilters,
            FilmsList,
            AppFooter
        },
        name: "Discover"
    }
</script>

<style scoped>

</style>
