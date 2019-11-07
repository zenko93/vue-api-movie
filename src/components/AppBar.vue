<template>
    <div>
        <v-navigation-drawer
                app
                temporary
                v-model="drawer"
        >
            <v-list>
                <v-list-item
                        v-for="link of changeBtnBar"
                        :key="link.title"
                        :to="link.url"
                        :disabled="link.disabled"
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
                       v-for="link in changeBtnBar"
                       :key="link.title"
                       :disabled="link.disabled"
                       @click.stop="link.title === 'Log Out' ? changeConfirm() : null"
                       :to="link.url"
                >
                    <Confirm v-if="confirm"></Confirm>
                    <v-icon left>{{ link.icon }}</v-icon>
                    {{ link.title }}
                </v-btn>
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
                drawer: false
            };
        },
        computed: {
            ...mapState({
                links: state => state.appBarLinks,
                logInUserIcon: state => state.logInUserIcon,
                flagLogIn: state => state.logIn,
                confirm: state => state.confirm
            }),
            changeBtnBar() {
                let flagLogIn = cookies.get('flagLogIn');

                if(this.flagLogIn) {
                    return this.links
                }
                else return this.logInUserIcon
            }
        },
        methods: {
            changeConfirm() {
                this.$store.commit('CHANGE_CONFIRM', true)
            }
        },
        components: {
            Confirm
        },
        name: "AppBar"
    }
</script>

<style scoped>

</style>
