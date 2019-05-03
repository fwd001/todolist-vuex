import Vue from 'vue'
import Vuex from 'vuex'
import { ftruncate } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
    index: 0
  },
  mutations: {
    add (state, payload) {
      let list = [...state.list]
      list.unshift(payload.item)
      state.list = [...list]
    },
    addIndex (state) {
      state.index = state.index + 1
    },
    completed (state, payload) {
      let list = [...state.list]
      let item = list.find(v => v.id === payload.id)
      item.isCompleted = !item.isCompleted
      state.list = [...list]
    },
    del (state, payload) {
      // let list = state.list.filter(v => v.id !== payload.id)
      let list = state.list.filter(function(v) {
        return v.id !== payload.id
      })
      state.list = list
    },
    clear(state) {
      let list = state.list.filter(v => !v.isCompleted)
      state.list = list
    }
  },
  getters: {
    times: state => {
      const list = state.list.filter(v => !v.isCompleted)
      return list.length
    }
  },
  actions: {

  }
})
