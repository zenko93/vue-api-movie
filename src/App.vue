<template>
  <v-app id="app">
    <v-content>
      <AppBar></AppBar>
      <router-view></router-view>
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
  mounted() {
    // let params = window
    //         .location
    //         .search
    //         .replace('?','')
    //         .split('&')
    //         .reduce(
    //                 function(p,e){
    //                   let a = e.split('=');
    //                   p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
    //                   return p;
    //                 },
    //                 {}
    //         );
    //
    // console.log( params);
    // let params = this.$router.currentRoute.query
    // console.log(params)
    // if (params.primary_release_year) {
    //   console.log(params.primary_release_year)
    //   return this.$store.commit('SET_SELECTED_YEAR', params.primary_release_year)
    // }
  },
  components: {
    AppBar,
    AppFooter
  }
};
</script>
