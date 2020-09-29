<template>
  <div>
    <MyNav />
    <div class="jumbotron">
      <div class="container">
        
        <h1 class="display-3">欢迎来到趣味小测试</h1>

       

      </div>
    </div>
    <div class="container">
       <button type="button" @click="dati" class="btn btn-primary btn-lg btn-block">开始答题</button>
    </div>
  </div>
</template>


<script>
import MyNav from "../components/MyNav.vue";
export default {
  name: "Home",
  components: {
    MyNav,
  },
  methods: {
    dati(){
      this.$router.push('/dati');
    }
  },
}
</script>