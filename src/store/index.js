import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nu: [
      {
        title: "最长的河?",
        ans: [
          { A: "尼罗河" },
          { B: "亚马逊河" },
          { C: "长江" },
          { D: "黄河" },
        ],
        right: "B",
      },
    ],
    now: 0,
  },
  mutations: {
    ADD_Ti(state, ti) {
      state.nu.unshift(ti)
    },
    ADD_now(state,n){
      if(state.now<state.nu.length-1){
        state.now=state.now+n
      }else{
        alert("没有下一题了")
      }
     
    }
  },
  actions: {
    create({commit}, ti) {
      commit('ADD_Ti', ti)
   },
   addNow({commit}, n) {
    commit('ADD_now', n)
 }
  },
  modules: {
  }
})
