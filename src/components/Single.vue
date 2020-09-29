<template>
  <div class="container">
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
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Single",
  data() {
    return {
      isdisable: true,
      choose: [],
      results: new Map(),
      now: 0,
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
  },
};
</script>