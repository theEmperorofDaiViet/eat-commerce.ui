<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4 class="pt-3">Chỉnh sửa thông tin món ăn</h4>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-3"></div>
        <div class="col-md-6 px-5 px-md-0">
        <form v-if="product">
            <div class="form-group">
                <label>Danh mục</label>
                <select class="form-control" v-model="product.categoryId" required>
                    <option v-for="category of categories" :key="category.id" :value="category.id">{{category.name}}</option>
                </select>
            </div>
            <div class="form-group">
                <label>Tên</label>
                <input type="text" class="form-control" v-model="product.name" required>
            </div>
            <div class="form-group">
                <label>Mô tả</label>
                <input type="text" class="form-control" v-model="product.description" required>
            </div>
            <div class="form-group">
                <label>Ảnh</label>
                <input type="url" class="form-control" v-model="product.imageUrl" required>
            </div>
            <div class="form-group">
                <label>Giá</label>
                <input type="number" class="form-control" v-model="product.price" required>
            </div>
            <button type="button" class="btn btn-primary" @click="editProduct">Lưu thay đổi</button>
        </form>
        </div>
        <div class="col-3"></div>
    </div>
</template>

<script>
const axios = require("axios")
const sweetalert = require("sweetalert")
export default {
    data(){
        return {
            product: null
        }
    },
    props : ["baseURL", "products", "categories"],
    methods : {
        async editProduct() {
            axios.patch(this.baseURL + "/products/edit/" + this.id, this.product)
                .then(() => {
                    this.$emit("fetchData");
                    this.$router.push({name : 'MerchantProducts'});
                    sweetalert({
                        text: "Cập nhật thành công!",
                        icon: "success",
                        closeOnClickOutside: false,
                    });
                })
                .catch(err => console.log(err));
        }
    },
    mounted() {
        if (!localStorage.getItem('token')) {
            this.$router.push({name : 'SignIn'});
            return;
        }
        this.id = this.$route.params.id;
        this.product = this.products.find(product => product.id == this.id);
    }
}
</script>

<style scoped>
h1 {
    font-family: 'Roboto', sans-serif;
    color: #484848;
    font-weight: 700;
}
</style>