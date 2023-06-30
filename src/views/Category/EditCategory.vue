<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h1 class="pt-3">Chỉnh sửa thông tin danh mục</h1>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-3"></div>
        <div class="col-md-6 px-5 px-md-0">
        <form v-if="category">
            <div class="form-group">
            <label>Tên</label>
            <input type="text" class="form-control" v-model="category.name" required>
            </div>
            <div class="form-group">
            <label>Mô tả</label>
            <input type="text" class="form-control" v-model="category.description" required>
            </div>
            <div class="form-group">
            <label>Ảnh</label>
            <input type="url" class="form-control" v-model="category.imageUrl" required>
            </div>
            <button type="button" class="btn btn-primary" @click="editCategory">Lưu thay đổi</button>
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
            category: null
        }
    },
    props : ["baseURL", "categories"],
    methods : {
        async editCategory() {
            delete this.category["products"]
            await axios.patch(this.baseURL + "/categories/update/"+ this.id, this.category)
                        .then(() => {
                            this.$emit("fetchData");
                            this.$router.push({name:'MerchantCategories'});
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
        this.category = this.categories.find(category => category.id == this.id);
    }
}
</script>