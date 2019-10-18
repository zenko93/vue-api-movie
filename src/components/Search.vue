<template>
    <v-text-field
            type="text"
            v-model="value"
            class="mx-4"
            flat
            hide-details
            label="Search"
            prepend-inner-icon="search"
            solo-inverted
    ></v-text-field>
</template>

<script>
    import axios from 'axios'
    import {url, apiKey} from './constants'

    export default {
        data(){
            return {
                value: ''
            }
        },

        watch: {
            value(){
                axios
                    .get(`${url}search/movie${apiKey}&language=en-US&query=${this.value}}`)
                    .then(response => console.log(response))
                console.log(this.value)
            }
        },
        name: "Search"
    }
</script>

<style scoped>

</style>