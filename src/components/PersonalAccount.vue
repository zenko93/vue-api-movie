<template>
    <v-layout class="fill-height">
        <v-flex xs12 mx-2 my-2 >
            <v-card
                    tile
            >
                <v-img
                        height="250px"
                        width="100%"
                        src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
                >
                    <v-row
                            align="end"
                            class="fill-height"
                    >
                        <v-col
                                align-self="start"
                                class="pa-0"
                                cols="12"
                        >
                            <v-avatar
                                    class="profile"
                                    color="grey"
                                    size="150"
                                    tile
                            >
                                <v-img :src="`https://psv4.userapi.com/c856336/u174528326/docs/d13/3758ef95ba55/IMG_20191107_142137.jpg?extra=_5nU_1Nj6CLc_iqETr79qhQwwKHo0AupkH5hBo3WDk9jntO8wecYkBvfLxujSOL7t5sMjKpgLyiBRKBpIt7lUkKNEoJWx_NUsCvwMjhvalii2SBenVeZEOML7rHBnLVQzVUziUdNSTbyXwIYu4_6lb-THA&dl=1`"></v-img>
                            </v-avatar>
                        </v-col>
                        <v-col >
                            <v-list-item
                                    color="rgba(0, 0, 0, .4)"
                                    dark
                            >
                                <v-list-item-content>
                                    <v-list-item-title class="title">NAME: {{ user.name || getUserData.name}}</v-list-item-title>
                                    <v-list-item-subtitle>EMAIL: {{ user.email || getUserData.email }}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>
                    </v-row>
                </v-img>
            </v-card>

                    <v-list-item-content>
                        <v-card-title class="flex-row max-h">
                            Favorite Movies
                        </v-card-title>


                    </v-list-item-content>

                    <v-divider></v-divider>

                    <v-card-text>
                        <FilmsList :posts="favoriteMovies || favorits"></FilmsList>
                    </v-card-text>

        </v-flex>
    </v-layout>
</template>

<script>
    import {mapState} from 'vuex'
    import {corsKey} from '../constants'
    import cookies from 'vue-cookies'
    import FilmsList from './FilmsList'

    export default {
        data() {
            return {
                items: ['Personal account','Favorite movies'],
                corsKey: corsKey,

            }
        },
        computed: {
            ...mapState({
                user: state => state.registration.registeredUser,
                favorits: state => state.addFavoriteMovie

            }),
            favoriteMovies() {
                 let moviesJSON = cookies.get('favoriteMovies')
                 let movies = JSON.parse(moviesJSON);
                 return movies
            },
            getUserData() {
                let userCookies = cookies.get('user')
                return userCookies
            }

    },
        components: {
            FilmsList
        },
        name: "PersonalAccount"
    }
</script>

<style scoped>
    .basil {
        background-color: #FFFBE6 !important;
    }
    .basil--text {
        color: #356859 !important;
    }
</style>
