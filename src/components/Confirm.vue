<template>
        <v-row justify="center">

            <v-dialog
                    v-model="confirm"
                    max-width="400"
            >
                <v-card>
                    <v-card-title class="headline">Are you sure you want to go out?</v-card-title>
                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn
                                color="green darken-1"
                                text
                                @click="changeConfirm('disagree')"
                        >
                            Disagree
                        </v-btn>

                        <v-btn
                                color="green darken-1"
                                text
                                @click="changeConfirm('agree')"
                        >
                            Agree
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
            })
        },
        methods: {
            changeConfirm(answer) {
                if(answer === 'agree') {
                    this.$store.commit('CHANGE_CONFIRM', false)
                    cookies.remove('Token');
                    cookies.remove('flagLogIn');
                    cookies.remove('user');
                    cookies.remove('SessionId');
                    this.$router.push('/registration')
                    this.$store.commit('LOG_IN', false);
                }
                else {
                    this.$store.commit('CHANGE_CONFIRM', false)
                }
            }
        },
        name: "Confirm"
    }
</script>

<style scoped>

</style>
