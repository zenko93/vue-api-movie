<template>
    <v-app>
<<<<<<< HEAD
        <AppBar></AppBar>
        <Carousel></Carousel>
        <FilmsList></FilmsList>
        <AppFooter></AppFooter>
=======
        <v-flex class="d-flex flex-column">
            <AppBar></AppBar>
            <Carousel></Carousel>
            <Search></Search>
            <FilmsList></FilmsList>
            <AppFooter></AppFooter>
        </v-flex>

>>>>>>> a6d6ac976d9bc3fb4d70964d980a54bf2aa541a1
    </v-app>
</template>

<script>
    import AppBar from './AppBar'
    import Carousel from './Carousel'
    import AppFooter from './AppFooter'
    import FilmsList from './FilmsList'
<<<<<<< HEAD
=======
    import Search from './Search'
>>>>>>> a6d6ac976d9bc3fb4d70964d980a54bf2aa541a1

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
<<<<<<< HEAD
            FilmsList
=======
            FilmsList,
            Search
>>>>>>> a6d6ac976d9bc3fb4d70964d980a54bf2aa541a1
        }
    }
</script>

<style scoped>

</style>
