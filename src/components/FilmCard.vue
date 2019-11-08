<template >
    <v-app>
        <v-layout>
            <v-flex xs12 mx-2 my-2>
                <v-card
                        class="d-flex flex-row mb-2 poster-wrapper"
                >
                    <v-img
                            :src="largeUrlImage + film.poster_path"
                            width="300px"
                            height="450px"
                    ></v-img>
                    <v-card>
                        <v-list-item-content>
                            <v-card-title class="flex-row max-h">
                                {{ film.title || film.name || film.original_title }}
                            </v-card-title>

                            <v-list-item-subtitle class="ml-4">
                                <v-icon color="yellow">mdi-star</v-icon>
                                Vote average: {{ film.vote_average }}
                                <v-btn class="ml-2" @click="getTrailer()">Trailer</v-btn>
                                <v-tooltip  bottom>
                                    <template v-slot:activator="{ on }">
                                        <v-btn  class="ml-2" @click="addFavorite()" v-on="on">
                                            <v-icon :color="color? 'red': 'black'">mdi-cards-heart</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Add to favorite</span>
                                </v-tooltip>
                            </v-list-item-subtitle>
                        </v-list-item-content>

                        <v-divider></v-divider>

                        <v-card-text>
                            {{ film.overview }}
                        </v-card-text>

                    </v-card>

                </v-card>
                <div class="text-center" v-html="trailer"></div>

            </v-flex>
        </v-layout>
        <CarouselRecommendations></CarouselRecommendations>
    </v-app>

</template>

<script>
    import {largeUrlImage, baseUrlImage} from '../constants'
    import {mapState} from 'vuex'
    import CarouselRecommendations from './CarouselRecommendations'
    import cookies from 'vue-cookies'

    export default {
        props: ['id'],
        data() {
            return {
                baseUrlImage: baseUrlImage,
                largeUrlImage: largeUrlImage,
                color: false
            }
        },
        mounted() {
            this.$store.dispatch('filmById', this.id)
            this.$store.dispatch('getRecommendations',{id: this.id})
            this.$store.dispatch('getKeyTrailer',{id: this.id})
            this.$store.commit('SET_TRAILER', '')
        },
        computed: {
            ...mapState({
                film: state => state.filmCard.film,
                trailer: state => state.filmCard.trailer,
            })
        },
        methods: {
            getTrailer() {
                this.$store.dispatch('getTrailer')
            },
            addFavorite() {
                this.color = !this.color
                if(this.color) {
                    this.$store.commit('ADD_FAVORITE_MOVIE', this.film)
                }
            }
        },
        components: {
            CarouselRecommendations
        },

        name: "FilmCard"
    }
</script>

<style scoped>

</style>
