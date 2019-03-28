<template>
  <v-app>
    <Toolbar/>

    <Drawer />

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// import Drawer from './components/layout/Drawer.vue';
export default {
  name: 'App',
  components: {
    Toolbar: () => import(`@/components/layout/Toolbar.vue`),
    Drawer: () => import(`@/components/layout/Drawer.vue`)
    // Drawer
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
