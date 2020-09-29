<template>
  <div class="container">
    <div class="form-group">
      <label for="">题目</label>
      <input
        type="text"
        class="form-control form-control-lg"
        v-model="nowtimu.title"
      />
    </div>
    <div class="row">
      <div class="col-lg-3">
        <div class="form-group">
          <label for="">A</label>
          <input type="text" class="form-control" v-model="nowtimu.ans.A" />
        </div>
      </div>
      <div class="col-lg-3">
        <div class="form-group">
          <label for="">B</label>
          <input type="text" class="form-control" v-model="nowtimu.ans.B" />
        </div>
      </div>
      <div class="col-lg-3">
        <div class="form-group">
          <label for="">C</label>
          <input type="text" class="form-control" v-model="nowtimu.ans.C" />
        </div>
      </div>
      <div class="col-lg-3">
        <div class="form-group">
          <label for="">D</label>
          <input type="text" class="form-control" v-model="nowtimu.ans.D" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="form-group ml-3">
        <label>正确答案</label>
        <select class="form-control" v-model="nowtimu.right">
          <option>A</option>
          <option>B</option>
          <option>C</option>
          <option>D</option>
        </select>
      </div>
      <button
        type="button"
        class="btn btn-outline-primary btn-lg btn-block"
        @click="creat"
      >
        提交
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Mytext",
  data() {
    return {
      nowtimu: {
        title: "",
        ans: [{ A: "" }, { B: "" }, { C: "" }, { D: "" }],
        right: "",
      },
    };
  },
  methods: {
    creat() {
      this.$store.dispatch("create", this.nowtimu);
      this.nowtimu = {
        title: "",
        ans: [{ A: "" }, { B: "" }, { C: "" }, { D: "" }],
        right: "",
      };
    },
  },
};
</script>