<template>
    <v-toolbar>
        <v-toolbar-side-icon 
            class="hidden-md-and-up"
            @click="toggleDrawer"
        />

        <v-toolbar-title class="headline text-uppercase">
            <router-link to="/" class="clearLink">
                <span>User</span>
                <span class="font-weight-light">Stories</span>
            </router-link>
        </v-toolbar-title>

        <v-spacer/>

        <v-btn class="ml-0 hidden-sm-and-down"
            v-for="(page,i) in pages"
            :key="i"
            :to="page.to"
        >
            {{page.text}}
        </v-btn>
            
        


    </v-toolbar>
</template>

<script>
import{
    mapGetters,
    mapMutations
} from 'vuex';

export default {
    name: 'Toolbar',
    computed: {
        ...mapGetters(['pages'])
    },
    methods: {
        ...mapMutations(['toggleDrawer'])
    }
}
</script>

<style>

</style>
