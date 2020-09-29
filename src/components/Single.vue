<template>
  <div class="container">
    <div class="container" v-if="defen">
      <div class="row mt-2 pt-2">
        <h1 class="display-3">完成</h1>
      </div>
      <div class="row mt-2 pt-2" v-if="isScore">
        <h2 class="display-4">得分:{{ total }}</h2>
      </div>
      <!--正确答案与用户提交答案的对比-->
      <div class="row mt-2 pt-2" v-else>
        <div class="col-6">
          <button
            type="button"
            @click="up(true)"
            class="btn btn-danger btn-lg btn-block"
          >
            返回
          </button>
        </div>
        <div class="col-6">
          <button
            type="button"
            @click="score"
            class="btn btn-primary btn-lg btn-block"
          >
            提交
          </button>
        </div>
      </div>
    </div>

    <div class="container" v-else>
      <h1 class="display-3">{{ nu[now].title }}</h1>
      <hr class="my-2" />
      <div
        class="row mt-2 pt-2"
        v-for="(item, index) in nu[now].ans"
        :key="index"
      >
        <div class="form-check">
          <label class="form-check-label" @click="isdis">
            <input
              type="radio"
              class="form-check-input"
              name="right"
              :value="String(Object.keys(item))"
              v-model="choose"
            />
            <span class="badge badge-pill badge-primary">{{
              String(Object.keys(item))
            }}</span>
            {{ String(Object.values(item)) }}
          </label>
        </div>
      </div>
      <div class="row mt-2 pt-2">
        <div class="col-6">
          <button
            @click="rednow"
            type="button"
            :class="[
              'btn',
              'btn-danger',
              'btn-lg',
              'btn-block',
              now === 0 ? 'disabled' : '',
            ]"
          >
            上一题
          </button>
        </div>
        <div class="col-6">
          <button
            @click="addnow"
            type="button"
            class="btn btn-primary btn-lg btn-block"
            :disabled="isdisable"
          >
            下一题
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Single",
  data() {
    return {
      defen: false,
      isScore: false,
      isdisable: true,
      choose: [],
      results: new Map(),
      now: 0,
      total: 0,
    };
  },
  computed: {
    ...mapState(["nu", "chooses"]),
  },
  methods: {
    addnow() {
      this.results.set(this.now, this.choose);
      this.now++;
      this.$store.dispatch("addCh", this.choose);
      this.$store.dispatch("addNow", 1);
      this.isdisable = true;
      if (this.results.get(this.now)) {
        this.choose = this.results.get(this.now);
      } else {
        this.choose = [];
      }
      if (this.now === this.nu.length) {
        this.defen = true;
      }
    },
    rednow() {
      this.$store.dispatch("redNow", 1);
      this.now--;
      //获得前一题已选择的答案
      this.choose = this.results.get(this.now);
    },
    isdis() {
      this.isdisable = false;
    },
    up(isEnd) {
      if (this.now === 0) {
        return;
      }
      if (isEnd) {
        this.defen = false;
      }
      this.now--;
      //获得前一题已选择的答案
      this.choose = this.results.get(this.now);
    },
    score() {
      let count = 0;
      for (let entry of this.results) {
        if (this.nu[entry[0]].right.length === 1) {
          if (this.nu[entry[0]].right === entry[1]) {
            count++;
          }
        } else {
          if (this.nu[entry[0]].right.join("") === entry[1].sort().join("")) {
            count++;
          }
        }
      }
      this.total = (count / this.nu.length) * 100;
      this.total = this.total.toFixed(2);
      this.isScore = true;
    },
  },
};
</script>