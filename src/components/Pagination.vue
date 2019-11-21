<template>
    <div class="text-center mt-5">
        <v-pagination
                v-model="selectedPage"
                :length="totalPages"
                :total-visible="7"
                circle
        ></v-pagination>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'

    export default {
        methods: {
            ...mapMutations([
                'SET_SELECTED_PAGE'
            ]),
        },
        computed: {
            ...mapState({
                totalPages: state => state.discover.totalPages,
            }),
            selectedPage: {
                get () {
                    return this.$store.state.discover.selectedPage;
                },
                set (page) {
                    this.$store.dispatch('changePage', page)
                }
            },
        },
        mounted() {
            const params = this.$router.currentRoute.query;
            if (this.selectedPage !== params.page && params.page) {
                this.selectedPage = +params.page
            }
        },
        name: "Pagination"
    }
</script>

<style scoped>

</style>
