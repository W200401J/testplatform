<template>
  <div class="about mt-5">
    <div class="container">
      <div class="jumbotron">
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