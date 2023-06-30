<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h1 class="pt-3">Thêm món ăn mới</h1>
            </div>
        </div>

        <div class="row">
            <div class="col-3"></div>
            <div class="col-md-6 px-5 px-md-0">
                <form>
                    <div class="form-group">
                        <label>Danh mục</label>
                        <select class="form-control" v-model="categoryId" required>
                        <option v-for="category of categories" :key="category.id" :value="category.id">{{category.name}}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Tên</label>
                        <input type="text" class="form-control" v-model="name" required>
                    </div>
                    <div class="form-group">
                        <label>Mô tả</label>
                        <input type="text" class="form-control" v-model="description" required>
                    </div>
                    <div class="form-group">
                        <label>Ảnh</label>
                        <input type="url" class="form-control" v-model="imageUrl" required>
                    </div>
                    <div class="form-group">
                        <label>Giá</label>
                        <input type="number" class="form-control" v-model="price" required>
                    </div>
                    <button type="button" class="btn btn-primary" @click="addProduct">Tạo</button>
                </form>
            </div>
            <div class="col-3"></div>
        </div>
    </div>
</template>

<script>
const axios = require("axios")
const sweetalert = require("sweetalert")
export default {
    data() {
        return {
            id : null,
            categoryId : null,
            name : null,
            description : null,
            imageUrl : null,
            price : null
        }
    },
    props : ["baseURL", "products", "categories"],
    methods: {
        async addProduct() {
            const newProduct = {
                id : this.id,
                categoryId : this.categoryId,
                name : this.name,
                description : this.description,
                imageUrl : this.imageUrl,
                price : this.price
            }

            await axios({
                method: 'post',
                url: this.baseURL + "/products/add",
                data : JSON.stringify(newProduct),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then( () => {
                this.$emit("fetchData");
                this.$router.push({name : 'MerchantProducts'});
                sweetalert({
                    text: "Product has been added successfully!",
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
</style>