import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modules:{

    },
    drawer: false,
    apiurl: 'localhost',
    nodeServer: '',
    pythonServer: '',
    apiServer: true,
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
      if(state.apiServer){
        return state.nodeServer;
      }else {
        return state.pythonServer;
      }
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state=> (state.drawer = !state.drawer),
    changeAPIServer: (state,value) => {state.apiServer = value},
    changeAPIURL:(state, value) => {state.apiurl = value}
  },
  actions: {

  }
})
