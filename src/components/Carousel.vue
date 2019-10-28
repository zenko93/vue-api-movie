<template>
    <v-carousel
            class="mb-3"
            cycle
            hide-delimiter-background
            show-arrows-on-hover
            height="400px"
    >
        <div
                class="my_container">


            <v-carousel-item
                    v-for="post in posts"
                    :key="post.id"
                    :src="largeUrlImage + post.poster_path"
                    >
            </v-carousel-item>
        </div>


    </v-carousel>
</template>

<script>
    import {largeUrlImage} from "../constants";
    import {mapState} from "vuex";

    export default {
        data(){
            return{
                largeUrlImage: largeUrlImage,
            }
        },
        computed: {
            ...mapState({
                posts: state => state.home.getPopular
            })
        },
        name: "Carousel"
    }
</script>

<style scoped>
    .my_container {
        background-color: black;
        width: 100vw;
    }
</style>
