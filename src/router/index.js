import { createRouter, createWebHistory } from 'vue-router'
import AddCategory from '../views/Category/AddCategory.vue'
import Categories from '../views/Category/Categories.vue'
import ListProducts from '../views/Category/ListProducts.vue'
import HomeMerchant from '../views/Merchant/HomeMerchant.vue'
import Products from '../views/Product/Products.vue'
import AddProduct from '../views/Product/AddProduct.vue'
import EditCategory from '../views/Category/EditCategory.vue'
import EditProduct from '../views/Product/EditProduct.vue'
import Home from '../views/Home.vue'
import ShowDetails from '../views/Product/ShowDetails.vue'
import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'
import WishList from '../views/Product/WishList.vue'
import Cart from '../views/Cart/Cart.vue'
import Success from '../views/Payment/Success.vue'
import Failed from '../views/Payment/Failed.vue'
import Checkout from '../views/Checkout/Checkout.vue'
import Order from '../views/Orders/Order.vue'
import OrderDetails from '../views/Orders/OrderDetails.vue'
import SignUpMerchant from '../views/Merchant/SignUpMerchant.vue'
import SignInMerchant from '../views/Merchant/SignInMerchant.vue'
import MerchantOrder from '../views/Merchant/MerchantOrder.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // Customer
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/categories/:id',
    name: 'ListProducts',
    component: ListProducts
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/products/:id',
    name: 'ShowDetails',
    component: ShowDetails
  },
  {
    path: '/wishlist',
    name: 'WishList',
    component: WishList
  },
  {
    path : '/cart',
    name : 'Cart',
    component : Cart
  },
  {
    path: '/payment/success',
    name: 'PaymentSuccess',
    component:Success
  },
  {
    path: '/payment/failed',
    name: 'FailedPayment',
    component:Failed
  },
  {
    path : '/checkout',
    name : 'Checkout',
    component : Checkout
  },
  {
    path : '/order',
    name : 'Order',
    component : Order
  },
  {
    path : '/order/:id',
    name : 'OrderDetails',
    component : OrderDetails
  },
  // Merchant
  {
    path: '/merchant',
    name: 'HomeMerchant',
    component: HomeMerchant
  },
  {
    path: '/merchant/signin',
    name: 'SignInMerchant',
    component: SignInMerchant
  },
  {
    path: '/merchant/signup',
    name: 'SignUpMerchant',
    component: SignUpMerchant
  },
  {
    path: '/merchant/categories/add',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/merchant/categories',
    name: 'MerchantCategories',
    component: Categories
  },
  {
    path: '/merchant/categories/edit/:id',
    name: 'EditCategory',
    component: EditCategory
  },
  {
    path: '/merchant/products',
    name: 'MerchantProducts',
    component: Products
  },
  {
    path: '/merchant/products/add',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/merchant/products/edit/:id',
    name: 'EditProduct',
    component: EditProduct
  },
  {
    path: '/merchant/orders/',
    name: 'MerchantOrder',
    component: MerchantOrder
  }

  // Driver

  // Admin 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
