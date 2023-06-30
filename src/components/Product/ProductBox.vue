<template>
    <div class="card h-100 w-100">
        <div class="embed-responsive embed-responsive-16by9">
            <img class="card-img-top embed-responsive-item" :src="product.imageUrl"/>
        </div>
        <div class="card-body">
            <router-link :to="{ name: 'ShowDetails', params: { id: product.id } }">
                <h5 class="card-title">{{ product.name }}</h5>
            </router-link>
            <p class="card-text">{{ product.price?.toLocaleString('vi', {style : 'currency', currency : 'VND'}) }}</p>
            <p class="card-text font-italic">
                {{ product.description.substring(0, 65) }}...
            </p>
            <router-link id="edit-product" :to="{ name: 'EditProduct', params: { id: product.id } }"
                        v-show="$route.name == 'MerchantProducts'">Chỉnh sửa</router-link>
            <a id="delete-product" href="#" @click="requestDelete(product.id)" v-show="$route.name == 'MerchantProducts'">Xoá</a>
        </div>
    </div>
  </template>
  
<script>
const axios = require("axios")
const sweetalert = require("sweetalert")
export default {
name: "ProductBox",
props: ["baseURL", "product"],
methods: {
    showDetails() {
    this.$router.push({
        name: "ShowDetails",
        params: { id: this.product.id },
    });
    },
    async deleteProduct() {
        axios.delete(this.baseURL + "/products/delete/" + this.id)
                .then(() => {
                    this.$emit("fetchData");
                    this.$router.push({name : 'MerchantProducts'});
                    sweetalert({
                        text: "Đã xoá sản phẩm!",
                        icon: "success",
                        closeOnClickOutside: false,
                    });
                })
                .catch(err => console.log(err));
    },
    requestDelete(id) {
        sweetalert({
            title: "Xác nhận xoá",
            text: "Bạn có chắc chắn muốn xoá sản phẩm này không?",
            icon: "warning",
            buttons: [
                'Huỷ',
                'Xác nhận'
            ],
            dangerMode: true,
            }).then(function(isConfirm) {
                if (isConfirm) {
                    axios.delete("http://localhost:8080/products/delete/" + id)
                            .then(() => {
                                this.$emit("fetchData");
                                this.$router.push({name : 'MerchantProducts'});
                                sweetalert({
                                    text: "Đã xoá sản phẩm!",
                                    icon: "success",
                                    closeOnClickOutside: false,
                                });
                            })
                            .catch(err => console.log(err));
                            }
            })
    }
},
};
</script>
  
<style scoped>
.embed-responsive .card-img-top {
object-fit: cover;
}

a {
text-decoration: none;
}

.card-title {
color: #484848;
font-size: 1.1rem;
font-weight: 400;
}

.card-title:hover {
font-weight: bold;
}

.card-text {
font-size: 0.9rem;
}

#edit-product {
float: left;
}
#delete-product {
float: right;
}
</style>