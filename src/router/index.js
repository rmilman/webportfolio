import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import blog from '@/components/blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      component: HelloWorld
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    }
  ]
})
