<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <br/>
                <h1>Thanh toán thành công!</h1>                
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center">
                <img class="img-fluid pt-5" src="../../assets/success.png" alt="Success">
            </div>
        </div> 
        <div class="text-center">
        <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        </div>
    </div>
</template>
  
<script>
const axios = require("axios")
export default {
    name:'PaymentSuccess',
    props:["baseURL"],
    data() {
        return {
            token: null,
            sessionId:null
            }
    },
    methods:{
        saveOrder() { 
                axios.post(this.baseURL + "/order/add/?token=" + this.token+"&sessionId=" + this.sessionId)
                    .then(()=>{
                        window.location.href = '/order'
                    }).catch((error)=>{
                        console.log(error);
                    })
        }
    },
    mounted(){
        this.token = localStorage.getItem("token");
        this.sessionId = localStorage.getItem("sessionId");
        this.saveOrder()
    }
}
</script>
 
<style scoped>
h1 {
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