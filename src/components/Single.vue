<template>
  <div class="container">
    <!-- 这里的事算分用的 -->
    <div class="container" v-if="defen">
      <div class="row mt-2 pt-2">
        <h1 class="display-3">完成</h1>
      </div>
      <div class="row mt-2 pt-2" v-if="isScore">
        <h2 class="display-4">得分:{{ total }}</h2>
        <button
          type="button"
          @click="tozero"
          class="btn btn-primary btn-lg btn-block"
        >
          回到首页
        </button>
      </div>

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
     <!-- 进度条 -->
      <div class="progress">
            <div :class="colors" role="progressbar"
                :style="widthss"></div>
       </div>          
       <DateTime />
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
import DateTime from './DateTime';
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
      widths: 20,
      color: ["success", "info", "warning", "danger", "primary"],
    };
  },
   components: {
    
     DateTime,
  },
  computed: {
    colors: function () {
      if (this.widths <= 20) {
        return `progress-bar progress-bar-striped progress-bar-animated bg-${this.color[0]}`;
      }
      if (this.widths > 20 && this.widths <= 40) {
        return `progress-bar progress-bar-striped progress-bar-animated bg-${this.color[1]}`;
      }
      if (this.widths > 40 && this.widths <= 60) {
        return `progress-bar progress-bar-striped progress-bar-animated bg-${this.color[2]}`;
      }
      if (this.widths > 60 && this.widths <= 80) {
        return `progress-bar progress-bar-striped progress-bar-animated bg-${this.color[3]}`;
      }
      if (this.widths > 80) {
        return `progress-bar progress-bar-striped progress-bar-animated bg-${this.color[4]}`;
      }
    },
    widthss: function () {
      return `width:${this.widths}%`;
    },
   

    ...mapState(["nu", "chooses","cnu"]),
  },
  methods: {
    addnow() {
      this.widths += 20;
                    if(this.widths>100){
                        this.widths=100;
                    }
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
      //进度条进度
      this.widths -= 20;
                    if (this.widths < 0) {
                        this.widths = 0;
                    }
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
          }else{
            this.cnu.push(this.nu[entry[0]]);
            
          }
        }
        else {
          if (this.nu[entry[0]].right.join("") === entry[1].sort().join("")) {
            count++;
          }else{
            this.cnu.push(this.nu[entry[0]]);
          }
        }
      }
      this.total = (count / this.nu.length) * 100;
      this.total = this.total.toFixed(2);
      this.isScore = true;
      this.$store.state.cj.push(this.total);
     
    },
    tozero(){
      this.now=0,
      this.defen=false,
      this.isScore= false,
      this.choose= [],
      this.results= new Map()
      this.$store.dispatch("toZero",0);
      this.$router.push('/');
    }
  },
};
</script>