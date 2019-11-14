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
                                <v-btn class="ml-2"  @click="getTrailer()">Trailer</v-btn>
                                <v-tooltip  bottom>
                                    <template v-slot:activator="{ on }">
                                        <v-btn  class="ml-2" @click="statusFavorite()" v-on="on">
                                            <v-icon :color="isFavorite? 'red': 'black'">mdi-cards-heart</v-icon>
                                        </v-btn>

                                    </template>
                                    <span>Add to favorite</span>
                                </v-tooltip>
                                  <Alert :type="alert.a401.type" :text="alert.a401.text" v-if="alert.a401.show"></Alert>
                            </v-list-item-subtitle>
                        </v-list-item-content>

                        <v-divider></v-divider>

                        <v-card-text>
                            {{ film.overview }}
                        </v-card-text>

                    </v-card>

                </v-card>
                <div id="scroll" class="text-center" v-html="trailer"></div>

            </v-flex>
        </v-layout>
        <CarouselRecommendations></CarouselRecommendations>
    </v-app>

</template>

<script>
    import {largeUrlImage, baseUrlImage} from '../constants'
    import {mapState} from 'vuex'
    import CarouselRecommendations from './CarouselRecommendations'
    import Alert from "./Alert";


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
                categoryID: state => state.discover.categoryId,
                favorites: state => state.favorites,
                alert: state => state.filmCard.alert
            }),
            isFavorite: {
                get () {
                    return this.favorites.find(item => item.id === this.film.id)
                },
                set (value) {
                    this.isFavorite = value
                }
            }
        },
        methods: {
            getTrailer() {
                this.$store.dispatch('getTrailer')
            },
            statusFavorite() {
                this.$store.dispatch('markAsFavorite', {
                    media_type: this.categoryID,
                    media_id: this.id,
                    favorite: !this.isFavorite
                });
            }
        },
        components: {
            CarouselRecommendations,
            Alert
        },

        name: "FilmCard"
    }
</script>

<style scoped>

</style>
