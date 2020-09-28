<template>
  <div class="container">
    <h1 class="display-3">{{ nu[now].title }}</h1>
    <hr class="my-2" />
    <div
      class="row mt-2 pt-2"
      v-for="(item, index) in nu[now].ans"
      :key="index"
    >
      <div class="form-check">
        <label class="form-check-label">
          <input
            type="radio"
            class="form-check-input"
            name="right"
            :value="String(Object.keys(item))"
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
          type="button"
          class="btn btn-primary btn-lg btn-block"
          @click="addnow"
        >
          下一题
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Single",
  computed: {
    ...mapState(["nu", "now"]),
  },
  methods: {
     addnow(){
      this.$store.dispatch("addNow", 1); 
    }
  },
   
 
};
</script>