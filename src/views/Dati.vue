<template>
  <div class="home">
    <!-- <MyNav /> -->
    <div class="jumbotron">
      <h1 class="display-3">脑筋急转弯测试平台</h1>
      <span class="badge badge-pill badge-danger">请开始答题</span>
    </div>
    <div class="container">
      <div class="jumbotron mt-5">
        <Single  />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Single from "../components/Single.vue";
// import MyNav from "../components/MyNav.vue";
export default {
  name:"Dati",
  components: {
    Single,
    //  MyNav,
  },
  data() {
    return {
     
    };
  },
};
</script>
