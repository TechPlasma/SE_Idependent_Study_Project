import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
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
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state=> (state.drawer = !state.drawer)
  },
  actions: {

  }
})
