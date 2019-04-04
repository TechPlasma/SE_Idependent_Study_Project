<template>
  <v-app >
    <Layout-Toolbar/>

    <Layout-Drawer />

    <Layout-View />
  </v-app>
</template>

<script>
// import Drawer from './components/layout/Drawer.vue';
export default {
  name: 'App',
  components: {
    LayoutToolbar: () => import(`@/components/layout/Toolbar.vue`),
    LayoutDrawer: () => import(`@/components/layout/Drawer.vue`),
    LayoutView: () => import(`@/components/layout/View.vue`)
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
