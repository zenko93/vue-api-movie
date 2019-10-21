<template>
<<<<<<< HEAD
    <v-carousel
            cycle
            height="400"
            hide-delimiter-background
            show-arrows-on-hover
    >
        <v-carousel-item
                v-for="post in this.$store.state.data"
                :key="post.id"
                :src="largeUrlImage + post.poster_path"
                class="cover"
=======
        <v-carousel
                cycle
                height="400"
                show-arrows-on-hover
                hide-delimiter-background
>>>>>>> a6d6ac976d9bc3fb4d70964d980a54bf2aa541a1
        >
            <v-carousel-item
                    v-for="post in this.$store.state.data"
                    :key="post.id"
                    :src="largeUrlImage + post.poster_path"
            >
            </v-carousel-item>

        </v-carousel>

</template>

<script>
    export default {
        data(){
            return{
                largeUrlImage: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2',
            }
        },
        name: "Carousel"
    }
</script>

<style scoped>
    .cover{
        background-size: cover;
    }
</style>
