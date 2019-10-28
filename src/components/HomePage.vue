<template>
    <v-app>
        <v-flex class="flex ">
            <AppBar></AppBar>
            <Carousel></Carousel>
            <Search></Search>
            <FilmsList :posts="popularMovies"></FilmsList>
            <AppFooter></AppFooter>
        </v-flex>
    </v-app>
</template>

<script>
    import AppBar from './AppBar'
    import Carousel from './Carousel'
    import AppFooter from './AppFooter'
    import FilmsList from './FilmsList'
    import Search from './Search'
    import {mapState} from 'vuex'

    export default {
        data () {
            return {
                dataFilms: [],
                baseUrlImage: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2',
            }
        },
        mounted() {
            this.$store.dispatch("getPopular");
        },
        computed: {
            ...mapState({
                popularMovies: state => state.home.getPopular,
            })
        },
        name: "HomePage",
        components: {
            AppBar,
            Carousel,
            AppFooter,
            FilmsList,
            Search
        }
    }
</script>

<style scoped>

</style>
