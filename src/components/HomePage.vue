<template>
    <v-app>
        <v-flex class="flex ">
            <Carousel></Carousel>
            <Search></Search>
            <FilmsList :posts="popularMovies"></FilmsList>
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
            this.$store.dispatch("getPopular");
            if(this.$route.query.approved){
                this.$store.dispatch('createSession', this.$route.query.request_token)
            }
        },
        methods: {

        },
        computed: {
            ...mapState({
                popularMovies: state => state.home.getPopular,
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
