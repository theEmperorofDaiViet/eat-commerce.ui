<template>
    <div id="home">
        <div id="background-div" class="page-holder bg-cover">
            <div class="row">
                <div class="container col-md-6 pt-5 px-5 px-md-0">
                    <header class="text-left text-white py-5">                     
                        <h3 class="mb-4 rounded"><a href="#start-shopping" class="bg-white px-2 py-2 rounded" id="heading">Đặt ngay!</a></h3>
                        <p id="content" class="lead mb-0 bg-dark p-1 rounded">Khám phá ẩm thực bốn phương ngay trên thiết bị của bạn!</p>
                    </header>
                </div>
            </div>
        </div>

        <div id="start-shopping" class="container">
            <div class="row">
                <div class="col-12 text-left">
                    <h2 class="pt-3">Danh mục</h2>
                </div>
            </div>
            <div class="row">
                <div v-for="index in this.category_size" :key="index" class="col-md-6 col-xl-4 col-12 pt-3  justify-content-around d-flex">
                    <CategoryBox :category="categories[index-1]"></CategoryBox>
                </div>
            </div>
        </div>

        <hr>
        <div class="container">
            <div class="row">
                <div class="col-12 text-left">
                <h2 class="pt-3">Món ăn hàng đầu</h2>
                </div>
            </div>
            <div class="row">
                <div v-for="index in this.product_size" :key="index" class="col-md-6 col-xl-4 col-12 pt-3  justify-content-around d-flex">
                <ProductBox :product="products[index-1]">
                </ProductBox>
                </div>
            </div>
        </div>

        <hr>
        <div class="container">
            <div class="card">               
               <div class="row">                   
                   <div class="col-2">                                        
                       <img src="../assets/avatar.jpg" width="150" class="rounded-circle mt-2">                                      
                   </div>
                   
                   <div class="col-10">                       
                       <div class="comment-box ml-2">
                            <form ref="anyName">                         
                           <h4>Đánh giá về chúng tôi</h4>                           
                           <div class="rating" ref="anyName"> 
                               <input type="radio" name="rating" value="5" id="5" v-model="score" required><label for="5">☆</label>
                               <input type="radio" name="rating" value="4" id="4" v-model="score" required><label for="4">☆</label> 
                               <input type="radio" name="rating" value="3" id="3" v-model="score" required><label for="3">☆</label>
                               <input type="radio" name="rating" value="2" id="2" v-model="score" required><label for="2">☆</label>
                               <input type="radio" name="rating" value="1" id="1" v-model="score" required><label for="1">☆</label>
                           </div>
                           
                           <div class="comment-area">                               
                               <textarea class="form-control" placeholder="Bạn nghĩ gì?" rows="3" v-model="description"></textarea>                           
                           </div>
                           
                           <div class="comment-btns mt-2">                               
                               <div class="row">                                   
                                   <div class="col-6">                                       
                                       <div class="pull-left">                                       
                                       <!-- <button class="btn btn-success btn-sm">Cancel</button>                                                -->
                                       </div>                                   
                                   </div>                                   
                                   <div class="col-6">                                       
                                       <div class="pull-right">                                       
                                       <button type="button" class="btn btn-success send btn-sm" @click="addRating">Gửi <i class="fa fa-long-arrow-right ml-1"></i></button>
                                       </div>                                   
                                   </div>                               
                               </div>                           
                           </div>
                        </form>                                               
                       </div>                   
                   </div>                       
               </div>     
           </div>
        </div>
    </div>
</template>

<script>
const axios = require("axios")
const sweetalert = require("sweetalert")
import ProductBox from "../components/Product/ProductBox";
import CategoryBox from "../components/Category/CategoryBox";
export default {
    name: 'Home',
    components : { ProductBox, CategoryBox},
    props : ["baseURL", "products", "categories"],
    data(){
        return{
            category_size: 0,
            product_size: 0,
            id: null,
            score: null,
            description: null,
            userId: null,
            createdDate: null,
            token: null
        }
    },
    methods: {
        async addRating() {
            const newRating = {
                id: this.id,
                score: this.score,
                description: this.description,
                userId: this.userId,
                createdDate: this.createdDate
            }
            if (!this.token) {
                sweetalert({
                    text: "Vui lòng đăng nhập trước!",
                    icon: "error",
                });
                return;           
            }
            axios.post(`${this.baseURL}/rating/create?token=${this.token}`, newRating)
                .then((response) => {             
                    if (response.status == 201) {
                        this.$router.push({name : 'Home'});
                        sweetalert({
                            text: "Cảm ơn bạn đã đánh giá!",
                            icon: "success",
                            closeOnClickOutside: false,
                        });
                    // refresh nav bar
                    this.$emit("fetchData");                    
                    }
            },
            (error) => {
                console.log(error);
            }
            );
            this.$refs.anyName.reset();
            this.description = null;
        }
    },
    mounted(){
        this.category_size = this.categories.length;
        this.category_size = Math.min(6, this.category_size);

        this.product_size = this.products.length;
        this.product_size = Math.min(8, this.product_size);

        this.token = localStorage.getItem("token");
    }
}
</script>

<style scoped>
.page-holder {
    min-height: 100vh;
}

.bg-cover {
    background-size: cover !important;
}

#background-div {
    background: url(../assets/home.jpg)
}

#heading {
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    opacity: 0.8;
    font-family: 'Josefin Sans', sans-serif;
}

#content {
    opacity: 0.8;
}

h2 {
    font-family: 'Josefin Sans', sans-serif;
}

/* Rating */
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200&display=swap');

body {
    display: grid;
   place-items: center;
    font-family: 'Manrope', sans-serif;
   background: red;
    
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    padding: 20px;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border-radius: 6px;
}

.comment-box{
    
    padding:5px;
}



.comment-area textarea{
   resize: none; 
        border: 1px solid #ad9f9f;
}


.form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #ffffff;
    outline: 0;
    box-shadow: 0 0 0 1px rgb(255, 0, 0) !important;
}

.send {
    color: #fff;
    background-color: #ff0000;
    border-color: #ff0000;
}

.send:hover {
    color: #fff;
    background-color: #f50202;
    border-color: #f50202;
}


.rating {
 display: flex;
        margin-top: -10px;
    flex-direction: row-reverse;
    margin-left: -4px;
        float: left;
}

.rating>input {
    display: none
}

.rating>label {
        position: relative;
    width: 19px;
    font-size: 25px;
    color: #ff0000;
    cursor: pointer;
}

.rating>label::before {
    content: "\2605";
    position: absolute;
    opacity: 0
}

.rating>label:hover:before,
.rating>label:hover~label:before {
    opacity: 1 !important
}

.rating>input:checked~label:before {
    opacity: 1
}

.rating:hover>input:checked~label:before {
    opacity: 0.4
}
</style>