<template>
    <v-container grid-list-lg>
        <v-layout row wrap>
            <v-flex
                    xs6
                    sm4
                    md3
                    lg2
                    v-for="post in posts"
                    :key="post.id"
            >

                <v-card
                        @click="verificationSessionExpire"
                        :to="'/film-card/' + post.id"
                        width="220"
                >
                    <v-img
                            class="white--text align-end"
                            height="278px"
                            :src="getImage(post)"
                    >
                    </v-img>

                    <v-card-title>{{ post.name || post.title }}</v-card-title>

                    <v-card-text class="text--primary">
                        <div>Vote average: {{ post.vote_average }}</div>
                        <div>Popularity: {{ post.popularity }}</div>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                                rounded
                                color="primary "
                                text
                                :id="post.id"
                        >
                            Open
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>

        <Pagination></Pagination>
    </v-container>
</template>

<script>
    import Pagination from './Pagination'
    import {baseUrlImage, imageNotFound} from '../constants'

    export default {
        props: ['posts'],
        data() {
            return {
                imageNotFound: imageNotFound,
                baseUrlImage: baseUrlImage,
            }
        },
        methods: {
            getImage(post) {
                let urlImage = this.baseUrlImage + post.poster_path;
                return post.poster_path === null ? this.imageNotFound : urlImage
            },
            verificationSessionExpire() {
                let realTime = new Date();
                let endSession = new Date(this.$store.state.registration.newToken.expires_at);

                if (realTime > endSession) {
                    this.$router.push('/registration')
                }
            }
        },

        components: {
            Pagination
        },
        name: "FilmsList"

    }
</script>

<style scoped>

</style>
