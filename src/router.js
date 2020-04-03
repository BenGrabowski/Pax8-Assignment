import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import CompanyPage from './Components/CompanyPage.vue';
import EditCompany from './Components/EditCompany.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: 'company/:id',
      name: 'CompanyPage',
      component: CompanyPage,
      props: true,
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: EditCompany,
      props: true,
    },
  ],
});
