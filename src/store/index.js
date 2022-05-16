import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tagsList: [
      {
        path: '/',
        name: 'home',
        label: '首页'
      }
    ],
    currentMenu: 'home',
    themeColor: '#545c64'
  },
  mutations: {
    selectMenu(state, payload) {
      if (payload.name !== 'home') {
        state.currentMenu = payload
        const result = state.tagsList.findIndex(
          (item) => item.name === payload.name
        )

        if (result === -1) {
          state.tagsList.push(payload)
        }
      } else {
        state.currentMenu = 'home'
      }
      console.log(state.currentMenu)
    },
    removeTag(state, payload) {
      const index = state.tagsList.findIndex(
        (item) => item.name === payload.name
      )
      if (index !== -1) {
        state.tagsList.splice(index, 1)
      }
    },
    changeThemeColor(state, val) {
      state.themeColor = val
    }
  },
  actions: {},
  modules: {}
})
