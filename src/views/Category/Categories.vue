<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h1 class="pt-3">Danh mục</h1>
                <router-link :to="{name: 'AddCategory'}" v-show="$route.name=='MerchantCategories'">
                    <button class="btn" style="float: right">Thêm danh mục mới</button>
                </router-link>
            </div>

        </div>
        <div class="row">
            <div v-for="category of categories" :key="category.id" class="col-xl-4 col-md-6 col-12 pt-3 d-flex">
                <category-box :category="category"></category-box>
            </div>
        </div>
    </div>
</template>
<script>
const axios = require("axios")
import CategoryBox from '../../components/Category/CategoryBox.vue'

export default {
    name: "Categories",
    components: {CategoryBox},
    data() {
        return {
            baseURL: 'http://localhost:8080',
            categories: []
        }
    },
    methods: {
        async getCategories() {
            await axios.get(`${this.baseURL}/categories/`)
                       .then(res => this.categories = res.data)
                       .catch(err => console.log(err))
        }
    },
    mounted() {
        this.getCategories();
        if (this.$route.name=='AdminCategory' && !localStorage.getItem('token')) {
            this.$router.push({name : 'Signin'});
    }
    }
};
</script>
<style scoped>

</style>