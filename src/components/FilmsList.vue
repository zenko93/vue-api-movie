<template>
    <v-container grid-list-lg>
        <v-layout row wrap>
            <v-flex
                    xs6
                    sm4
                    md3
                    lg2
                    v-for="item in this.$store.state.data"
                    :key="item.id"
            >
                <v-card
                        :to="'film-card/' + item.id"
                        width="220"
                >
                    <v-img
                            class="white--text align-end"
                            height="278px"
                            :src="baseUrlImage + item.poster_path"
                    >
                    </v-img>

                    <v-card-title>{{ item.title }}</v-card-title>

                    <v-card-text class="text--primary">
                        <div>Vote average: {{ item.vote_average }}</div>
                        <div>Popularity: {{ item.popularity }}</div>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                                rounded
                                color="primary "
                                text
                                :to="'film-card/' + item.id"
                                :id="item.id"
                        >
                            Open
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                baseUrlImage: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2',
            }
        },

        mounted() {
            this.$store.dispatch("getGenres");
        },
        name: "FilmsList"
    }
</script>

<style scoped>

</style>
