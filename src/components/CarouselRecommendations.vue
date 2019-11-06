<template>
    <v-carousel>
        <v-carousel-item
                v-for="(color, i) in films"
                :key="color"
        >
            <v-sheet
                    :color="color"
                    height="100px"
                    tile
            >
                <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                >
                    <div class="display-3">Slide {{ i + 1 }}</div>
                </v-row>
            </v-sheet>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        computed: {
          ...mapState({
              films: state => state.recomFilms
          })
        },
        mounted() {
            this.$store.commit('getRecommendations')
        },

        name: "CarouselRecommendations"
    }
</script>

<style scoped>

</style>
