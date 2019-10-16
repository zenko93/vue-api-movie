<template>
    <template>
        <div class="text-center">
            <v-pagination
                    v-model="slides"
                    :length="slides.length"
                    :total-visible="7"
                    circle
            ></v-pagination>
        </div>
    </template>
</template>

<script>
    export default {
        name: "Pagination"
    }
</script>

<style scoped>

</style>
