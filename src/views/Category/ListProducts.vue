<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h1 class="pt-3">{{category.name}}</h1>
                <h5>{{msg}}</h5>
                
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center">
                <img v-show="len == 0" class="img-fluid pt-5" src="../../assets/sorry.png" alt="Sorry">
            </div>
        </div>

        <div class="row">
            <div v-for="product of category.products.filter(product => !product.disable)" :key="product.id" class="col-md-6 col-xl-4 col-12 pt-3  justify-content-around d-flex">
                <ProductBox :product="product"></ProductBox>
            </div>
        </div>
    </div>
</template>

<script>
import ProductBox from '../../components/Product/ProductBox';
export default {
    name: 'ListProducts',
    data(){
        return {
            id : null,
            categoryIndex : null,
            category : {
                products: []
            },
            len : 0,
            msg : null
        }
    },
    components : {ProductBox},
    props : [ "baseURL" , "categories" ],
    mounted() {
        this.id = this.$route.params.id;
        this.categoryIndex = this.categories.findIndex(category => category.id == this.id);
        this.category = this.categories[this.categoryIndex];

        this.len = this.category.products.filter(product => !product.disable).length;
        if(this.len == 0) {
            this.msg = "Xin lỗi, không tìm thấy món ăn nào :'(";
        } else {
            this.msg = "Tìm thấy " + this.len + " món ăn";
        }
    }
}
</script>

<style>
h4 {
    font-family: 'Roboto', sans-serif;
    color: #484848;
    font-weight: 700;
}

h5 {
    font-family: 'Roboto', sans-serif;
    color: #686868;
    font-weight: 300;
}
</style>