import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import News from './views/News.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/news/:source',
      name: 'news',
      component: News,
      props: true
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
