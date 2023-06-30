<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h1 class="pt-3">Thêm danh mục mới</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <form>                
                    <div class="form-group">
                        <label>Tên</label>
                        <input type="text" class="form-control" v-model="categoryName" required/>
                    </div>
                    <div class="form-group">
                        <label>Mô tả</label>
                        <textarea type="text" class="form-control" v-model="description" required></textarea>
                    </div>
                    <div class="form-group">
                        <label>Ảnh</label>
                        <input type="text" class="form-control" v-model="imageURL" required/>
                    </div>
                    <button type="button" class="btn btn-primary" @click="addCategory">Tạo</button>
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
            categoryName: null,
            description: null,
            imageURL: null
        }
    },
    methods: {
        async addCategory() {
            const newCategory = {
                name: this.categoryName,
                description: this.description,
                imageUrl: this.imageURL,
            }
            
            const baseURL = 'http://localhost:8080'

            await axios({
                method: 'post',
                url: `${baseURL}/categories/create`,
                data: JSON.stringify(newCategory),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(() => {
                sweetalert({
                    text: "Đã thêm danh mục!",
                    icon: "success"
                })
            }).catch(err => {
                console.log(err)
            })
        }
    },
    mounted(){
    if (!localStorage.getItem('token')) {
      this.$router.push({name : 'SignIn'});
    }
  }
};
</script>
<style scoped>

</style>