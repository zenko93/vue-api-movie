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
export default {
  name: 'App',
  components: {
    AppBar,
    AppFooter
  }
};
</script>
