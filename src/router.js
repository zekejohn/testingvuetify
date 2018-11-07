import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import PagedForm from './views/PagedForm.vue';
import DetailsForm from './views/DetailsForm.vue';
import DetailsForm2 from './views/DetailsForm2.vue';
import DetailsForm3 from './views/DetailsForm3.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/pagedform',
      name: 'pagedform',
      component: PagedForm,
      children: [
        {
          path: 'detailsform',
          component: DetailsForm,
        },
        {
          path: 'detailsform2',
          component: DetailsForm2,
        },
        {
          path: 'detailsform3',
          component: DetailsForm3,
        },
      ],
    },
  ],
});
