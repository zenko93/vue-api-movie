<template>
    <v-app class="pl-4">
        <v-container grid-list-lg>
            <v-layout row wrap>
                <v-flex
                        md7
                        lg5
                        v-for="post in posts"
                        :key="post.id"
                        class="mr-10"
                >
                    <v-card
                            exact
                            :to="'/'+ mediaType + '/' + post.id"
                            width="550"
                            height="300px"
                            class="pl-2"
                    >
                        <v-layout col>
                            <v-img
                                    class="white--text align-end"
                                    height="278px"
                                    width="185"
                                    :src="getImage(post)"
                            >
                            </v-img>
                            <v-row class="ml-2 ">
                                <div class="info1">
                                    <div class="title1 ml-1">{{ post.name || post.title }}</div>
                                    <v-row>
                                        <v-list-item-subtitle class="ml-4">
                                            <div>Vote average: {{ post.vote_average }}</div>
                                            <div>Popularity: {{ post.popularity }}</div>
                                        </v-list-item-subtitle>
                                        <p class="overview">{{ post.overview }}</p>
                                    </v-row>
                                </div>
                                <v-btn
                                        class="mx-auto mt-6 "
                                        rounded
                                        color="primary "
                                        text
                                        :id="post.id"
                                >
                                    {{ $t('btnOpen') }}
                                </v-btn>
                            </v-row>

                        </v-layout>

                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
        <div v-if="!posts[0]" class="headline">{{ $t('noDataText') }}</div>
    </v-app>
</template>

<script>
    import {baseUrlImage, imageNotFound} from '../constants'

    export default {
        props: ['posts', 'mediaType'],
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
        },
        name: "FilmsList"

    }
</script>

<style scoped>
    .title1 {
        font-size: 1.25rem;
        font-weight: 500;
        letter-spacing: 0.0125em;
        line-height: 2rem;
    }

    .info1 {
        width: 100%;
        height: 220px;
        position: relative;
        box-sizing: border-box;
        padding: 10px 16px 16px 0;
        overflow: hidden;
    }

    p {
        padding: 10px 5px 0 15px;
    }
    .overview {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        line-height: 1rem;
        max-height: 8rem;
        -webkit-line-clamp: 7;
        -webkit-box-orient: vertical;

    }

</style>
