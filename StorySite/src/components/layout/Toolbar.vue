<template>
    <v-toolbar app>
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
        <v-toolbar-items>
            <v-container fill-height>
                <v-switch 
                    :label="apiSwitcher ? 'Node API':'Python API'" 
                    hide-details
                    v-model="apiSwitcher"
                ></v-switch>
                <v-text-field class="widetext px-2" label="API URL" v-model="apiURL" />
            </v-container>
        </v-toolbar-items>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat
                v-for="(page,i) in pages"
                :key="i"
                :to="page.to"
            >
                {{page.text}}
            </v-btn>
        </v-toolbar-items>
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
        ...mapGetters(['pages']),
        apiSwitcher: {
            get() {
                return this.$store.state.apiServerMode;
            },
            set(value) {
                this.$store.commit('changeAPIServer',value);
            }
        },
        apiURL: {
            get() {
                return this.$store.state.apiurl;
            },
            set(value) {
                this.$store.commit('changeAPIURL',value);
            }
        }
    },
    methods: {
        ...mapMutations(['toggleDrawer'])
    },
    data() {
        return {
            switch1: true
        }
    }
}
</script>

<style scoped>
.switch {
    vertical-align: center;
    background: red;
}
.widetext{
    width: 200px;
}
</style>
