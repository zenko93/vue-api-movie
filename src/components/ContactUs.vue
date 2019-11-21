<template >
    <div class="fill-height">
        <v-card
                max-width="375"
                class="mx-auto"
        >
            <v-img
                    src="https://regnum.ru/uploads/pictures/news/2019/07/20/regnum_picture_15636228291980774_normal.jpg"
                    height="300px"
                    dark
            >
                <v-row class="fill-height">
                    <v-card-title class="white--text mx-auto ">
                        <div class="pt-12">{{ $t('siteTitle') }}</div>
                    </v-card-title>
                </v-row>
            </v-img>

            <v-list two-line>
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon color="indigo">mdi-phone</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>(650) 555-1234</v-list-item-title>
                        <v-list-item-subtitle>{{ $t('mobile') }}</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-icon>
                        <v-icon>mdi-message-text</v-icon>
                    </v-list-item-icon>
                </v-list-item>


                <v-divider inset></v-divider>

                <v-list-item>
                    <v-list-item-icon>
                        <v-icon color="indigo">mdi-email</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>database@example.com</v-list-item-title>
                        <v-list-item-subtitle>{{ $t('work') }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>


                <v-divider inset></v-divider>

                <v-list-item >
                    <v-list-item-icon>
                        <v-icon color="indigo">mdi-map-marker</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ $t('addressBuilding') }}</v-list-item-title>
                        <v-list-item-subtitle>{{ $t('addressCity') }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "ContactUs"
    }
</script>

<style scoped>

</style>
