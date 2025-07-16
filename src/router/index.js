import { createRouter, createWebHistory } from 'vue-router';
import ListProductTypes from '../pages/ListProductTypes.vue';
import CreateProductType from '../pages/CreateProductType.vue';
import EditProductType from '../pages/EditProductType.vue';

const routes = [
  { path: '/', name: 'list', component: ListProductTypes },
  { path: '/create', name: 'create', component: CreateProductType },
  { path: '/edit/:id', name: 'edit', component: EditProductType, props: true }
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
