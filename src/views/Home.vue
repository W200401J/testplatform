<template>
  <div class="home">
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
export default {
  name: "Home",
  components: {
    Single,
  },
  data() {
    return {
     
    };
  },
};
</script>
