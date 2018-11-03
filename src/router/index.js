import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloGit from '@/components/HelloGit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hw',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hgit',
      name: 'Hellogit',
      component: HelloGit
    }
  ]
})
