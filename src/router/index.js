import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SignUpForm from '@/components/Auth/SignUpForm'
import LogInForm from '@/components/Auth/LogInForm'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      component: LogInForm
    },
    {
      path: '/signup',
      name: 'SignUpForm',
      component: SignUpForm
    }
  ]
})
