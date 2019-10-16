<template>
    <v-app-bar
            color="deep-purple accent-4"
            dark
            class="mb-3"
    >
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Film Database</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn text to="/FilmsList">Films List</v-btn>
        <v-btn text @click="getData">getData</v-btn>
    </v-app-bar>
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
                this.dataFilms = this.$store.state.data;
                console.log(this.dataFilms);
            },
        },
        name: "AppBar"
    }
</script>

<style scoped>

</style>
