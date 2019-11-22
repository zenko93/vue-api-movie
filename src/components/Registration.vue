<template>
    <v-app>
        <v-container
                class="fill-height"
                fluid
        >
            <v-layout
                    align-center
                    justify-center
            >
                <v-flex
                    xs12
                    sm8
                    md5
                >
<!--                    <v-toolbar-title class="error" v-if="!this.$store.state.logIn">Your time to visit expired. Login please</v-toolbar-title>-->

                    <v-card class="elevation-10">
                        <v-toolbar
                                color="deep-purple accent-2"
                            dark
                            flat
                        >
                            <v-toolbar-title>{{ $t('logIn') }}</v-toolbar-title>
                            <div class="flex-grow-1"></div>

                        </v-toolbar>
                        <v-card-text>
                            <v-form
                                ref="form"
                                v-model="validate"
                            >
                                <v-text-field
                                        :label="$t('name')"
                                        name="name"
                                        prepend-icon="mdi-account"
                                        v-model="name"
                                        :counter="15"
                                        :rules="nameRules"
                                ></v-text-field>

                                <v-text-field
                                        :label="$t('email')"
                                        name="email"
                                        type="email"
                                        prepend-icon="mdi-at"
                                        v-model="email"
                                        :rules="emailRules"
                                ></v-text-field>

                                <v-text-field
                                        :label="$t('password')"
                                        name="password"
                                        type="password"
                                        prepend-icon="mdi-lock"
                                        v-model="password"
                                        :counter="6"
                                        :rules="passwordRules"
                                ></v-text-field>

                                <v-text-field
                                        :label="$t('confPassword')"
                                        name="password"
                                        type="password"
                                        prepend-icon="mdi-lock"
                                        v-model="confirmPassword"
                                        :counter="6"
                                        :rules="confirmPasswordRules"
                                ></v-text-field>
                            </v-form>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                @click="onSubmit"
                                color="primary"
                                :disabled="!validate"
                            >{{ $t('logIn') }}</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>

            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
    import cookies from 'vue-cookies'
    export default {
        data() {
            return {
                name: '',
                email: '',
                password: '',
                date: '',
                confirmPassword: '',
                validate: false,
                nameRules: [
                    v => !!v || 'Name is required',
                    v => (v.length <= 15 && v.length >= 2) || 'Name must be less than 15 characters',
                ],
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
                ],
                passwordRules: [
                    v => !!v || 'Password is required',
                    v => (v && v.length >= 6) || 'Password must be equal or more than 6 characters'
                ],
                confirmPasswordRules: [
                    v => !!v || 'Password is required',
                    v => v === this.password || 'Password should match'
                ]
            }
        },
        created() {
            this.$store.dispatch('getToken')
            // this.$router.push({ query: {...this.$router.currentRoute.query, language : this.$store.state.selectedLanguage}} ).catch(err => console.log(err))
        },

        methods: {
              onSubmit() {
                if (this.$refs.form.validate()) {
                    const user = {
                        name: this.name,
                        email: this.email,
                        password: this.password
                    };
                    this.$store.dispatch('registeredUser', user)
                    this.$store.dispatch('approveToken')

                    this.$store.dispatch('SET_SESSION');
                }
            },
        },
        name: "Registration"
    }
</script>

<style scoped>

</style>
