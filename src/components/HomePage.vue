<template>
    <v-app>
        <NavigationDrawer></NavigationDrawer>
        <AppBar></AppBar>
        <Carousel></Carousel>
        <v-container grid-list-lg>
            <v-layout row wrap>
                <v-flex
                        xs6
                        sm4
                        md3
                        lg2
                        v-for="item in this.$store.state.data"
                        :key="item.id"
                >
                    {{item.id}}
                    <v-card
                            max-width="200"
                    >
                        <v-img
                                class="white--text align-end"
                                height="278px"
                                :src="baseUrlImage + item.poster_path"
                        >
                        </v-img>

                        <v-card-title>{{ item.title }}</v-card-title>

                        <v-card-text class="text--primary">
                            <div>Vote average: {{ item.vote_average }}</div>
                            <div>Popularity: {{ item.popularity }}</div>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                    color="primary"
                                    text
                            >
                                Open
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
        <AppFooter></AppFooter>



    </v-app>

</template>

<script>
    import NavigationDrawer from './NavigationDrawer'
    import AppBar from './AppBar'
    import Carousel from './Carousel'
    import AppFooter from './AppFooter'

    export default {
        data () {
            return {
                dataFilms: [],

                baseUrlImage: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2',


            }
        },
        methods: {

        },
        mounted() {
            this.$store.dispatch("getData");
        },
        name: "HomePage",
        components: {
            NavigationDrawer,
            AppBar,
            Carousel,
            AppFooter
        }
    }
</script>

<style scoped>

</style>
