import { createRouter, createWebHashHistory } from 'vue-router'

import AboutView from './views/AboutView.vue'
import ContactView from './views/ContactView.vue'
import HomeView from './views/HomeView.vue'
import CheckoutView from './views/CheckoutView.vue'
import FavoriteView from './views/FavoriteView.vue'
import HelpView from './views/HelpView.vue'
import MyPageView from './views/MyPageView.vue'
import LoginView from './views/LoginPage.vue'
import SignupView from './views/SignupPage.vue'
import ProductView from './views/ProductView.vue'
import FilterSearchView from './views/FilterSearchView.vue'
import CartView from './views/CartView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: AboutView,
      path: '/about'
    },
    {
      component: ContactView,
      path: '/contact'
    },
    {
      component: HomeView,
      path: '/'
    },
    {
      component: CheckoutView,
      path: '/checkout'
    },
    {
      component: FavoriteView,
      path: '/favorite'
    },
    {
      component: HelpView,
      path: '/help'
    },
    {
      component: MyPageView,
      path: '/mypage'
    },
    {
      component: LoginView,
      path: '/login'
    },
    {
      component: SignupView,
      path: '/signup'
    },
    {
      component: ProductView,
      path: '/product'
    },
    {
      component: FilterSearchView,
      path: '/search/:filter'
    },
    {
      component: CartView,
      path: '/cart'
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})
