import Vue from 'vue'
import VueRouter from 'vue-router'
import Authorization from '../pages/Authorization'
import Analytics from '../pages/Analytics'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Authorization',
    component: Authorization
  },
  {
    path: '/analytics',
    name: 'Analytics',
    component: Analytics
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach(function (to, from, next) {
  let isAuth = !!localStorage.getItem('leadhit-site-id');
  if (to.name === 'Analytics' && !isAuth) {
    router.push('/');
    return;
  }
  next();
});

export default router
