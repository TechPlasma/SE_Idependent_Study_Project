import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About';
import AllStories from './views/AllStories.vue';
import SubmitStory from './views/SubmitStory.vue';
import Story from './views/Story.vue';
import Error404 from './views/404.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      alias:'/home'
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/AllStories',
      name: 'AllStories',
      component: AllStories
    },
    {
      path: '/SubmitStory',
      name: 'SubmitStory',
      component: SubmitStory
    },
    {
      path: '/Story/:id',
      name: 'Story',
      component: Story
    }, 
    {
      path: '/404',
      name: '404',
      component: Error404
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
