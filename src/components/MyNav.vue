<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
      <router-link class="nav-link" to="/">首页</router-link>
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >

      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="/cbout"> 历史记录 </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/bbout"> 错题集 </a>
          </li>
           <li class="nav-item active">
             <router-link class="nav-link" to="/about">扩展题库</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "MyNav",
  data() {
    return {};
  },
};
</script>