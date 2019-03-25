<template>
  <div class="blog-list">
    <div class="blogItem" v-for="(article, key) in articles" :key="key">
      <h2>{{article.title}}</h2>
      <p>{{article.content}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "blog-list",
    data() {
      return {
        articles: []
      }
    },
    created() {
      this.$axios.get('./../static/articles.json')
        .then(response => {
          this.articles = response.data || [];
        })
    }
  }
</script>

<style scoped>
  .blogItem {
    padding: 30px 20px;
    text-align: left;
    border-bottom: 1px #e9e9e9 solid;
    transition: background-color linear .2s;
  }
  .blogItem:hover {
    background-color: rgba(0,0,0,.1);
  }
</style>
