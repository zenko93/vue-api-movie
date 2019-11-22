<template>
    <v-app>
        <v-flex class="flex ">
            <Carousel></Carousel>
            <Search></Search>
            <FilmsList :posts="popularMovies" :mediaType="mediaType"></FilmsList>
        </v-flex>
    </v-app>
</template>

<script>
    import Carousel from './Carousel'
    import FilmsList from './FilmsList'
    import Search from './Search'
    import {mapState} from 'vuex'

    export default {
        mounted() {
            this.$store.commit('SET_SELECTED_LANG', this.$route.query.language || this.language)
            this.$store.dispatch("getPopular");
            if(this.$route.query.approved){
                this.$store.dispatch('createSession', this.$route.query.request_token)
            }
        },
        computed: {
            ...mapState({
                popularMovies: state => state.home.getPopular,
                mediaType: state => state.discover.categoryId,
                language: state => state.selectedLanguage
            })
        },
        name: "HomePage",
        components: {
            Carousel,
            FilmsList,
            Search
        }
    }
</script>

<style scoped>

</style>
