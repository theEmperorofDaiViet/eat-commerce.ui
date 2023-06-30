<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h1 class="pt-3">Món ăn</h1>
                <router-link id="add-product" :to="{name : 'AddProduct'}" v-show="$route.name=='MerchantProducts'">
                    <button class="btn">Thêm món ăn mới</button>
                </router-link>
            </div>
        </div>
        <div class="row">
            <div v-for="product of products.filter(product => !product.disable)" :key="product.id" class="col-md-6 col-xl-4 col-12 pt-3  justify-content-around d-flex">
                <product-box :product="product"></product-box>
            </div>
        </div>
    </div>
</template>
<script>
import ProductBox from '../../components/Product/ProductBox'

export default {
    components : {ProductBox},
    props: ["baseURL", "products"],
    mounted(){
    if (this.$route.name=='AdminProduct' && !localStorage.getItem('token')) {
      this.$router.push({name : 'SignIn'});
    }
  }
}
</script>

<style scoped>
h1 {
    font-family: 'Roboto', sans-serif;
    color: #484848;
    font-weight: 700;
}

#add-product {
    float: right;
    font-weight: 500;
}
</style>