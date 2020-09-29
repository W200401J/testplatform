<template>
  <div class="home mt-5 ">
    <div class="container">
      <div class="jumbotron">
        <Single  />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Single from "../components/Single.vue";
import MyNav from "../components/MyNav.vue";
export default {
  name: "Home",
  components: {
    Single,
     MyNav,
  },
  data() {
    return {
     
    };
  },
};
</script>
