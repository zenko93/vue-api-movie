<template >
    <v-app>
        <v-layout>
            <v-flex xs12 mx-2 my-2>
                <v-card
                        class="d-flex flex-row mb-2 poster-wrapper"
                >
                    <v-img
                            :src=" getImage(film.poster_path)"
                            max-width="300px"
                            max-height="450px"
                    ></v-img>
                    <v-img
                            v-if="mediaType === 'person'"
                            :src=" getImage(film.profile_path)"
                            max-width="300px"
                            max-height="450px"
                    ></v-img>
                    <v-card>
                        <v-list-item-content>
                            <v-card-title class="flex-row max-h">
                                {{ film.title || film.name || film.original_title }}
                            </v-card-title>
                            <v-list-item-subtitle class="ml-4" v-if="mediaType === 'person'">
                                <div class="mb-1">Birthday: {{ film.birthday }}</div>
                                <div>Place of birthday: {{ film.place_of_birth }}</div>
                            </v-list-item-subtitle>

                            <v-list-item-subtitle class="ml-4" v-if="mediaType !== 'person'">
                                <v-icon color="yellow">mdi-star</v-icon>
                                Vote average: {{ film.vote_average }}
                                <v-btn class="ml-2"  @click="getTrailer()">{{$t('trailer')}}</v-btn>
                                <v-tooltip  bottom>
                                    <template v-slot:activator="{ on }">
                                        <v-btn  class="ml-2" @click="statusFavorite()" v-on="on">
                                            <v-icon :color="isFavorite? 'red': 'black'">mdi-cards-heart</v-icon>
                                        </v-btn>

                                    </template>
                                    <span>{{$t('addToFavorite')}}</span>
                                </v-tooltip>
                                  <Alert :type="alert.a401.type" :text="alert.a401.text" v-if="alert.a401.show"></Alert>
                            </v-list-item-subtitle>
                        </v-list-item-content>

                        <v-divider></v-divider>

                        <v-card-text>
                            {{ film.overview || film.biography}}
                        </v-card-text>

                    </v-card>

                </v-card>
                <div id="scroll" class="text-center" v-html="trailer"></div>

            </v-flex>
        </v-layout>
        <CarouselRecommendations :mediaType="mediaType" :title="film.name"></CarouselRecommendations>
    </v-app>

</template>

<script>
    import {middleUrlImage, imageNotFound300x450} from '../constants'
    import {mapState} from 'vuex'
    import CarouselRecommendations from './CarouselRecommendations'
    import Alert from "./Alert";


    export default {
        props: ['id'],
        data() {
            return {
                middleUrlImage: middleUrlImage,
                imageNotFound: imageNotFound300x450,
                color: false
            }
        },
        mounted() {
            this.$store.commit('SET_CATEGORY_ID', this.$route.name)
            this.$store.dispatch('getFilm', this.id)
            this.mediaType === 'person' ? this.$store.dispatch('getFilmsByPerson', this.id) : null
        },
        computed: {
            ...mapState({
                film: state => state.filmCard.film,
                trailer: state => state.filmCard.trailer,
                mediaType: state => state.discover.categoryId,
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
                    media_type: this.mediaType,
                    media_id: this.id,
                    favorite: !this.isFavorite
                });
            },
            getImage(film) {
                let urlImage = this.middleUrlImage + film;
                return film === null ? this.imageNotFound : urlImage
            },
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
