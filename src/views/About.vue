<template>
  <div class="about">
    <MyNav />
    <Mytext />
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