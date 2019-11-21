<template>
    <v-carousel
            class="mb-3 my_container"
            cycle
            hide-delimiters
            show-arrows-on-hover
            height="450"
    >
            <v-carousel-item
                    v-for="post in posts"
                    :key="post.id"
                    :src="middleUrlImage + post.poster_path"
                    class="moi mx-auto"
                    >
            </v-carousel-item>
    </v-carousel>
</template>

<script>
    import {middleUrlImage} from "../constants";
    import {mapState} from "vuex";

    export default {
        data(){
            return{
                middleUrlImage: middleUrlImage,
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
    .moi {
        width: 300px;
    }
</style>
