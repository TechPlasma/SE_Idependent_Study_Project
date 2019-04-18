import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modules:{

    },
    drawer: false,
    apiurl: 'localhost',
    nodeServer: '5000',
    pythonServer: '6000',
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
