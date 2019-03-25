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
                     v-on:click.prevent="post">发布博客</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
  <div v-else>
    <h1>发布成功</h1>
  </div>
</template>

<script>
  import { Loading } from 'element-ui';

  export default {
    name: "add-blog",
    data() {
      return {
        blog: {
          title: '',
          content: '',
          type: '',
          category: ''
        },
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
      post: function() {
        this.$axios.post('http://jsonplaceholder.typicode.com/posts', {
          title: this.blog.title,
          body: this.blog.content,
          userId: 1
        }).then(response => {
          console.log(response);
          let loadingInstance = Loading.service({ fullscreen: true })
          setTimeout(() => {
            this.hasSubmit = true;
            loadingInstance.close();
          }, 2000);
        })
      }
    }
  }
</script>

<style scoped>
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
  }
  .blog-type-select {
    margin-left: 10px;
  }
  .blog-type-select-2 {
    margin-left: 20px;
  }
  .submit-blog {
    width: 100%;
  }
</style>
