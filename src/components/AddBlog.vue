<template>
  <div v-if="!hasSubmit">
    <h1 class="add-blog-header">写博客</h1>
    <div class="add-blog-body">
      <el-form>
        <el-form-item>
          <el-input v-model="blog.title" placeholder="输入文章标题" />
        </el-form-item>
        <el-form-item>
          <el-input
            class="article-content-editor"
            type="textarea"
            :rows="10"
            resize="none"
            placeholder="输入文章内容"
            v-model="blog.content" />
        </el-form-item>
        <el-form-item>
          <div class="blog-type-category">
            <label>文章类型：
              <el-select class="blog-type-select" v-model="blog.type" placeholder="请选择">
                <el-option
                  v-for="item in options_1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </label>
            <label class="blog-type-select-2">博客分类:
              <el-select class="blog-type-select" v-model="blog.category" placeholder="请选择">
                <el-option
                  v-for="item in options_2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </label>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button class="submit-blog" type="primary"
                     icon="el-icon-circle-plus-outline"
                     v-on:click="post">发布博客</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
  <div v-else>
    <h1>发布成功</h1>
    <el-button type="primary" @click="continuePost">继续写博客</el-button>
  </div>
</template>

<script>
  import { Loading } from 'element-ui';
  import { mapState } from 'vuex'

  export default {
    name: "add-blog",
    props: {
      editArticle: Object
    },
    data() {
      return {
        options_1: [{
          value: '原创',
          label: '原创'
        },{
          value: '转载',
          label: '转载'
        },{
          value: '翻译',
          label: '翻译'
        }],
        options_2: [{
          value: 'vue',
          label: 'vue'
        }, {
          value: 'angular',
          label: 'angular'
        }, {
          value: 'react',
          label: 'React'
        }, {
          value: 'javascript',
          label: 'javascript'
        }, {
          value: 'css',
          label: 'css'
        }],
        hasSubmit: false
      }
    },
    methods: {
      post: function () {
        this.$axios.post('https://vuedemo-4728d.firebaseio.com/posts.json', this.blog)
          .then(response => {
            let loadingInstance = Loading.service({ fullscreen: true });
            setTimeout(() => {
              this.hasSubmit = true;
              loadingInstance.close();
              this.$store.commit('resetArticle');
            }, 500);
        });
        console.log('do sth');
      },
      continuePost: function () {
        this.hasSubmit = false
      }
    },
    computed: {
      blog() {
        return this.$store.state.currentArticle
      }
    }
    // computed: mapState({
    //   blog: state => state.currentArticle
    //   // 下面两种写法也可以
    //   // blog: 'currentArticle'
    //   // blog() {
    //   //   return this.$store.state.currentArticle
    //   // }
    // })
  }
</script>

<style lang="scss" scoped>
  .add-blog-header {
    text-align: left;
    padding: 20px;
  }
  .add-blog-body {
    padding: 0 20px 20px;
  }
  .article-content-editor {
  }
  .blog-type-category {
    text-align: left;
    & label {
      margin-right: 20px;
    }
  }
  .blog-type-select {
    margin-left: 10px;
  }
  .blog-type-select-2 {

  }
  .submit-blog {
    width: 100%;
  }
</style>
