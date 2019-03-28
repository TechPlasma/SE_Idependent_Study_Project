import Vue from 'vue';
import Router from 'vue-router'; 
const Home = () => import('./views/Home.vue');
const About = () => import('./views/About');
const AllStories = () => import('./views/AllStories.vue');
const SubmitStory = () => import('./views/SubmitStory.vue');
const Story = () => import('./views/Story.vue');
const Error404 = () => import('./views/404.vue');

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
