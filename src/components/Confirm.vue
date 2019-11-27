<template>
        <v-row justify="center">

            <v-dialog
                    v-model="toggleExit"
                    max-width="400"
            >
                <v-card>
                    <v-card-title class="headline">{{ $t('goOut') }}</v-card-title>
                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn
                                color="green darken-1"
                                text
                                @click="toggleLogOut(false)"
                        >
                            {{ $t('disagree') }}
                        </v-btn>

                        <v-btn
                                color="green darken-1"
                                text
                                @click="toggleLogOut(true)"
                        >
                            {{ $t('agree') }}
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
</template>

<script>
    import {mapState} from 'vuex'
    import cookies from 'vue-cookies'

    export default {
        computed: {
            ...mapState({
                confirm: state => state.confirm
            }),
            toggleExit: {
                get() {
                    return this.confirm
                },
                set(value) {
                    this.$store.commit('OPEN_LOG_OUT', value)
                }
            }
        },
        methods: {
            toggleLogOut(answer) {
                if(answer === true) {
                    this.$store.commit('OPEN_LOG_OUT', false);
                    cookies.remove('Token');
                    cookies.remove('flagLogIn');
                    cookies.remove('user');
                    cookies.remove('SessionId');
                    this.$router.push('/registration');
                    this.$store.commit('LOG_IN', false);
                }
                else {
                    this.$store.commit('OPEN_LOG_OUT', false)
                }
            }
        },
        name: "Confirm"
    }
</script>

<style scoped>

</style>
