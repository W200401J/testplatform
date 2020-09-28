<template>
  <div class="container">
    <div class="form-group">
      <label for="">题目</label>
      <input type="text" class="form-control form-control-lg" v-model="timu" />
    </div>
    <div class="row">
      <div class="col-lg-3">
        <div class="form-group">
          <label for="">A</label>
          <input type="text" class="form-control" v-model="A" />
        </div>
      </div>
      <div class="col-lg-3">
        <div class="form-group">
          <label for="">B</label>
          <input type="text" class="form-control" v-model="B" />
        </div>
      </div>
      <div class="col-lg-3">
        <div class="form-group">
          <label for="">C</label>
          <input type="text" class="form-control" v-model="C" />
        </div>
      </div>
      <div class="col-lg-3">
        <div class="form-group">
          <label for="">D</label>
          <input type="text" class="form-control" v-model="D" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="form-group ml-3">
        <label>正确答案</label>
        <select class="form-control" v-model="right">
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
export default {
  name: "Mytext",
  data() {
    return {
      timu: "",
      A: "",
      B: "",
      C: "",
      D: "",
      right: "",
      ti: {
        title: "",
        ans: [{ A: "" }, { B: "" }, { C: "" }, { D: "" }],
        right: "",
      },
    };
  },
  methods: {
      creat:function(){
        this.ti.title=this.timu,
        this.ti.ans[0].A=this.A,
        this.ti.ans[1].B=this.B,  
        this.ti.ans[2].C=this.C,  
        this.ti.ans[3].D=this.D,
        this.ti.right=this.right
        this.$store.dispatch("create", this.ti); 
        this.timu= "",
        this.A= "",
        this.B= "",
        this.C= "",
        this.D= "",
        this.right= ""   
      }
  },
};
</script>