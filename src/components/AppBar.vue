<template>
    <div>
        <v-navigation-drawer
                app
                temporary
                v-model="drawer"
        >
            <v-list>
                <v-list-item>
                    <v-list-item-content>
                        <v-btn
                                v-if="flagLogIn"
                                exact
                                text
                                to="/account/movies"
                        >
                                <v-icon class="mr-1">mdi-account</v-icon>
                                <v-list-item-title>{{ user.name }}</v-list-item-title>
                        </v-btn>

                        <v-btn
                                v-if="flagLogIn"
                                text
                                to='/'
                        >
                                <v-icon left>mdi-home</v-icon>
                                <v-list-item-title>{{ $t('home') }}</v-list-item-title>

                        </v-btn>

                        <v-btn
                                v-if="flagLogIn"
                                text
                                to="/discover/movie"
                        >
                                <v-icon left>mdi-movie-search</v-icon>
                                <v-list-item-title>{{ $t('discover') }}</v-list-item-title>
                        </v-btn>

                        <v-btn
                                v-if="flagLogIn"
                                text
                                @click.stop="changeConfirm()"
                        >
                                <v-icon class="pl-6">mdi-exit-run</v-icon>
                                <v-list-item-title>{{ $t('logOut') }}</v-list-item-title>
                        </v-btn>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar
                color="deep-purple accent-4"
                dark
                class="mb-2"
        >
            <v-app-bar-nav-icon
                    @click="drawer = !drawer"
                    class="hidden-md-and-up"
            ></v-app-bar-nav-icon>
            <v-toolbar-title>{{$t('siteTitle')}}</v-toolbar-title>

            <v-spacer></v-spacer>
            <v-select
                    item-text="name"
                    item-value="id"
                    class="selectWidth mt-4 mr-2"
                    v-model="selectedLanguage"
                    :items="languages"
                    menu-props="auto"
                    @change="setLocal()"
            ></v-select>
            <div class="hidden-sm-and-down">
                <v-btn
                        text
                        v-if="flagLogIn"
                        to='/account/movie'
                >
                    <v-icon left>mdi-account</v-icon>
                    {{ user.name }}
                </v-btn>
                <v-btn
                        text
                        v-if="flagLogIn"
                        to='/'
                >
                    <v-icon left>mdi-home</v-icon>
                    {{ $t('home') }}
                </v-btn>
                <v-btn
                        text
                        v-if="flagLogIn"
                        to="/discover/movie"
                >
                    <v-icon left>mdi-movie-search</v-icon>
                    {{ $t('discover') }}
                </v-btn>
                <v-btn
                        text
                        v-if="flagLogIn"
                        @click.stop="changeConfirm()"
                >
                    <v-icon left>mdi-exit-run</v-icon>
                    {{ $t('logOut') }}
                </v-btn>
                <v-btn
                        text
                        v-if="!flagLogIn"
                >
                    <v-icon left>mdi-account</v-icon>
                    {{ $t('logIn') }}
                </v-btn>
                <Confirm v-if="confirm"></Confirm>
            </div>
        </v-app-bar>
    </div>
</template>


<script>
    import {mapState} from 'vuex'
    import Confirm from "./Confirm";
    import cookies from 'vue-cookies'

    export default {
        data() {
            return{
                drawer: false,
                user: cookies.get('user')
            };
        },
        computed: {
            ...mapState({
                flagLogIn: state => state.logIn,
                confirm: state => state.confirm,
                languages: state => state.languages,

            }),
            selectedLanguage: {
                get() {
                    return this.$route.query.language || this.$store.state.selectedLanguage
                },
                set(value) {
                    this.$store.commit('SET_SELECTED_LANG', value)
                }
            },
        },
        mounted() {
            this.setLocal()
        },
        methods: {
            changeConfirm() {
                this.$store.commit('CHANGE_CONFIRM', true)
            },
            setLocal() {
                this.$i18n.locale = this.$route.query.language || this.$store.state.selectedLanguage
            }
        },
        components: {
            Confirm
        },
        name: "AppBar"
    }
</script>

<style scoped>
    .selectWidth{
        max-width: 100px;
    }
</style>
