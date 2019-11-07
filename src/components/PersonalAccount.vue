<template>
    <v-layout class="fill-height">
        <v-flex xs12 mx-2 my-2 >

            <v-card

                    class="d-flex flex-row mb-2"
                    max-width="500"
            >

                <v-list-item-content>
                    <v-card-title class="flex-row ">
                        Personal data
                    </v-card-title>

                    <v-list-item-subtitle class="ml-4">
                        <div>name: {{ user.name }}</div>
                        <div>e-mail: {{ user.email }}</div>

                    </v-list-item-subtitle>
                </v-list-item-content>
                <v-card>
                    <v-list-item-content>
                        <v-card-title class="flex-row max-h">
                            Favorite Movies
                        </v-card-title>

                        <v-list-item-subtitle class="ml-4">
                        </v-list-item-subtitle>
                    </v-list-item-content>

                    <v-divider></v-divider>

                    <v-card-text>
                    </v-card-text>

                </v-card>

            </v-card>
            <div class="text-center" v-html="trailer"></div>

        </v-flex>
    </v-layout>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        data() {
            return {
                items: ['Personal account','Favorite movies'],
            }
        },
        computed: {
            ...mapState({
                user: state => state.registration.registeredUser
            })
        },
        name: "PersonalAccount"
    }
</script>

<style scoped>
    .basil {
        background-color: #FFFBE6 !important;
    }
    .basil--text {
        color: #356859 !important;
    }
</style>
