import { createRouter, createWebHashHistory } from 'vue-router'

import AboutView from './views/AboutView.vue'
import ContactView from './views/ContactView.vue'
import DeliveryView from './views/DeliveryView.vue'
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
import FAQView from './views/FAQView.vue'

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
      component: DeliveryView,
      path: '/delivery'
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
    },
    {
      component: FAQView,
      path: '/FAQ'
    }
  ],
  scrollBehavior() {
    // When clicking on a router link - reset scroll to top
    return { top: 0 }
  }
})
