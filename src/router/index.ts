import { createRouter, createWebHistory } from 'vue-router'

// 取/pages文件夹下所有.vue文件，作为路由
// const files = import.meta.glob('../pages/*.vue');
const files = import.meta.glob('../pages/**/*.vue')
const routes: Array<any> = [
  {
    path: '/Home',
    component: () => import('../pages/Home.vue'),
  },
];
Object.keys(files).forEach((fileName) => {
  const path = fileName.replace(/(\.\.\/pages|\.vue|)/g, '')
  routes.push({ path: `${path}`, component: files[fileName] })
});

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;