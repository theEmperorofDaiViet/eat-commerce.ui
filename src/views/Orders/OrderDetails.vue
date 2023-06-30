<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h1 class="pt-3">Mã đơn hàng: {{orderID}}</h1>
            </div>
        </div>

        <div v-for="(orderItem, index) in orderItems" :key="index" class="row mt-2 pt-3 justify-content-around">
            <div class="col-1"></div>
            <div class="col-md-3 embed-responsive embed-responsive-16by9">
                <img :src="orderItem.product.imageUrl" class="w-100 card-img-top embed-responsive-item">
                <hr/>
            </div>

            <div class="col-md-5 px-3">
                <div class="card-block px-3">
                    <h4 class="card-title" >{{orderItem.product.name}}</h4>
                    <p id="item-price" class="mb-0">Giá: {{orderItem.product.price?.toLocaleString('vi', {style : 'currency', currency : 'VND'})}}</p>
                    <p id="item-quantity" class="mb-0">Số lượng: {{orderItem.quantity}}</p>
                    <p id="item-total-price" class="mb-0">
                        Thành tiền: <span class="font-weight-bold">{{ (orderItem.price * orderItem.quantity)?.toLocaleString('vi', {style : 'currency', currency : 'VND'})}}</span>
                    </p>
                </div>
            </div>
            <div class="col-1"></div>
        </div>

        <div class="total-cost pt-2 text-right">
            <h5>Tổng cộng: {{order.totalPrice?.toLocaleString('vi', {style : 'currency', currency : 'VND'})}}</h5>
        </div>
    </div>


</template>

<script>
const axios = require('axios')
export default {
    name: 'OrderItems',
    props: ["baseURL"],

data() {
    return {
        orderItems:[],
        order: {},
        token: null,
        orderID: 0
    }
},

methods:{
    getOrder(){
        axios.get(`${this.baseURL}/order/${this.orderID}?token=${this.token}`).then((response) => {
            if(response.status === 200) {
                this.order = response.data
                this.orderItems = this.order.orderItems
            }
            },
            (err)=>{
                console.log(err)
            })
    }

},

mounted(){
    this.orderID = this.$route.params.id;
    this.token = localStorage.getItem("token")
    this.getOrder()
}
}

</script>

<style scoped>

    h1 {
        font-family: 'Roboto', sans-serif;
        color: #484848;
        font-weight: 700;
    }

    .embed-responsive .card-img-top {
        object-fit: cover;
    }

</style>
