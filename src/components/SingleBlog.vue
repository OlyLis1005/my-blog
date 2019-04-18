<template>
  <div>
    <h1>{{blog.title}}</h1>
    <p>{{blog.type}} 分类： {{blog.category}}</p>
    <article>{{blog.content}}</article>
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
    }
  }
</script>

<style scoped>

</style>
