import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AddBlog from '../components/AddBlog'
import SingleBlog from '../components/SingleBlog'
import BlogList from '../components/BlogList'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/home', name: 'home', component: Home},
    {path: '/addblog', name: 'add-blog', component: AddBlog},
    {path: '/blog/:id', name: 'single-blog', component: SingleBlog},
    {path: '/bloglist', name: 'blog-list', component: BlogList},
    {path: '*', redirect: 'home'}
  ]
})
