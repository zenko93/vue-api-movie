<template>
<<<<<<< HEAD
    <v-container>
        <v-layout row>
            <v-flex xs12>

            <v-card
                    class="d-flex flex-row mx-auto mb-3"
            >
                <v-img
                        :src="largeUrlImage + film.poster_path"
                        width="300px"
                        height="450px"
                ></v-img>
                <v-card >
                    <v-list-item-content >
                        <v-card-title class="flex-row max-h">
                            {{ film.title }}
                        </v-card-title>
                        <v-list-item-subtitle class="ml-3">Vote average: {{ film.vote_average }}</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-divider></v-divider>

                    <v-card-text>
                        {{ film.overview }}
                    </v-card-text>
                </v-card>
            </v-card>
                <v-btn c color="primary" right to="/">To films list</v-btn>

            </v-flex>
        </v-layout>
    </v-container>
=======
    <v-app>
        <v-flex class="d-flex flex-column">

            <v-layout >
                <v-flex xs12 mx-2 my-2>

                <v-card
                        class="d-flex flex-row "
                >
                    <v-img
                            :src="largeUrlImage + film.poster_path"
                            width="300px"
                            height="450px"
                    ></v-img>
                    <v-card >
                        <v-list-item-content >
                            <v-card-title class="flex-row max-h">
                                {{ film.title }}
                            </v-card-title>
                            <v-list-item-subtitle class="ml-3">Vote average: {{ film.vote_average }}</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-divider></v-divider>

                        <v-card-text>
                            {{ film.overview }}
                        </v-card-text>
                    </v-card>
                </v-card>
                    <v-btn class="mt-2 float-right" color="primary"  to="/">To films list</v-btn>

                </v-flex>
            </v-layout>
        </v-flex>
        <AppFooter></AppFooter>
    </v-app>

>>>>>>> a6d6ac976d9bc3fb4d70964d980a54bf2aa541a1

</template>

<script>
<<<<<<< HEAD
=======
    import AppFooter from './AppFooter'

>>>>>>> a6d6ac976d9bc3fb4d70964d980a54bf2aa541a1
    export default {
        props: ['id'],
        data(){
            return{
                largeUrlImage: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2',
            }
        },
        mounted() {
            this.$store.dispatch('filmById', this.id)
            console.log(this.$store.state.film)
        },
        computed: {
            film () {
                return this.$store.getters.film
            }
        },
<<<<<<< HEAD
=======
        components: {
            AppFooter
        },
>>>>>>> a6d6ac976d9bc3fb4d70964d980a54bf2aa541a1
        name: "FilmCard"
    }
</script>

<style scoped>

</style>
