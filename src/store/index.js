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
      new mu("历史上哪个人跑的最快?",
        [{ A: "曹操" },
        { B: "诸葛亮" },
        { C: "秦始皇" },
        { D: "程咬金" },],
        "A"
      ),
      new mu("小白加小白等于什么？",
        [{ A: "小白" },
        { B: "小白小白" },
        { C: "小小白" },
        { D: "小白兔" },],
        "D"
      ),
      new mu("米她妈是谁?",
        [{ A: "花" },
        { B: "稻谷" },
        { C: "种子" },
        { D: "水" },],
        "A"
      ),
      new mu("用椰子和西瓜打头谁比较痛?",
        [{ A: "椰子" },
        { B: "西瓜" },
        { C: "都痛" },
        { D: "头" },],
        "D"
      ), new mu("世界上什么东西比天高?",
        [{ A: "飞机" },
        { B: "火箭" },
        { C: "宇宙飞船" },
        { D: "心" },],
        "D"
      )
    ],
    cnu: [
      new mu("谁是最靓的仔",
        [{ A: "陈志宁" },
        { B: "志宁陈" },
        { C: "志宁" },
        { D: "老陈" },],
        "A"
      ),
    ],
    now: 0,
    results: new Map(),
    chooses: [],
    cj:[],
    
  },
  mutations: {
    ADD_Ti(state, ti) {
      state.nu.push(ti),
        alert("是否添加这道题？")
    },
    ADD_now(state, n) {
      if (state.now < state.nu.length - 1) {
        state.results.set(state.now, state.chooses);
        state.now = state.now + n
      } else {
        alert("做完了")
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
    ADD_CH(state, n) {
      state.chooses = n
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
    addCh({ commit }, n) {
      commit('ADD_CH', n)
    }
  },
  modules: {
  }
})
