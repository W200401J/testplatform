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
class cmu {
  constructor(title, ans, right,cright) {
      this.title = title,
      this.ans = ans,
      this.right = right,
      this.cright=cright
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
    cnu:[
      new cmu("最长的河?",
      [{ A: "尼罗河" },
      { B: "亚马逊河" },
      { C: "长江" },
      { D: "黄河" },],
      "B","D"),
      new cmu("最帅的男明星?",
      [{ A: "宋小宝" },
      { B: "刘德华" },
      { C: "潘长江" },
      { D: "吴彦祖" },],
      "A","B"),
    ],
    now: 0,
    results: new Map(),
    chooses: []
  },
  mutations: {
    ADD_Ti(state, ti) {
      state.nu.push(ti),
        alert("到")

    },
    ADD_now(state, n) {
      if (state.now < state.nu.length - 1) {
        state.results.set(state.now, state.chooses);
        state.now = state.now + n
      } else {
        alert("没有下一题了")
      }
    },
    RED_now(state, n) {
      if (state.now > 0) {
        state.now = state.now - n
        // 保存用户答案
      } else {
        alert("没有上一题了")
      }
    },
    ADD_CH(state,n){
      state.chooses=n
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
    },
    addCh({ commit }, n){
      commit('ADD_CH',n)
    }
  },
  modules: {
  }
})
