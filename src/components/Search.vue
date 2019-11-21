<template>
    <div>
        <v-autocomplete
                class="mx-3"
                :items="foundFilms"
                :search-input.sync="search"
                :loading="isLoading"
                item-text="name"
                item-value="symbol"
                :placeholder="$t('search')"
                :noDataText="$t('noDataText')"
                autofocus
                dense
        >
            <template v-slot:item="{ item }">
                <v-list-item-content v-on:click="openFilmCard(item)">
                    <v-list-item-title v-text="item.name || item.title || item"></v-list-item-title>
                    <v-list-item-subtitle v-text="item.media_type === 'movie' ? 'in Movie' : ''"></v-list-item-subtitle>
                    <v-list-item-subtitle v-text="item.media_type === 'tv' ? 'in Tv Show' : ''"></v-list-item-subtitle>
                </v-list-item-content>
                <v-chip
                        v-if="item.vote_average"
                        class="float-right"
                        color="deep-purple accent-4"
                        text-color="white"
                        small
                        pill
                >
                    <span>  {{ item.vote_average }}</span>
                    <v-avatar>
                        <v-icon small color="yellow">mdi-star</v-icon>
                    </v-avatar>
                </v-chip>

            </template>
        </v-autocomplete>
    </div>

</template>

<script>
    import {mapState} from 'vuex'

    export default {
        data() {
            return {
                isLoading: false,
                search: null,
            }
        },
        watch: {
            search() {
                this.isLoading = true;
                this.$store.dispatch('liveSearch', this.search)
                    .then(() => {
                        setTimeout(() => this.isLoading = false, 500)
                    });
            },
        },
        methods: {
            openFilmCard(item) {
                this.$store.commit('SET_CATEGORY_ID', item.media_type);
                this.$router.push('/'+ item.media_type + '/' + item.id )
            },
        },
        computed: {
            ...mapState({
                foundFilms: state => state.search.foundFilms
            })

        },
        name: "Search"
    }
</script>

<style scoped>

</style>
