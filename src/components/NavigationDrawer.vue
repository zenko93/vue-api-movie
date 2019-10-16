<template>
    <v-navigation-drawer
            app
            temporary
            v-model="drawer"
    >
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="title">
                    Genres
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list
                dense
                nav
        >
            <v-list-item
                    v-for="item in genres"
                    :key="item.id"
                    link
            >
                <v-list-item-content>
                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                </v-list-item-content>

            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        data(){
            return{
                genres: [
                    {
                        "id": 28,
                        "name": "Action"
                    },
                    {
                        "id": 12,
                        "name": "Adventure"
                    },
                    {
                        "id": 16,
                        "name": "Animation"
                    },
                    {
                        "id": 35,
                        "name": "Comedy"
                    },
                    {
                        "id": 80,
                        "name": "Crime"
                    },
                    {
                        "id": 99,
                        "name": "Documentary"
                    },
                    {
                        "id": 18,
                        "name": "Drama"
                    },
                    {
                        "id": 10751,
                        "name": "Family"
                    },
                    {
                        "id": 14,
                        "name": "Fantasy"
                    },
                    {
                        "id": 36,
                        "name": "History"
                    },
                    {
                        "id": 27,
                        "name": "Horror"
                    },
                    {
                        "id": 10402,
                        "name": "Music"
                    },
                    {
                        "id": 9648,
                        "name": "Mystery"
                    },
                    {
                        "id": 10749,
                        "name": "Romance"
                    },
                    {
                        "id": 878,
                        "name": "Science Fiction"
                    },
                    {
                        "id": 10770,
                        "name": "TV Movie"
                    },
                    {
                        "id": 53,
                        "name": "Thriller"
                    },
                    {
                        "id": 10752,
                        "name": "War"
                    },
                    {
                        "id": 37,
                        "name": "Western"
                    }
                ],
                name: "NavigationDrawer"
            }
        }

    }
</script>

<style scoped>

</style>
