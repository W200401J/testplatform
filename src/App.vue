<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
    <a class="navbar-brand" href="/">首页</a>
    <button
      class="navbar-toggler d-lg-none"
      type="button"
      data-toggle="collapse"
      data-target="#collapsibleNavId"
      aria-controls="collapsibleNavId"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a class="nav-link" href="/about">
            单选题
          </a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="/bbout">
            多选题
          </a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="/cbout">
            历史结果
          </a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="text"
          placeholder="搜索题目、用户"
        />
        <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
          搜索
        </button>
      </form>
    </div>
  </nav>
    <router-view/>
  </div>
</template>



<style>

</style>
