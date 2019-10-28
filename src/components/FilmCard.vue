<template>
    <v-app >
            <v-layout>
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
                                {{ film.title || film.name || film.original_title }}
                            </v-card-title>
                            <v-list-item-subtitle class="ml-3">Vote average: {{ film.vote_average }}</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-divider></v-divider>

                        <v-card-text>
                            {{ film.overview }}
                        </v-card-text>
                    </v-card>
                </v-card>
                    <v-btn class="mt-2 float-right" color="primary"  @click="goBack" >Go Back</v-btn>
                </v-flex>
            </v-layout>
        <AppFooter></AppFooter>
    </v-app>

</template>

<script>
    import AppFooter from './AppFooter'
    import {largeUrlImage, baseUrlImage} from '../constants'
    import {mapState} from 'vuex'

    export default {
        props: ['id'],
        data(){
            return{
                baseUrlImage: baseUrlImage,
                largeUrlImage: largeUrlImage,
            }
        },
        methods: {
            goBack() {
                return this.$router.go(-1)
            }
        },
        mounted() {
            this.$store.dispatch('filmById', this.id)
        },
        computed: {
            ...mapState({
                film: state => state.filmCard.film,
            })
        },
        components: {
            AppFooter,
        },
        name: "FilmCard"
    }
</script>

<style scoped>

</style>
