<template>
  <NavBar :cartCount="cartCount"
    @resetCartCount="resetCartCount"
    v-if="!['SignUp', 'SignIn', 'SignUpMerchant', 'SignInMerchant'].includes($route.name)"
    />
  <div style="min-height: 60vh">
    <router-view v-if="products && categories" :baseURL="baseURL" :categories="categories" :products="products" @fetchData="fetchData"/>
  </div>
  <Footer/>
</template>

<script>
  import NavBar from './components/NavBar.vue';
  import Footer from './components/Footer.vue';
  import axios from 'axios';
  export default {
    data() {
      return {
        baseURL: 'http://localhost:8080',
        products: [],
        categories: [],
        key: 0,
        token: null,
        role: null,
        cartCount: 0,
      }
    },
    components: { Footer, NavBar },
    methods: {
      async fetchData() {
        await axios.get(this.baseURL + "/categories/")
                   .then(res => this.categories = res.data)
                   .catch(err => console.log(err))

        await axios.get(this.baseURL + "/products/")
                   .then(res => this.products = res.data.filter(product => !product.disable))
                   .catch(err => console.log(err))
                   if (this.token) {
        await axios.get(`${this.baseURL}/cart/?token=${this.token}`).then(
          (response) => {
            if (response.status == 200) {
              // update cart
              this.cartCount = Object.keys(response.data.cartItems).length;
            }
          },
          (error) => {
            console.log(error);
          }
        );
      }
    },
    resetCartCount() {
      this.cartCount = 0;
    },
    },
    mounted() {
      this.token = localStorage.getItem('token');
      this.role = localStorage.getItem('role');
      this.fetchData();
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
