import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
class mu {
  constructor(title, ans, right) {
      this.title = title,
      this.ans = ans,
      this.right = right
  }
}
export default new Vuex.Store({
  state: {
    nu: [
      new mu("最长的河?",
        [{ A: "尼罗河" },
        { B: "亚马逊河" },
        { C: "长江" },
        { D: "黄河" },],
        "B"
      )
    ],
    now: 0,
  },
  mutations: {
    ADD_Ti(state, ti) {
      state.nu.push(ti),
      alert("到")

    },
    ADD_now(state, n) {
      if (state.now < state.nu.length - 1) {
        state.now = state.now + n
      } else {
        alert("没有下一题了")
      }
    },
    RED_now(state, n) {
      if (state.now > 0) {
        state.now = state.now - n
      } else {
        alert("没有上一题了")
      }
    }
  },
  actions: {
    create({ commit }, ti) {
      commit('ADD_Ti', ti)
    },
    redNow({ commit }, ti) {
      commit('RED_now', ti)
    },
    addNow({ commit }, n) {
      commit('ADD_now', n)
    }
  },
  modules: {
  }
})
