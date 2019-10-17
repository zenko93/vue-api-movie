<template>
    <v-app>
        <AppBar></AppBar>
        <Carousel></Carousel>
        <FilmsList></FilmsList>
        <AppFooter></AppFooter>
    </v-app>
</template>

<script>
    import AppBar from './AppBar'
    import Carousel from './Carousel'
    import AppFooter from './AppFooter'
    import FilmsList from './FilmsList'

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
            FilmsList
        }
    }
</script>

<style scoped>

</style>
