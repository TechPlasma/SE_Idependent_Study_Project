<template>
  <v-app>
    <v-toolbar app>
      
      <v-toolbar-title class="headline text-uppercase">
        <router-link to="/" class="clearLink">
          <span>USER</span>
          <span class="font-weight-light">STORIES</span>
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <NavLinks/>

    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import NavLinks from "./components/NavLinks.vue";

export default {
  name: 'App',
  components: {
    NavLinks
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
  .clearLink {
    color: inherit;
    text-decoration: inherit;
  }
</style>
