<template>
    <v-container grid-list-lg>
        <v-layout row wrap>
            <v-flex
                    xs6
                    sm4
                    md3
                    lg2
<<<<<<< HEAD
                    v-for="item in this.$store.state.data"
                    :key="item.id"
            >
                <v-card
                        :to="'film-card/' + item.id"
=======
                    v-for="post in displayedPosts"
                    :key="post.id"
            >
                <v-card
                        :to="'film-card/' + post.id"
>>>>>>> a6d6ac976d9bc3fb4d70964d980a54bf2aa541a1
                        width="220"
                >
                    <v-img
                            class="white--text align-end"
                            height="278px"
<<<<<<< HEAD
                            :src="baseUrlImage + item.poster_path"
                    >
                    </v-img>

                    <v-card-title>{{ item.title }}</v-card-title>

                    <v-card-text class="text--primary">
                        <div>Vote average: {{ item.vote_average }}</div>
                        <div>Popularity: {{ item.popularity }}</div>
=======
                            :src="baseUrlImage + post.poster_path"
                    >
                    </v-img>

                    <v-card-title>{{ post.name }}</v-card-title>

                    <v-card-text class="text--primary">
                        <div>Vote average: {{ post.vote_average }}</div>
                        <div>Popularity: {{ post.popularity }}</div>
>>>>>>> a6d6ac976d9bc3fb4d70964d980a54bf2aa541a1
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
<<<<<<< HEAD
                                rounded
                                color="primary "
                                text
                                :to="'film-card/' + item.id"
                                :id="item.id"
=======
                                color="primary "
                                :to="'film-card/' + post.id"
                                :id="post.id"
>>>>>>> a6d6ac976d9bc3fb4d70964d980a54bf2aa541a1
                        >
                            Open
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>

        <div class="text-center mt-5">
            <v-pagination
                    v-model="page"
                    :length="pages"
                    :total-visible="5"
                    circle
            ></v-pagination>
        </div>
    </v-container>
</template>

<script>

    export default {
        data () {
            return {
                baseUrlImage: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2',
<<<<<<< HEAD
            }
        },

        mounted() {
            this.$store.dispatch("getGenres");
=======
                posts: this.$store.state.searchPost,
                page: 1,
                perPage: 6,
                pages: 1,
            }
        },
        methods: {
            paginate (posts) {

                let page = this.page;
                let perPage = this.perPage;
                let from = (page * perPage) - perPage;
                let to = (page * perPage);
                return posts.slice(from, to)
            },
        },
        beforeUpdate (){
            this.posts = this.$store.state.searchPost;
            this.pages = Math.ceil(this.posts.length / this.perPage);
            console.log(this.page)
        },
        watch: {
          posts(){
              console.log('Updated')
            }
        },
        computed: {
            displayedPosts(){
                return this.paginate(this.posts)
            },
>>>>>>> a6d6ac976d9bc3fb4d70964d980a54bf2aa541a1
        },
        name: "FilmsList"

    }
</script>

<style scoped>

</style>
