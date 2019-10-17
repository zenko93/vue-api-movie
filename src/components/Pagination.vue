<template>
    <template>
        <div class="text-center">
            <v-pagination
                    v-for="post in displayedPosts"
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
        data(){
            return {
                posts: [],
                page: 1,
                perPage: 4,
                pages: [],

            }
        },
        mounted: {
            setPages () {
                let numberOfPages = Math.ceil(this.$store.state.data.length / this.perPage);
                for (let index = 1; index <= numberOfPages; index++) {
                    this.pages.push(index);
                }
            },
            paginate (posts) {
                let page = this.page;
                let perPage = this.perPage;
                let from = (page * perPage) - perPage;
                let to = (page * perPage)
            }
        },
        computed: {
            displayedPosts(){
                return this.paginate(this.posts)
            }
        }
        name: "Pagination"
    }
</script>

<style scoped>

</style>
