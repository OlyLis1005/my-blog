<template>
  <div class="blog-list">
    <!--<router-link v-for="(article, key) in articles" :key="key" to="/addblog" @click="editArticle(article)">-->
      <!--<div class="blogItem">-->
        <!--<h2>{{article.title}}</h2>-->
        <!--<p>{{article.content}}</p>-->
      <!--</div>-->
    <!--</router-link>-->
    <router-link tag="div" class="blogItem" v-for="(article, key) in articles" :key="key" v-bind:to="'/blog/' + article.id">
      <h2>{{article.title}}</h2>
      <p>{{article.content}}</p>
    </router-link>
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
      this.$axios.get('https://vuedemo-4728d.firebaseio.com/posts.json')
        .then(response => {
          // console.log(response);
          let data = response.data || [];
          let blogs = [];
          for(let key in data) {
            data[key].id = key;
            blogs.push(data[key])
          }
          console.log(blogs);
          this.articles = blogs;
        });
    },
    methods: {
      editArticle: function (article) {
        this.$router.push('/addblog');
        this.$store.commit('editArticle', article);
      }
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
