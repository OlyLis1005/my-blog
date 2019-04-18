// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui'
import axios from 'axios';
import { store } from "./store/store";
// import firebase from 'firebase'

import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;
Vue.use(ElementUI);

// 自定义指令
Vue.directive('rainbow', {
  bind(el, binding, vnode) {
    el.style.color = '#' + Math.random().toString(16).slice(2, 8);
  }
});

/* eslint-disable no-new */
new Vue({
  store: store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

// // Initialize Firebase
// var config = {
//   apiKey: "AIzaSyDmf3JFH6igGsDVO-A02lSAbW5K7FizgBg",
//   authDomain: "vuedemo-4728d.firebaseapp.com",
//   databaseURL: "https://vuedemo-4728d.firebaseio.com",
//   projectId: "vuedemo-4728d",
//   storageBucket: "vuedemo-4728d.appspot.com",
//   messagingSenderId: "714286874431"
// };
// firebase.initializeApp(config);
