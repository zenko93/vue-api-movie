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
                                <v-img src=""></v-img>
                            </v-avatar>
                        </v-col>
                        <v-col >
                            <v-list-item
                                    color="rgba(0, 0, 0, .4)"
                                    dark
                            >
                                <v-list-item-content>
                                    <v-list-item-title class="title">{{ $t('name') }}: {{ user.name || getUserData.name}}</v-list-item-title>
                                    <v-list-item-subtitle>{{ $t('email') }}: {{ user.email || getUserData.email }}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>
                    </v-row>
                </v-img>
            </v-card>
                <v-bottom-navigation
                        :value="activeButton"
                        color="deep-purple"
                        horizontal
                >
                    <v-btn
                            class="mr-10"
                            value="movie"
                            to="/account/movie"
                            @click="getFavPosts('movies')">
                        <v-card-title class="flex-row max-h">
                            {{ $t('favMovie') }}
                        </v-card-title>
                    </v-btn>

                    <v-btn
                            value="tv"
                            to="/account/tv"
                            @click="getFavPosts('tv')">
                        <v-card-title class="flex-row max-h">
                            {{ $t('favTv') }}
                        </v-card-title>
                    </v-btn>
                </v-bottom-navigation>

                    <v-divider></v-divider>

                    <v-card-text>
                        <FilmsList :posts="favorites" :mediaType="id"></FilmsList>
                    </v-card-text>

        </v-flex>
    </v-layout>
</template>

<script>
    import {mapState} from 'vuex'
    import cookies from 'vue-cookies'
    import FilmsList from './FilmsList'

    export default {
        props: ['id'],
        data() {
            return {
                activeBtn: 0,
            }
        },
        methods: {
            getFavPosts(type) {
                this.$store.commit('SET_FAVORITES', '');
                this.$store.commit('SET_CATEGORY_ID', this.id);
                this.$store.dispatch('getFavorite', type);
            }
        },
        computed: {
            ...mapState({
                user: state => state.registration.registeredUser,
                favorites: state => state.favorites,
            }),
            getUserData() {
                let userCookies = cookies.get('user');
                return userCookies
            },
            activeButton: {
                get() {
                    return this.$route.params.id
                },
                set(val) {
                    this.value = val
                }
            },
    },
        mounted() {
            const id = this.id === 'movie' ? 'movies' : 'tv';
            this.$store.commit('SET_CATEGORY_ID', this.id);
            this.$store.dispatch('getFavorite', id)
        },
        components: {
            FilmsList
        },
        name: "PersonalAccount"
    }
</script>

<style scoped>

</style>
