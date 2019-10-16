<template>
    <v-footer
            color="purple darken-2"
            padless
    >
        <v-row
                justify="center"
                no-gutters
        >
            <v-btn
                    v-for="link in links"
                    :key="link"
                    color="white"
                    text
                    rounded
                    class="my-2"
            >
                {{ link }}
            </v-btn>
            <v-col
                    class="purple darken-3 py-4 text-center white--text"
                    cols="12"
            >
                {{ new Date().getFullYear() }} — <strong>Film Database</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script>
    export default {
        data(){
            return{
                links: [
                    'Home',
                    'About Us',
                    'Team',
                    'Services',
                    'Blog',
                    'Contact Us',
                ],
            }
        },
        name: "AppFooter"
    }
</script>

<style scoped>

</style>
