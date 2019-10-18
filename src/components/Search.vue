<template>
    <v-layout class="d-flex row mt-5 mx-4">
    <v-text-field
            type="text"
            v-model="value"
            v-on:keyup.enter="searchSubmit"
            flat
            hide-details
            label="Search"
            prepend-incide-icon="mdi-search"
            solo-inverted
            dense
    >
    </v-text-field>

        <v-btn @click="searchSubmit">Search</v-btn>
    </v-layout>

</template>

<script>

    export default {
        data(){
            return {
                value: ''
            }
        },
        methods: {
            searchSubmit() {
                this.$store.dispatch('searchSubmit', this.value)
            },
        },

        name: "Search"
    }
</script>

<style scoped>

</style>