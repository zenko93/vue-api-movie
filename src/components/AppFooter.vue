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
                    v-if="logIn"
                    color="white"
                    text
                    rounded
                    class="my-2"
                    to="/"
            >
                {{ $t('home') }}
            </v-btn>
            <v-btn
                    to="/contact-us"
                    color="white"
                    text
                    rounded
                    class="my-2"
            >
                {{ $t('contactUs') }}
            </v-btn>
            <v-col
                    class="purple darken-3 py-4 text-center white--text"
                    cols="12"
            >
                {{ new Date().getFullYear() }} — <strong>{{ $t('siteTitle') }}</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        computed: {
            ...mapState({
                logIn: state => state.logIn
            })
        },
        name: "AppFooter"
    }
</script>

<style scoped>

</style>
