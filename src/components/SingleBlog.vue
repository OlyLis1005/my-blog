<template>
  <div>
    <h1>{{blog.title}}</h1>
    <p>{{blog.type}} 分类： {{blog.category}}</p>
    <article>{{blog.content}}</article>
    <el-button icon="el-icon-edit" type="primary" @click="editBlog">编辑博客</el-button>
    <el-button icon="el-icon-delete" type="danger" @click="deleteBlog">删除博客</el-button>
  </div>
</template>

<script>
  export default {
    name: "single-blog",
    data() {
      return {
        id: this.$route.params.id,
        blog: {}
      }
    },
    created() {
      this.$axios.get('https://vuedemo-4728d.firebaseio.com/posts/' + this.id + '.json').then(res => {
        console.log(res);
        this.blog = res.data;
      })
    },
    methods: {
      editBlog: function () {
        this.$store.commit('editArticle', this.blog);
        this.$router.push('/addblog');
      },
      deleteBlog: function () {
        this.$confirm('此操作将永久删除该博客, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$axios.delete('https://vuedemo-4728d.firebaseio.com/posts/' + this.id + '.json').then(() => {
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
              this.$router.push('/bloglist')
            }, () => {
            this.$message({
              type: 'error',
              message: '删除失败!'
            });
            }
          );
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }
</script>

<style scoped>

</style>
