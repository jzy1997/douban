import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login'
import Regist from '../pages/regist'
import Index from '../pages/index'
import Route from '../pages/route'
import Movie from '../pages/movie'
import Book from '../pages/book'
import Status from '../pages/status'
import Group from '../pages/group'
import movieDetails from '../pages/movieDetails'
import bookDetails from '../pages/bookDetails'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/regist',
      name: 'Regist',
      component: Regist
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/route',
      name: 'Route',
      component: Route
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    {
      path: '/status',
      name: 'Status',
      component: Status
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: "/details/movie",
      name: 'movieDetails',
      component: movieDetails
    },
    {
      path: "/details/book",
      name: 'bookDetails',
      component: bookDetails
    },
    {
      path: "/*",
      redirect: "/index"
    }
  ]
})
