<template>
    <div>
        <v-navigation-drawer
                app
                temporary
                v-model="drawer"
        >
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title"> Genres </v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense nav>
                <v-list-item
                        v-for="item in this.$store.state.genres"
                        :key="item.id"
                        link
                >
                    <v-list-item-content>
                        <v-list-item-title>{{ item.name }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
                color="deep-purple accent-4"
                dark
                class="mb-3"
        >
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Film Database</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn text @click="getData">getData</v-btn>
        </v-app-bar>
    </div>
</template>


<script>
    export default {
        data(){
            return{
                drawer: false,

            }
        },
        methods: {
            getData(){
                console.log(this.$store.getters.getData);
            },

        },
        name: "AppBar"
    }
</script>

<style scoped>

</style>
