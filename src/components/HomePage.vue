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
        },
        methods: {
            verificationSessionExpire() {
                let tokenExpires = cookies.get('Token').expires_at
                let realTime = new Date();
                let endSession = new Date(tokenExpires);

                if (realTime > endSession) {
                    this.$router.push('/registration')
                }
            }
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
