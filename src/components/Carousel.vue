<template>
        <v-carousel
                cycle
                height="400"
                show-arrows-on-hover
                hide-delimiter-background
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

</style>
