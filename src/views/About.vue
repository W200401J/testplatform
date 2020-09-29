<template>
  <div class="about">
    <MyNav />
    <div class="container">
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h2 class="display-3">扩展题库</h2>
        </div>
      </div>
      <div class="jumbotron mt-5">
        <Mytext />
      </div>
    </div>
  </div>
</template>


<script>
import Mytext from "../components/Mytext.vue";
import MyNav from "../components/MyNav.vue";

export default {
  components: {
    Mytext,
    MyNav,
  },
};
</script>