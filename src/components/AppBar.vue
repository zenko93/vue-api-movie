<template>
    <div>
        <v-app-bar
                color="deep-purple accent-4"
                dark
                class="mb-3"
        >
            <v-toolbar-title>Film Database</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn text exact to="/">Home</v-btn>
            <v-btn text to="/discover/movie">Discover</v-btn>
        </v-app-bar>
    </div>
</template>


<script>
    export default {
        name: "AppBar"
    }
</script>

<style scoped>

</style>
