<template>
    <v-navigation-drawer
        v-model="drawer"
        app
        dark
        temporary
    >
        <v-list>
            <v-list-tile
                :key="-1"
                :to="'/'"
            >
                <v-list-tile-title v-text="'Home'"/>
            </v-list-tile>
            <v-list-tile
                v-for="(page, i) in pages"
                :key="i"
                :to="page.to"
                @click="onClick($event, page)"
            >
                <v-list-tile-title v-text="page.text"/>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import {
    mapGetters,
    mapMutations
} from 'vuex'

export default {
    name: 'Drawer',
    computed: {
        ...mapGetters(['pages']),
        drawer: {
            get() {
                return this.$store.state.drawer;
            },
            set (val) {
                this.setDrawer(val)
            }
        }
    },
    methods: {
        ...mapMutations(['setDrawer']),
        onClick (e, item) {
            e.stopPropagation();

            if(item.to === '/'){
                this.$vuetify.goto(0);
                this.setDrawer(false);
                return
            }

            if(item.to) return;

            this.setDrawer(false);
        }
    }
}
</script>

<style>

</style>
