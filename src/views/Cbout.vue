<template>
    <div class="cbout">
        <MyNav />
        <div class="jumbotron">
            <h1 class="display-3">历史记录</h1>
            <span class="badge badge-pill badge-success">所有历史记录都在这里</span>
        </div>
        <div class="container">
          <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">时间</th>
      <th scope="col">成绩</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item,index) in $store.state.cj" :key="index" >
      <th scope="row">{{index+1}}</th>
      <td>{{(index+1)*8}}秒</td>
      <td>{{item}}</td>
    </tr>
    
  </tbody>
</table>
        </div>
    </div>
</template>

<script>
import MyNav from "../components/MyNav.vue";

export default {
     components: {
     MyNav,
  },
}
</script>
<style lang="css">
    
</style>