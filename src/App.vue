<template>
  <v-app id="app">
    <v-content>
      <AppBar></AppBar>
      <router-view :key="$route.fullPath"></router-view>
      <AppFooter></AppFooter>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar'
import AppFooter from './components/AppFooter'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState({
      getParams: state => state.discover.getParams,
      year: state => state.discover.selectedYear,
      genres: state => state.discover.selectedGenres,
      sortBy: state => state.discover.selectedSortBy,
    })
  },
  methods: {
    ...mapMutations([
      'SET_SELECTED_YEAR',
    ]),
  },
  components: {
    AppBar,
    AppFooter
  }
};
</script>
