import Vue from 'vue'
import Vuex from 'vuex'
import stories from './store/stories';

// Load Vuex
Vue.use(Vuex)

// Create Store
export default new Vuex.Store({
  modules: {
    stories
  },
  state: {
    drawer: false,
    apiurl: '76.185.130.54',
    nodeServer: '5000',
    pythonServer: '7000',
    apiServerMode: true,
    pages: [
      // {
      //   text: 'Home',
      //   to: '/'
      // },
      {
        text: 'All Stories',
        to: '/allstories'
      },
      {
        text: 'Submit Story',
        to: '/submitstory'
      },
      {
        text: 'About',
        to: '/about'
      }
    ]
  },
  getters: {
    pages: (state) => {
      return state.pages;
    },
    apiServer: state => {
      if(state.apiServerMode){
        return state.nodeServer;
      }else {
        return state.pythonServer;
      }
    },
    apiURL: (state,getters) => {
      return `http://${state.apiurl}:${getters.apiServer}/api`
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state=> (state.drawer = !state.drawer),
    changeAPIServer: (state,value) => {state.apiServerMode = value},
    changeAPIURL:(state, value) => {state.apiurl = value}
  },
  actions: {

  }
})
