<template>
    <v-app>
        <v-flex class="d-flex flex-column">
            <AppBar></AppBar>
            <Carousel></Carousel>
            <Search></Search>
            <FilmsList></FilmsList>
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

    export default {
        data () {
            return {
                dataFilms: [],
                baseUrlImage: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2',
            }
        },
        mounted() {
            this.$store.dispatch("getData");
            this.$store.dispatch("getGenres");
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
