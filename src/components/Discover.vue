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
                    {{ $t('discoverTitle') }}
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
                        <span>{{$t('movies')}}</span>
                    </v-btn>

                    <v-btn exact
                           value="tv"
                           to="/discover/tv"
                           @click="changeCategory('tv')"
                    >
                        <span>{{$t('tvShows')}}</span>
                    </v-btn>

                </v-bottom-navigation>

            </v-card>
            <SelectsFilters></SelectsFilters>
            <FilmsList :posts="filteredPosts" :mediaType="mediaType"></FilmsList>
            <Pagination></Pagination>

        </v-flex>
    </v-app>
</template>

<script>
    import SelectsFilters from './SelectsFilters'
    import FilmsList from './FilmsList'
    import Pagination from './Pagination'
    import {mapState} from 'vuex'

    export default {
        props: ['id'],
        created() {
            this.$store.dispatch('getGenres');
        },
        methods: {
            changeCategory(category) {
                return this.$store.commit('SET_CATEGORY_ID', category);
            },
        },
        computed: {
            ...mapState({
                filteredPosts: state => state.discover.filteredPosts,
                mediaType: state => state.discover.categoryId
            }),
            activeButton: {
                get() {
                    return this.$route.params.id
                },
                set(val) {
                    this.value = val
                }
            },
        },
        mounted() {
            this.$store.dispatch('filteredPosts');
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
