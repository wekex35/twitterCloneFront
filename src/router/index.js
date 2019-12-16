import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SignUpForm from '@/components/Auth/SignUpForm'
import LogInForm from '@/components/Auth/LogInForm'
import UserProfileSettings from '@/components/User/Settings/UserProfileSettings'
import UserPasswordSettings from '@/components/User/Settings/UserPasswordSettings'
import Home from '@/components/Home'



Vue.use(Router)

export default new Router({
  routes: [
  {
    path: '/',
    component: Home
},
    {
        path: '/settings/profile',
        component: UserProfileSettings
    },
    {
        path: '/settings/password',
        component: UserPasswordSettings
    },
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
