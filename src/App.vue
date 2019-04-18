<template>
  <div id="app">
    <el-container class="container">
      <el-header class="header">
        <app-header />
      </el-header>
      <el-main class="content">
        <router-view/>
      </el-main>
      <el-footer class="footer">
        <div>
          页脚还没有东西
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>

import AppHeader from './components/AppHeader'

export default {
  name: 'App',
  components: {
    'app-header': AppHeader
  },
  mounted: function () {
    let isFirstCome = localStorage.getItem('first_come');
    // console.log(isFirstCome, typeof isFirstCome);
    if(isFirstCome && isFirstCome !== 'false') {
      setTimeout(() => {
        alert('欢迎新人');
      }, 0);
      localStorage.setItem('first_come', 'false');
    }
  }
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #555;
    position: relative;
    background-image: linear-gradient(to right top, #ffcc00 50%, #eee 50%);
    background-size: 100% calc(100% - 100vh + 5px);
    background-repeat: no-repeat;
    z-index: 1;
    &::after {
      content: "";
      position: fixed;
      top: 5px;
      left: 0;
      bottom: 0;
      right: 0;
      background: #fff;
      z-index: -1;
    }
  }
  * {
    margin: 0;
    padding: 0;
  }
  html, body {
    width: 100%;
    height: 100%;
  }
</style>
