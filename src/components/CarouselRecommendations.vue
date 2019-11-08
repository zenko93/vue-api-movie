<template >
    <v-sheet
            class="mx-auto "
            elevation="8"
            max-width="950"
            v-if="films.length > 0"
    >
        <div  class="text-center mt-2 flex-row max-h headline">Recomendations</div>

        <v-slide-group
                v-model="films"
                class="pa-4"
                multiple
                show-arrows
        >
            <v-slide-item
                    v-for="film in films"
                    :key="film.id"
                    v-slot:default="{ active, toggle }"

            >
                <v-card
                        class="ma-4"
                        height="200"
                        width="130"
                        @click="toggle"
                        :img="baseUrlImage + film.poster_path"
                        :href="/film-card/ + film.id"
                >
                    <v-row
                            class="fill-height"
                            align="center"
                            justify="center"
                    >

                    </v-row>
                </v-card>
            </v-slide-item>
        </v-slide-group>
    </v-sheet>

</template>

<script>
    import {mapState} from 'vuex'
    import {baseUrlImage} from '../constants'

    export default {
        data() {
            return{
                baseUrlImage: baseUrlImage,
                text: 'Recomendations'
            }
        },
        computed: {
          ...mapState({
              films: state => state.filmCard.recomFilms
          })
        },
        methods: {

        },


        name: "CarouselRecommendations"
    }
</script>

<style scoped>

</style>
