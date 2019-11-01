<template>
    <div>
        <v-navigation-drawer
                app
                temporary
                v-model="drawer"
        >
            <v-list>
                <v-list-item
                        v-for="link of links"
                        :key="link.title"
                        :to="link.url"
                        @click="verificationSessionExpire"
                >
                    <v-list-item-action>
                        <v-icon>{{link.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title v-text="link.title"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar
                color="deep-purple accent-4"
                dark
                class="mb-3"
        >
            <v-app-bar-nav-icon
                    @click="drawer = !drawer"
                    class="hidden-md-and-up"
            ></v-app-bar-nav-icon>
            <v-toolbar-title>Film Database</v-toolbar-title>

            <v-spacer></v-spacer>
            <div class="hidden-sm-and-down">
                <v-btn text
                       exact
                       v-for="link in links"
                       :key="link.title"
                       :to="link.url"
                       @click="verificationSessionExpire"
                >
                    <v-icon left>{{ link.icon }}</v-icon>
                    {{ link.title }}
                </v-btn>
            </div>
        </v-app-bar>
    </div>
</template>


<script>
    import {mapState} from 'vuex'
    import cookies from 'vue-cookies'


    export default {
        data() {
            return{
                drawer: false
            };
        },
        computed: {
            ...mapState({
                links: state => state.appBarLinks
            })
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
        name: "AppBar"
    }
</script>

<style scoped>

</style>
