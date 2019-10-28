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
            dispatchFilterMovies () {
                this.$store.dispatch("filteredPosts", {
                    page: this.selectedPage
                });
            },
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
                    this.SET_SELECTED_PAGE(page);
                }
            },
        },
        watch: {
            selectedPage() {
                this.dispatchFilterMovies()
            }
        },
        name: "Pagination"
    }
</script>

<style scoped>

</style>
