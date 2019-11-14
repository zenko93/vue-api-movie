<template>
    <v-alert
            class="position"
            dense
            :type="type"
    >
        {{ text }}
        The resource you requested could not be found.
    </v-alert>
</template>

<script>
    export default {
        props: ['type', 'text'],
        name: "Alert"
    }
</script>

<style scoped>
    .position{
        position: absolute;
    }
</style>
