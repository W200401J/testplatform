<template>
  <div class="bbout">
    <MyNav />
    <div class="jumbotron">
      <h1 class="display-3">错题集</h1>
      <span class="badge badge-pill badge-success">错题数目：{{cnu.length}}</span>
    </div>
    <span class="badge badge-pill badge-danger">以下是做错的题目</span>
    <div class="container">
      <div class="jumbotron" v-for="(item, index) in cnu" :key="index">
          <h1 class="display-3">{{item.title}}</h1>
          <h3 class="lead" v-for="(item, index) in item.ans" :key="index">
            <span class="badge badge-pill badge-success">{{
              String(Object.keys(item))
            }}</span>
            {{ String(Object.values(item)) }}
          </h3>
          <h3>正确答案是：{{ item.right }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import MyNav from "../components/MyNav.vue";
import { mapState } from "vuex";

export default {
  components: {
    MyNav,
  },
  name: "Bbout",
  computed: {
    ...mapState(["cnu", "now"]),
  },
};
</script>
<style lang="css">
</style>