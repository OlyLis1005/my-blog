<template>
    <nav class="navbar-main">
      <div class="navbar-logo">杜欣忠的博客</div>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" border-bottom>
        <el-submenu index="1">
          <template slot="title">博客</template>
          <el-menu-item index="home"><router-link tag="span" to="/home">主页</router-link></el-menu-item>
          <el-menu-item index="blog-list"><router-link tag="span" to="/bloglist">文章列表</router-link></el-menu-item>
        </el-submenu>
        <el-menu-item index="add-blog"><router-link tag="span" to="/addblog">写博客</router-link></el-menu-item>
      </el-menu>
    </nav>
</template>

<script>
  export default {
    name: "app-header",
    data() {
      return {
        activeIndex: this.$route.name
      }
    },
    created() {
      console.log(this.activeIndex);
    }
  }
</script>

<style lang="scss" scoped>
  .navbar-main {
    display: flex;
  }

  .navbar-logo {
    color: #555;
    padding: 0 20px;
    font-size: 20px;
    height: 60px;
    line-height: 60px;
    border: {
      bottom: 1px solid #e6e6e6;
    }
  }

  .navbar-main {
    .el-menu-demo {
      flex-grow: 1;
    }
  }
  .el-menu {
    background-color: transparent;
  }

</style>
